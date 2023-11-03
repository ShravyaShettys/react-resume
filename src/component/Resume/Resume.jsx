import React from 'react';
import girl from '../../re.webp';
import './Resume.css';

function ProfilePic(){

    return <img src={girl} className="Resume-girl" alt="girl" />

}
function Name(){
  return <h1>Shravya S Shetty</h1>
}
function ProfileDescription(){
    return(
      <div>
        <body>
      <h1>Profile Description</h1>
     <p>Detail oriented and ambitious engineering student with a passion for obtaining accurate results and working on a team.Seeking an entry_level position in the engineering it industryto pursue a career as a software engineer and improve my skill sets."I am an organised, efficient and hard working person, and am willing to discover and accept new ideas which can be put into practice effectively. I am a good listener and learner, able to communicate well with a group and on an individual level.I am able to motivate and direct my talents and skills to meet objectives."</p>
     </body>
     </div>
    );

}
function ContactInformation(props){
  return (
   <div>
    <body>
    <h1>Contact Information:</h1>
    <p>&#8226;Email Id: {props.email} </p>
    <p>&#8226;Phone number: {props.phonenumber}</p>
    <p>&#8226;Linkedin Profile: {props.linkedin}</p>
     </body>
    </div>
  );
   
}
function Education(){
  return(
    <div >
     
        <body>
      
      <h1>Education:</h1>
      <p>&#8226;Dandathirtha English Medium School</p>
      <p>&#8226;Completed PU from Dandathirtha PU College</p>
      <p>&#8226;Pursueingng be in artificial intelligence and data science</p>
      </body>
    </div>
  );
}
function Skills(){
  return(
    <div>
      <body>
    
    <h1>Skills:</h1>
    <p>&#8226;Proficient in c,c++,java</p>
    </body>
    </div>
  )
}
function Achievement(){
  return(
    <div>
      <body>
        <h1>Achievement:</h1>
        <p>&#8226;I have won in  c++ quiz</p>
      </body>
    </div>
  )
}
function Resume() {
  return (
    <div>
        <body>
        <ProfilePic />
        
        <Name />
        <ProfileDescription />
        <ContactInformation  email="shravya.21ad052@sode-edu.in" phonenumber="+5678766" linkedin="https://www.linkedin.com/in/shravya-s-shetty-333427263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
        <Education />
        <Skills />
        <Achievement />
        </body>
    </div>

  )
}

export default Resume