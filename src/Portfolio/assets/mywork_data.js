import roqqu from '../assets/roqqu.png'
import unilag from '../assets/unilagrepl.png'
import tobams from '../assets/tobams.png'
import edu from '../assets/edu.png'
import rst from '../assets/rest.png'
import forex from '../assets/forex.png'
import gemii from '../assets/gemi.PNG'
import waste from '../assets/Waste.jpg'  // ✅ Added missing import

const mywork_data = [
    {
        w_no:1,
        w_name:"Web design",
        w_img:gemii,
        text:'Gemini clone  where you can 1. Sign Up and Login 2, View Saved Prompts.',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'React Js',
            text4: 'Material UI',
        },
        link:'https://gemini-clone-gamma-one.vercel.app/'
    },
    {
        w_no:2,
        w_name:"Web design",
        w_img:edu,
        text:'The Landing page of an institution where you can see videos of the university, programs offered and feedbacks from  the students that attended.',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'React Js',
            text4: 'Material UI',
        },
        link:'https://educate-xi.vercel.app/'
    },
    {
        w_no:3,  // ✅ Changed from 7 (was duplicate)
        w_name:"Web design",
        w_img:waste,
        text:'A landing page of a Recycling app Empowering everyday Africans Using AI and gamified learning to transform how Africa recycles - starting with you.',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'React',
        },
        link:'https://wastegrid.vercel.app/'
    },
    {
        w_no:4,
        w_name:"Web design",
        w_img:forex,
        text:'A responsive currency conversion web application using the Frankfurter API to retrieve exchange-rate data and provide currency conversions through a simple, user-friendly interface.',
        language:{
            text1: 'html',
            text2: 'Tailwind css',
            text3: 'React',
        },
        link:'https://forex-check-sooty.vercel.app/'
    },
    {
        w_no:5,
        w_name:"Web design",
        w_img:unilag,
        text:'The Landing Page of the  University of Lagos Student Portal  replicated',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'React JS',
        },
        link: 'https://student-portal-ivory.vercel.app/'
    },
    {
        w_no:6,
        w_name:"Web design",
        w_img:roqqu,
        text:'A cryptocurrency-focused web application clone inspired by Roqqu, with an emphasis on creating a modern user interface and a smooth digital financial experience.',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'React',
        },
        link:'https://roqqu-two.vercel.app/'
    },
    {
        w_no:7,
        w_name:"Web design",
        w_img:tobams,  // ✅ Changed from forex (was wrong image)
        text:'A pixel-perfect, responsive implementation of the provided Figma design of Tobams Group using Next.js and Tailwind CSS.',
        language:{
            text1: 'html',
            text2: 'Tailwind css',
            text3: 'Next',
        },
        link:'https://forex-check-sooty.vercel.app/'
    },
    {
        w_no:8,  // ✅ Changed from 7 (was duplicate)
        w_name:"Web design",
        w_img:rst,
        text:'A responsive country explorer application that allows users to browse countries and explore country-specific information through an interactive interface.',
        language:{
            text1: 'html',
            text2: 'Tailwind css',
            text3: 'React',
        },
        link:'https://rest-countries-livid.vercel.app/'
    },
];
 
export default mywork_data;
