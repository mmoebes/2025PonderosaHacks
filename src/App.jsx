import React from "react";
import "./App.css";
import {
  About,
  Footer,
  Home,
  Navbar,
  // Judges,
  Theme,
  Prize,
  //Scheduled,
  // Faq,
  //Venue,
  // Gallery,
  Sponsors,
  PineTrees
} from "./components";

import { TopButton } from "./components/TopButton";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      {/* <Theme /> */}
      {/* <Venue /> */}
      {/* <Scheduled /> */}
       <Sponsors />
      <Prize />
      {/* <Judges/> */}
      {/* <Faq /> */}
      {/* <Gallery /> */}
      <Footer />
      <TopButton />
      <PineTrees />
    </div>
  );
};

export default App;
