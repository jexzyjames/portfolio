import ratings from '../assets/ratings.png'
import unilag from '../assets/unilagrepl.png'
import tracker from '../assets/tracker.png'
import edu from '../assets/edu.png'

import ecommerce from '../assets/ecommerce.png'
// import tracker from '../assets/tracker.png'
const mywork_data = [
    {
        w_no:1,
        w_name:"Web design",
        w_img:tracker,
        text:'A little overview that also helps you track the current time and date ',
        language:{
            text1: `html` ,
            text2: 'css',
            text3: 'javascript',
        },
        link:'https://zuri-task-nine.vercel.app/'
    },
    {
        w_no:2,
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
        w_no:3,
        w_name:"Web design",
        w_img:ratings,
        text:'A rating component that gives feedbacks on how a company service is being measured on rendered.',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'Javascript',
        },
        link:'https://interactive-rating-component-psi-three.vercel.app/'
    },
    {
        w_no:4,
        w_name:"Web design",
        w_img:ecommerce,
        text:'An E-commerce responsive and with functionalities like 1. Add to Cart 2. Check out',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'Javascript',
        },
        link:'https://ecommerce-phi-one-77.vercel.app/'
    },
    {
        w_no:5,
        w_name:"Web design",
        w_img:edu,
        text:'The Landing page of an institution where you can see videos of the university, programs offered and feedbacks from  the students that attended. ',
        language:{
            text1: 'html',
            text2: 'css',
            text3: 'React Js',
            text4: 'Material UI',
        },
        link:'https://educate-xi.vercel.app/'
    },
]
 
export default mywork_data;
