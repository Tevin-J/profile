import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainInfo from "./components/MainInfo/MainInfo";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Hire from "./components/Hire/Hire";


function App() {
  return (
    <div className="App">
      <div className="portfolio">
        <Header/>
        <MainInfo/>
        <Skills/>
        <Projects/>
        <Hire/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
