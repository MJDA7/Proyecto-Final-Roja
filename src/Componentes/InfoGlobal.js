import React from "react";

const InfoGlobal = ({
    date,
    NewConfirmed,
    TotalConfirmed,
    NewDeaths,
    TotalDeaths,
    NewRecovered,
    TotalRecovered,
}) => {

   return (
    <div class= {"row"}>
        <div class= {"col-sm-4 d-flex justify-content-center"}>
            <div class= {"card text-primary border-0"}>
                <h5 class="card-title">Nuevos Confirmados</h5>
                <p class="card-text">{NewConfirmed}</p>
            </div>
        </div>

        <div class= {"col-sm-4 d-flex justify-content-center"}>
            <div class= {"card text-primary border-0"}>
                <h5 class="card-title">Total de Confirmados</h5>
                <p class="card-text">{TotalConfirmed}</p>
            </div>
        </div>

        <div class= {"col-sm-4 d-flex justify-content-center"}>
            <div class= {"card text-primary border-0"}>
                <h5 class="card-title">Nuevas Muertes</h5>
                <p class="card-text">{NewDeaths}</p>
            </div>
        </div>

        <div class= {"col-sm-4 d-flex justify-content-center"}>
            <div class= {"card text-primary border-0"}>
                <h5 class="card-title">Total de Muertes</h5>
                <p class="card-text">{TotalDeaths}</p>
            </div>
        </div>

        <div class= {"col-sm-4 d-flex justify-content-center"}>
            <div class= {"card text-primary border-0"}>
                <h5 class="card-title">Nuevos Recuperados</h5>
                <p class="card-text">{NewRecovered}</p>
            </div>
        </div>

        <div class= {"col-sm-4 d-flex justify-content-center"}>
            <div class= {"card text-primary border-0"}>
                <h5 class="card-title">Total de Recuperados</h5>
                <p class="card-text">{TotalRecovered}</p>
            </div>
        </div>

    </div>
   );
};
export default InfoGlobal;