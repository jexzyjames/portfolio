import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCxKO85EunTCXr1yEBMFsF0TM52lFdTz8g',
    authDomain: "consoleauths.firebaseapp.com",
    projectId: "consoleauths",
    storageBucket: "consoleauths.firebasestorage.app",
    messagingSenderId: "12904864693",
    appId: "1:12904864693:web:6c69c38772252b3662d7fc"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const jobCollection = await getDocs(collection(db, "jobs"));
    setJobs(jobCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const addJob = async () => {
    if (!jobTitle || !jobDescription) return;
    await addDoc(collection(db, "jobs"), { title: jobTitle, description: jobDescription });
    fetchJobs();
  };

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const logOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Job Board</h2>
      {!user ? (
        <div>
          <p>Welcome, {user?.displayName}</p>
          <button onClick={logOut} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
        </div>
      ) : (
        <button onClick={signIn} className="bg-blue-500 text-white px-4 py-2 rounded">Sign in with Google</button>
      )}

      {!user && (
        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Job Title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={addJob} className="bg-green-500 text-white px-4 py-2 rounded">Add Job</button>
        </div>
      )}

      <h3 className="mt-6 text-xl font-semibold">Job Listings</h3>
      <ul>
        {jobs.map(job => (
          <li key={job.id} className="border p-4 mt-2">
            <h4 className="font-bold">{job.title}</h4>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobBoard;