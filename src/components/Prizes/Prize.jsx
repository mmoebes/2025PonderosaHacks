import React from "react";
import "./Prize.css";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";

// Import images
import Nolan2 from "/images/Nolan2.png";
import Eva2 from "/images/Eva2.png";
import Ella1 from "/images/Ella1.png";
import Ash1 from "/images/Ash1.png";
import Ryleigh1 from "/images/Ryleigh1.png";
import Grace1 from "/images/Grace1.png";
import Neeva1 from "/images/Neeva1.png";

const Prize = ({ imageWidth = 220, imageHeight = "auto" }) => {
  const imgStyle = {
    width: `${imageWidth}px`,
    height: imageHeight,
    objectFit: "contain",
    display: "block",
    marginInline: "auto",
  };

  return (
    <div className="team-container" id="Leadership">
      <h1 className="heading-tag-line">Leadership</h1>
      <hr className="heading-underline" />
      <h1 className="title-line">
        Interested in joining the leadership team? Contact us&nbsp;
        <a
          href="mailto:nolan@ponderosa-hacks.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope color="green" />
        </a>
      </h1>

      <div className="responsive-three-column-grid">
        <div>
          <img src={Nolan2} alt="Nolan" style={imgStyle} />
          <br /><br />
          <p><b>President / Event Organizer</b></p>
          <p>
            <b>Nolan Takeuchi – BASIS Flagstaff, Junior</b><br />
            Nolan plans to learn about both business and engineering 
            in college and loves working with all kinds of technology. 
            He enjoys coding in Python and Java as well as 
            making and printing 3D models. Nolan also plays 
            Varsity Basketball for his high school and loves spending time 
            outdoors in the ponderosa pines.
          </p>
          <a href="mailto:nolan@ponderosa-hacks.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope color="green" />
          </a>
          &nbsp;
          <a href="https://www.linkedin.com/in/nolan-takeuchi-694574373/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn color="green" />
          </a>
        </div>

        <div>
          <img src={Eva2} alt="Eva" style={imgStyle} />
          <br /><br />
          <p><b>Media Manager</b></p>
          <p>
            <b>Eva Wilke – Coconino High School, Senior</b><br />
            Eva serves as the Student President of the Career 
            and Technical Student Organization, where she leads 
            with creativity and a passion for innovation. 
            Outside the classroom, Eva channels her energy into volleyball,
             competing on both her school’s indoor and beach teams.
          </p>
        </div>

        <div>
          <img src={Ella1} alt="Ella" style={imgStyle} />
          <br /><br />
          <p><b>Advertising Lead</b></p>
          <p>
            <b>Gabriella Takeuchi – BASIS Flagstaff, Freshman</b><br />
                Ella plans to study computational biology in college and 
                pursue a career in medicine. She has been learning 
                to code in Python and C++ and enjoys exploring different research fields. 
                She hopes to combine her passion for science and 
                technology to make a meaningful impact to the future of healthcare.

          </p>
        </div>

        <div>
          <img src={Grace1} alt="Grace" style={imgStyle} />
          <br /><br />
          <p><b>Outreach Director</b></p>
          <p>
            <b>Grace Kim – Northland Prep Academy, Junior</b><br />
            Grace has ambitions of pursuing a career in STEM and enjoys 
            spending her free time playing tennis, where she is the best 
            at her high school. She uses this skill to help others learn to
            play tennis as the Program Director of ACEing Autism Flagstaff.
          </p>
        </div>

        <div>
          <img src={Ash1} alt="Ash" style={imgStyle} />
          <br /><br />
          <p><b>Outreach Director</b></p>
          <p>
            <b>Ash Mellinger – Coconino High School, Senior</b><br />
            Ash is currently in the CIT engineering program at his high school and aspires 
            to pursue engineering. In his free time while not working on engineering projects, 
            Ash enjoys playing soccer and spikeball with his friends.
          </p>
        </div>

        <div>
          <img src={Neeva1} alt="Neeva" style={imgStyle} />
          <br /><br />
          <p><b>Outreach Director</b></p>
          <p>
            <b>Neeva Patel – Coconino High School, Junior</b><br />
              Neeva is passionate about pursuing a career in medicine, 
              with a particular interest in the field of neuroscience.
              She is also a member of her school's model UN team.
              Outside of academics, Neeva enjoys staying active through 
              volleyball and loves exploring new places.
   
          </p>
        </div>

        <div>
          <img src={Ryleigh1} alt="Ryleigh" style={imgStyle} />
          <br /><br />
          <p><b>Outreach Director</b></p>
          <p>
            <b>Ryleigh Conklin – Flagstaff High School, Junior</b><br />
            Ryleigh is interested in engineering and is a problem solver 
            and hands-on learner. She is involved in school activities and 
            side hustles that let her explore creativity and leadership. 
            She also enjoys balancing her academics with a love for sports, 
            such as flag football and track.
          </p>
        </div>


        
      </div>
    </div>
  );
};

export default Prize;
