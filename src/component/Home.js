import React from "react";
import image from './dave.jpg'
import image2 from  './dave2.jpg'
import image3 from './cv.png'
import { BsTelephoneFill } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { SiMinutemailer,SiTelegram } from 'react-icons/si';
import {TfiYoutube} from 'react-icons/tfi';
import {BsTwitter} from 'react-icons/bs';
import {FaInstagramSquare} from 'react-icons/fa';
import {ImFacebook2} from 'react-icons/im';

import Prog from './Prog'

import  './Style.css'




function Home(){
    return(
        
        <body>
      
            
<header>
    
<a href="#" className="logo">Dave <span> Winner</span>.</a>

<div className="bx bx-menu" id="menu-icon"></div>
<ul class="navbar">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#cv"></a></li>
    <div className="bx bx-moon" id="darkmode"></div>
</ul> 

</header>


<section className="home" id="home">
    <div className="social">
        <a href="https://www.facebook.com/dawit.bireda.33"><i className="bx bx1-github"></i><ImFacebook2/></a>
        <a href="#"><i className="bx bx1-instagram"></i><BsTwitter/></a>
        <a href="https://t.me/davewinner1"><i className='bx bxl-telegram'><SiTelegram/></i> </a>
    </div>
    <div className="home-img">
    <img src={image} className='dave' alt="no image" />
    </div>
    <div className="home-tex">
        
        <span>Hello,I'm</span>
        <h1> Dave Bireda</h1>
        <h2>Frontend Developer and Data analys</h2>
        <p>Am dave software enginner and Frontend Developer and Graphical user interface designer </p>
    
        <a href="#cv" className="btn">Open CV</a>


        
    </div>
    
</section>
<section className="about" id="about">
    <div className="heading">
<h2>About Me</h2>
        <span>Introduction</span>
    </div>
    <div className="about-container">
        <div className="about-img">
        <img src={image2} className='dave2' alt="no image" />

        </div>
        <div className="about-text">
            <p>I am a qualified and certified web development and Machine learning ,power bi, python big data of experience in administration and website design. Strong creative and analytical skills.
                 Team player with an eye for detail.
                 and perform by Frontend design in website design Built live data streaming process based on AI developed E-learning platform frontend developed E-tuition platform frontend developed
                 
                 </p>
                 <div className="information">
                    <div className="info-box">
                        <i className="bx bxs-user"></i>
                        <span>
                       < BsTelephoneFill/>  ....   +251943852394
                        </span>
                    </div>
                    <div className="info-box">
                        <i className="bx bxs-envelope"></i>
                        <span> <TfiEmail/> ....davewin2394@gmail.com</span>
                        
                    </div>
                    <div className="info-box">
                        <i className="bx bxs-envelope"></i>
                        
                        <span> <SiMinutemailer/> ....@davewinner1</span>
                    </div>
                 </div>
                 <a href="#cv" className="btn">Open CV</a>
        </div>
    </div>
</section>
{/* #-- About Section End /* */}

<section className="skills" id="skills">
    <div className="heading">
        <h2>Skills</h2>
        <span>My Skills</span>
    </div>
    <div className="skills-conytainer">
        <div className="bars">

           <Prog/>
            

        
       
        </div>
    </div>
    <div>
    <p></p>
    </div>
</section>
{/* <!-- Skills Section End --> */}
<section className="services" id="services">
<div className="heading">
        <h2>Services</h2>
        <span>Our services</span>

    </div>
    <div className="services-content">

        <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <a href="https://brainstation.io/career-guides/what-is-web-development">Learn More</a>
        </div>

        <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Backend Development</h3>
            <a href="https://www.guru99.com/what-is-backend-developer.html">Learn More</a>
        </div>

        <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>UI/UX Design</h3>
            <a href="https://flatironschool.com/blog/what-is-ux-ui-design/">Learn More</a>
        </div>
        <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>App Development</h3>
            <a href="https://www.outsystems.com/glossary/what-is-application-development/">Learn More</a>
        </div>

        <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>project Management</h3>
            <a href="https://www.techopedia.com/definition/13132/project-management-software">Learn More</a>
        </div>
        
    </div>
</section>
{/* <!-- Services Section End --> */}

{/* CV FILE */}
<section className="cv" id="cv">
    <div className="My Cv">
        <h2>My CV Files</h2>
        <img src={image3} className='cv' alt="no image" />
    </div>
</section>

<section className="contact" id="contact">
    <div className="heading">
        <h2>Contact</h2>
        <span>Connect With Us</span>
    </div>
    <div className="contact-form">
        <form action="">
            <input type="text" placeholder="your name"></input>
            <input type="email" name="" id="" placeholder="Your Email"></input>
            <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here..."></textarea>
            <input type="button" value="Send" class="contact-button"></input>
        </form>
    </div>
</section>
{/* <!-- Contact Section End --> */}
<div className="footer">
    <h2>Follow Us</h2>
    <div className="footer-social">
    <a href="https://www.facebook.com/dawit.bireda.33"><i className='bx bxl-facebook'><ImFacebook2/></i></a>
        <a href="https://www.twitter.com/username@Dawit2394"><i className='bx bxl-twitter'><BsTwitter/></i></a>
        <a href="#"><i className='bx bxl-instagram'><FaInstagramSquare/></i></a>
        <a href="#"><i className='bx bxl-youtube'><TfiYoutube/></i> </a>
        <a href="https://t.me/davewinner1"><i className='bx bxl-telegram'><SiTelegram/></i> </a>
       
    </div>
</div>
<div className="copyright">
    <p>  &#169;Dave winner|All Right Reserved </p>
</div>

        </body>
        
    )
}
export default Home;