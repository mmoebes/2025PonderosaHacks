import React from "react";
import "./sponsored.css";
import Pdf from "/images/SponsorInfo-v3.pdf";
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
import S13 from "/images/NAR.png";
import S14 from "/images/babbittFord.png";
import S15 from "/images/allstate.png";
import S16 from "/images/evansGroupLaw.png";
import S17 from "/images/emberSafeLogoBlack.png";
import S18 from "/images/Snowbowl.png";
import S19 from "/images/TrueNorthDentistry.png";
import S20 from "/images/fatolives.png";
import AZDS from "/images/AZDS.png"; 

const Sponsors = () => {
  return (
    <div className="sponsor-section" id="Sponsors">

      <div className="sponsor-article">
          <br />
          <p>
          The Arizona Daily Sun wrote an article about our 2024-25 hackathon! Check it out here:
          </p>
        <a
          href="https://azdailysun.com/news/local/education/flagstaff-students-organize-hackathon-event-to-promote-stem-education/article_cfac93b6-84d7-11ef-8dc6-43c987d12bfa.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={AZDS} alt="Arizona Daily Sun" className="responsive3" />
        </a>
      </div>

      <hr className="article-separator" />

      <div className="sponsor-head-section">
        <h1 className="heading-tag-line1">Sponsors</h1>
        <hr className="heading-underline1" />
        <h2 align="center">
          <br />
          Thank you for sponsoring our 2025-26 Hackathon event!
        </h2>
      </div>



      <div className="responsive-multi-column-grid">
               <div>
          <a
            href="https://www.embersafecommunities.org/"
            id="EmberSafe-Communities"
          >
            <img
              src={S17}
              alt="EmberSafe Communities"
              className="responsive1"
              style={{ marginTop: "50px" }}
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://www.evansgarrey.com/" id="EGL">
            <img
              src={S16}
              alt="Evans Garrey Law"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://nau.edu/" id="Northern-Arizona-University">
            <img
              src={S4}
              alt="Northern Arizona University"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://hackclub.com/" id="Hack-Club">
            <img
              src={S3}
              alt="Hack Club"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://warnercompanies.com/nursery/" id="Warners-Nursery">
            <img
              src={S9}
              alt="Warner's Nursery"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a
            href="https://www.findlaytoyotaflagstaff.net/"
            id="Findlay-Toyota-Flagstaff"
          >
            <img
              src={S11}
              alt="Findlay Toyota Flagstaff"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://northernarizonaradiology.com/" id="NAR">
            <img
              src={S13}
              alt="Northern Arizona Radiology"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://www.coconinofcu.org/" id="Coconino-FCU">
            <img
              src={S1}
              alt="Coconino Federal Credit Union"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a
            href="https://agents.allstate.com/eric-boatner-flagstaff-az.html"
            id="Allstate-Eric-Boatner"
          >
            <img
              src={S15}
              alt="Allstate – Eric Boatner"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://www.chick-fil-a.com/" id="Chick-Fil-A">
            <img
              src={S7}
              alt="Chick-Fil-A"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://www.babbittford.com/" id="Babbitt-Ford">
            <img
              src={S14}
              alt="Babbitt Ford"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="http://snowbowl.ski/" id="Snowbowl">
            <img
              src={S18}
              alt="Snowbowl"
              className="responsive1"
            />
          </a>
          <br />
        </div>

        <div>
          <a href="https://www.truenorthdentistry.com/" id="TrueNorthDentistry">
            <img
              src={S19}
              alt="True North Dentistry"
              className="responsive1"
              style={{ width: "80%" }}
            />
          </a>
          <br />
        </div>

                <div>
          <a href="https://fatolivesflagstaff.com/" id="Fat-Olive's-Flagstaff">
            <img
              src={S20}
              alt="Fat Olive's Flagstaff"
              className="responsive1"
              style={{ width: "120%", marginTop: "50px" }}
              
            />
          </a>
          <br />
        </div>

      </div>


      <div className="sponsor-subsection">
        <div className="sponsor-left-section">
          <h2 className="sponsor-heading">
            <br />
            This event is being organized by high school students – please support us!
          </h2>

          <p>
            No donation is too small! Please consider supporting us with money, food,
            supplies, prizes, and/or give-away items. We have several packages available 
            with different benefits, ranging from placement of your logo on all our 
            materials, giving out materials about your business or organization, to 
            having a representative speak at our opening ceremony.
          </p>

          <p>
            Ponderosa Hacks is fiscally sponsored by{" "}
            <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
              Hack Club
            </a>
            , a 501(c)(3) nonprofit (EIN 81-2908499), so your donations are tax deductible!
          </p>

          <div className="sponsor-heading2">
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              <FaDownload /> Download our Sponsorship Packet
            </a>
          </div>

          <br />

          <p>
            Ponderosa Hacks is a student-led organization that is fiscally sponsored by
            Hack Club, a 501(c)(3) nonprofit (EIN 81-2908499). Please support us by
            donating to our cause or sponsoring a future event or workshop. Thank you!
          </p>

          <div className="sponsor-heading2">
            <button type="button" className="btn3 discord3">
              <a
                href="https://hcb.hackclub.com/donations/start/ponderosa-hacks"
                target="_blank"
                rel="noopener noreferrer"
              >
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
