import React, { useState, useEffect } from "react";
import InfoGlobal from "./../InfoGlobal/InfoGlobal";
import SearchInfo from "./../SearchInfo/SearchInfo";
import axios from "axios";
import Particles from "react-particles-js";
import SearchCountryInfo from "./../SearchCountryInfo/SearchCountryInfo";


const InfoManager = () => {
    const [info, setInfo] = useState({});

    const getInfo = () => {
        axios.get("https://api.covid19api.com/summary")
        
        .then(({data})=>{
            setInfo(data);
        })
        .catch((error)=>{
            console.log("error", error)
        })
    };

    useEffect (() => {
        getInfo();
    }, []);

    const paramsParticles = {
        "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
    };

    return (
    <>
        <header>
            <h1 className="text-center">Covid 19</h1>
        </header>
       {
           info ?  (<> <div className="container">
           <InfoGlobal
               date={info.Date}
               NewConfirmed={info.Global && info.Global.NewConfirmed}
               TotalConfirmed={info.Global && info.Global.TotalConfirmed}
               NewDeaths={info.Global && info.Global.NewDeaths}
               TotalDeaths={info.Global && info.Global.TotalDeaths}
               NewRecovered={info.Global && info.Global.NewRecovered}
               TotalRecovered={info.Global && info.Global.TotalRecovered}
           />
           {/*<SearchCountryInfo Countries={info.Countries[0]}/>*/}
       <h1>{info.Countries ? JSON.stringify(typeof info.Countries) : "No cargo"}</h1>
       </div>
       <Particles className="particles" params={paramsParticles} />
       </>): <h1>Cargando...</h1> 
       }
    </>)
};

export default InfoManager;
