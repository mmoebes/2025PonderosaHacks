import React from "react";
import "./about.css";
//import prizes from "/images/prizes.png";
import PH1 from "/images/PH1.png";
import PH2 from "/images/PH2.png";
import AZDS from "/images/AZDS.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-head-section">
       
        <h1 className="about-heading2">FREE Registration: Win PRIZES + get FREE stuff!</h1>
        <h1 className="about-heading2">2025 Limited Spots - Register Now!</h1>    

         {/* <h1 className="about-heading2">Stay tuned for our next free Hackathon event and mini-workshops in Flagstaff, AZ</h1>*/}
          
      </div>
      <h1 className="heading-tag-line3">About</h1>
      <hr className="heading-underline3" />
      <div className="about-subsection" id="About">

        <div className="about-left-section">
          {/*
          <h2 className="about-heading">
          What is a Hackathon? 
          </h2>
          <p>
          Whether you are into Computer Science, Engineering, Art, Medicine, or anything else, a hackathon is for you! 
          It's an opportunity to create innovative solutions to challenging problems. While we will not likely find THE solution 
          to a global problem such as world hunger, water pollution, or accessibility barriers, we can workshop creative ideas 
          that may one day contribute to actual solutions. With hours 
          to brainstorm, create, and model, you will present your project to a panel of judges for a chance to win 
          cool prizes. During the day, we will provide food, snacks, activities to earn prizes, skills workshops to help 
          with your project, and free goodies from our sponsors.

          </p>
          <p>
            Even though our event is called a hackathon, your brain is the only thing you'll be hacking. 
            If you can code, feel free to write programs or program a solution for your project. And if you can't code, don't worry! 
            You'll be at no disadvantage. You can utilize any of your skills or passions to create
            your project. You can make a prototype of a physical device, build a website (we'll have a workshop teaching you 
            how), a game, or anything you can think of. We'll have volunteers and people knowledgeable in engineering, 
            computer science, and other topics to help you with your project. Come with a team or find one at the event. 
          </p>
          <p>Everything begins with an IDEA.</p>
          <h2 className="about-heading">
          A sneak peak at our prizes...
          </h2>
              <a href="/">
                    <img src={prizes} alt="Prizes" class="responsive2"/>
              </a>
              */}

          <p>
          Ponderosa Hacks is a student-led organization founded in 2024. Our mission is to promote innovation, teamwork, and STEM topics for students in Arizona and beyond.
          We held our first free hackathon event on October 5th, 2024 at BASIS Flagstaff school and it was an huge success! </p>
          <a href="/" >
                    <img src={PH1} class="responsive2"/>
              </a>
          <p><br />
          Students worked in teams to brainstorm and create innovative solutons
          to three challenging theme categories presented at the event. 7th-12th grade students from several schools in Arizona with various backgrounds and interests, created websites, apps, and physical
          prototypes to compete for prizes. Throughout the day, workshops were held for how to get started on a hackathon project, website building 101, 3D printing demos, and a fun robotics
          smart car Arduino programming challenge. Thanks to our generous sponsors, we were able to provide breakfast (waffle station with fruit and sausage) and lunch (Firehouse Subs 
          and chips), as well as snacks all day including a chocolate fountain and Sonic slushies - in addition to donated tshirts, swag, and prizes.
          </p>
          <a href="/">
                    <img src={PH2} class="responsive2"/>
              </a><br />
              <br /><p>Lots of technology was leveraged for workshops and student projects, such as HTML, CSS, Github, Codespace, Arduino IDE, Creality 3D, electronics boards, and robotics kits.
              See all the AMAZING projects created at the Ponderosa Hacks event in the&nbsp;          
              <a href="https://ponderosa-hacks.devpost.com/project-gallery" target="_blank">
              Devpost Project Gallery</a> &nbsp;and view our&nbsp;          
              <a href="https://www.instagram.com/ponderosa_hacks/" target="_blank">
              Instagram Account</a>&nbsp;for select photos from the event.
          </p>
          <p><br />
              The Arizona Daily Sun also wrote an article about our hackathon! Check out the&nbsp;          
              <a href="https://azdailysun.com/gallery-ponderosa-hacks-hackathon/collection_cd949b5a-8446-11ef-b13f-43e42db8a0d5.html#1" target="_blank">
              photos</a> &nbsp;and&nbsp;          
              <a href="https://azdailysun.com/news/local/education/flagstaff-students-organize-hackathon-event-to-promote-stem-education/article_cfac93b6-84d7-11ef-8dc6-43c987d12bfa.htm" target="_blank">
              article&nbsp;</a>(subscription required to read).</p>
              <a href="https://azdailysun.com/news/local/education/flagstaff-students-organize-hackathon-event-to-promote-stem-education/article_cfac93b6-84d7-11ef-8dc6-43c987d12bfa.htm">
                    <img src={AZDS} class="responsive3"/>
              </a><br />

        </div>

      </div>
      
    </div>
    
  );
};

export default AboutSection;
