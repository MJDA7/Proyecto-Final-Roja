import React from "react";
import infoManager from "./../InfoManager/InfoManager";
import axios from "axios";
import { data } from "jquery";


const InfoGlobal = ({
    date,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
}) => {

   return ( <>
        <header className="app-header">
          <h3 className="text-center">COVID-19 Información Global</h3>

        </header>

        <div className= "row">

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-white bg-dark mb-3">
                <div className="card-header">Nuevos Confirmados</div>
                    <div className= "card-body">
                        <h5 className="card-title">{NewConfirmed}</h5>
                    </div>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Total de Confirmados</h5>
                <p className="card-text">{TotalConfirmed}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Nuevas Muertes</h5>
                <p className="card-text">{NewDeaths}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Total de Muertes</h5>
                <p className="card-text">{TotalDeaths}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Nuevos Recuperados</h5>
                <p className="card-text">{NewRecovered}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Total de Recuperados</h5>
                <p className="card-text">{TotalRecovered}</p>
            </div>
        </div>

    </div>
    </>
);
  
};
export default InfoGlobal;