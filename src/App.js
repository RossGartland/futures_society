import React from "react";
import "./App.css";
import About from "./components/About/about.component";
import Benefits from "./components/benefits/benefits.component";
import OurEvents from "./components/events/events.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Join from "./components/join/join.component";
import MyNav from "./components/nav/nav.component";
import Objectives from "./components/objectives/objectives.component";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Header/>
      <About/>
      <Objectives/>
      <Benefits/>
      <OurEvents/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
