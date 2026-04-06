import React from "react";
import "./about.css";
import prizes from "/images/prizes2026.png";
import PH1 from "/images/PH1-26.png";
import PH2 from "/images/PH2-26.png";
import AZDS from "/images/AZDS.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-head-section">
       {/*
       <h1 className="about-heading2">FREE Registration: Win PRIZES + get FREE stuff!</h1>
       <h1 className="about-heading2">Limited Spots - Register Before March 25th for a chance to win More Prizes!</h1>    
       */}
       {/*
        <h1 className="about-heading2">Registration will open soon!</h1>
        */}
         <h1 className="about-heading2">Check out some pictures below, and stay tuned for next year's event! </h1> 
          
      </div>
      <h1 className="heading-tag-line3">About</h1>
      <hr className="heading-underline3" />
      <div className="about-subsection" id="About">

        <div className="about-left-section">
        {/*}  
          <h2 className="about-heading">
          What is a Hackathon? 
          </h2>
          <p>
Whether you’re passionate about Computer Science, Engineering, Art, Medicine, 
or anything else, a hackathon is for you! 
It’s a chance to bring creative ideas to life while tackling real-world challenges.
 While we might not solve global issues like world hunger, water pollution, 
 or accessibility barriers in a single day, we can prototype
  and imagine innovative solutions that could one day make a difference.

Over the course of the event, you’ll brainstorm, design, 
and build your project before presenting it to a panel of judges
 for a chance to win awesome prizes. Throughout the day, enjoy free meals and 
 snacks, skill-building workshops, fun side activities, and giveaways from our sponsors.



          </p>
          <p>
Even though it’s called a “hackathon,” your brain is the only thing you’ll be hacking! 
If you can code, great! Build a program or prototype your idea digitally. 
If not, no problem! You can create anything that expresses your skills and imagination,
 from a physical device or website 
 (we’ll even teach you how to build one) to a game, model, or concept presentation. 
 Volunteers and mentors with experience in engineering, computer science, 
 and more will be there to guide you along the way.

Come with a team or form one when you arrive.


          </p>
          <p>Everything begins with an idea.</p>

          {} 
                    <h2 className="about-heading">
          A sneak peak at our prizes...
          </h2>
              <a href="/">
                    <img src={prizes} alt="Prizes" class="responsive2"/>
              </a>
              
          */}


          <p>
          Ponderosa Hacks is a student-led organization founded in 2024. Our mission is to promote innovation, teamwork, and STEM topics for students in Arizona and beyond.
          We held our first ever hackathon event on October 5th, 2024 at BASIS Flagstaff. This year, we held our second annual hackathon event on March 28th at BASIS Flagstaff, and it was a huge success!</p>
          <a href="/" >
                    <img src={PH1} class="responsive2"/>
              </a>
          <p><br />
          This year, the theme for the hackathon was wildfire defense. Students worked in teams to brainstorm and create innovative solutons
          to one of three theme categories: detection, supression, or communication. 7th-12th grade students from several schools across Arizona with various backgrounds and interests, created websites, apps, video games, and physical
          prototypes to compete for prizes. Throughout the day, workshops were held that taught students skills such as working with microcontrollers, coding rovers, building websites, and 3D modeling.
           Thanks to our generous sponsors, we were able to provide breakfast (Bosa donuts, waffle station, sausages, and fruit) and lunch (Firehouse Subs, 
          chips, and drinks), as well as snacks all day including a chocolate fountain, in addition to free tshirts and swag for everyone, and even prizes for the best projects!
          </p>
          <a href="/">
                    <img src={PH2} class="responsive2"/>
              </a><br />
              <br /><p>Lots of technology was leveraged for workshops and student projects, such as HTML, CSS, Github, Codespace, Arduinos, Creality 3D, electronics boards, and robotics kits.
              See more pictures from the event on our&nbsp;          
              {/*}
              <a href="https://ponderosa-hacks.devpost.com/project-gallery" target="_blank">
              Devpost Project Gallery</a> &nbsp;and view our&nbsp;  
              */}        
              <a href="https://www.instagram.com/ponderosa_hacks/" target="_blank">
              Instagram Account</a>&nbsp;for select photos from the event.
          </p>
          


        </div>

      </div>
      
    </div>
    
  );
};

export default AboutSection;
