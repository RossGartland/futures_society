import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header.component";
import MyNav from "./components/nav/nav.component";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Header/>
    </div>
  );
}

export default App;
