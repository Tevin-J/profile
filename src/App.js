import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import MainInfo from "./components/MainInfo/MainInfo";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Hire from "./components/Hire/Hire";
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        "number": {
            "value": 15,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#6ab2af"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.4,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "size": {
            "value": 47,
            "random": true,
            "anim": {
                "enable": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "top-right",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "push": {
                "particles_nb": 3
            }
        }
    },
    "retina_detect": true
}


function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Particles className='particles' params={particlesOptions}/>
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
