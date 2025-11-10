import React from "react";
import "./sponsored.css";
import Pdf from "/images/SponsorInfo-v2.pdf";
import { FaDownload } from "react-icons/fa";
import S1 from "/images/Coconino.png";
import S2 from "/images/Flagtag.png";
import S3 from "/images/Hackclub.png";
import S4 from "/images/NAU_logo.png";
import S5 from "/images/Oreganos.png";
import S6 from "/images/moonshot.png";
import S7 from "/images/chickfila.png";
import S8 from "/images/marvel.png";
import S9 from "/images/warners.png";
import S10 from "/images/evergreen.png";
import S11 from "/images/findlay.png";
import S12 from "/images/boba.png";

const Sponsors = () => {
  return (
    <div className="sponsor-section" id="Sponsors">
    <div className="sponsor-head-section">
      <h1 className="heading-tag-line1">Sponsors</h1>
      <hr className="heading-underline1" />
      <h2 align="center"><br />
        Thank you for sponsoring our 2024-25 Hackathon event!
        </h2>
    </div>
    <div className="responsive-multi-column-grid">
       <div>
               <a href="/" id="Marvel Anesthesia, PLLC">
                    <img src={S8} alt="Marvel Anesthesia, PLLC" class="responsive1"/>
                </a><br />
        </div>
        <div>
        <a href="https://nau.edu/" id="Northern Arizona University">
                    <img src={S4} alt="Northern Arizona University" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://hackclub.com/" id="Hack Club">
                    <img src={S3} alt="Hack Club" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://warnercompanies.com/nursery/" id="Warner's Nursery">
                    <img src={S9} alt="Warner's Nursery" class="responsive1"/>
                </a><br />
        </div>
        <div>
        <a href="https://www.findlaytoyotaflagstaff.net/" id="Findlay Toyota Flagstaff">
                    <img src={S11} alt="Findlay Toyota Flagstaff" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://www.moonshotaz.com/" id="Northern Arizona Technology & Business Incubator, Inc.">
                    <img src={S6} alt="Northern Arizona Technology & Business Incubator, Inc." class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://www.coconinofcu.org/" id="Coconino Federal Credit Union">
                    <img src={S1} alt="Coconino Federal Credit Union" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://www.evergreeneducationalconsulting.com/" id="Evergreen Educational Consulting">
                    <img src={S10} alt="Evergreen Educational Consulting" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://www.chick-fil-a.com/" id="Chick-Fil-A">
                    <img src={S7} alt="Chick-Fil-A" class="responsive1"/>
                </a><br />
        </div>
        <div>
               <a href="https://www.flagtagaz.com/" id="FlagTag">
                    <img src={S2} alt="FlagTag" class="responsive1"/>
                </a><br />
        </div>
        <div>
                <a href="https://oreganos.com/" id="Oregano's Pizza">
                    <img src={S5} alt="Oregano's Pizza" class="responsive1"/>
                </a><br />
        </div>
        <div>
                <a href="https://boba.hackclub.com/" id="Boba Drops">
                    <img src={S12} alt="Boba Drops" class="responsive1"/>
                </a><br />
        </div>
    </div>

    <div className="sponsor-subsection">
    <div className="sponsor-left-section">

      
        <h2 className="sponsor-heading"><br />
        This event is being organized by high school students - please support us!
        </h2>
        <p>
          No donation is too small! Please consider supporting us with money, food, 
          supplies, prizes, and/or give-away items.  We have several packages available 
          with different benefits, ranging from placement of your logo on all our materials, giving out materials about your business or organization, to having a representative speak at our opening ceremony. 
          </p>
          <p>Ponderosa Hacks is fiscally sponsored by&nbsp;         
            <a href="https://hackclub.com" target="_blank">
          Hack Club
          </a>
          , a 501(c)(3) nonprofit (EIN 81-2908499), so your donations are tax deductible!
        </p>
        <div className="sponsor-heading2">
        <a href = {Pdf} target = "_blank"><FaDownload />  Download our Sponsorship Packet</a>
        <br />
        </div>
        
        <br />


          <p>Ponderosa Hacks is student-led organization that is fiscally sponsored by Hack Club, a 501(c)(3) nonprofit (EIN 81-2908499), so all donations are tax deductible. Please support us by donating to our cause
          or sponsoring a future event or workshop. Thank you!
        </p>
            <div className="sponsor-heading2">
                <button
                  type="button3"
                  className="btn3 discord3"
                >
                <a href="https://hcb.hackclub.com/donations/start/ponderosa-hacks" target="_blank">
                    Donate/Sponsor 
                </a>
                </button>
            </div>    
      </div>
      </div>
  </div>
  );
};
export default Sponsors;
