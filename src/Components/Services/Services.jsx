import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
 import Resume from './resume.pdf'
 import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
const Services = () => {
    const transition = {duration:1,type:'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="services" id='Services'>
       {/*left side*/}
       <div className="awesome">
           <span stye={{color:darkMode? 'white':''}}>My Awesome</span>
           <span>Services</span>
           <spane>
               hi this is yaswanth kantheti
               <br />
               pursuing b.tech
           </spane>
           <a href={Resume} download>
           <button className="button s-button">Download Cv</button>
           </a>
            {/* <button className="button s-button">Download Cv</button> */}
          
           <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
       </div>
       {/*right side*/}
       <div className="cards">
           <div 
           style={{left:'14rem'}}>
               <Card
               emoji={HeartEmoji}
               heading={'Design'}
               detail={"Figma,css,css,csc,csc,scsc,,"}
               />
           </div>
          
           {/*Second Card*/}
           <motion.div 
            initial={{left:'-11rem',top:'12rem'}}
            whileInView={{left:'-4rem'}}
            transition={transition}
           style={{top:"12rem",left:"-4rem"}}>
           <Card
               emoji={Glasses}
               heading={'Developer'}
               detail={"Html,Css,,css,css,csc,csc,scsc,"}
               />
           </motion.div>
           {/*Third Card*/}
           <div style={{top:"19rem",left:"12rem"}}>
           <Card
               emoji={Humble}
               heading={'UI/UX'}
               detail={"Designing,,css,css,csc,csc"}
               />
           </div>

           <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
       </div>
   </div>
  )
}

export default Services