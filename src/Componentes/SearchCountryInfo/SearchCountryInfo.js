import React from "react";


const SearchCountryInfo = ({ Countries }) => {
  return (
    <>
        <header>
          <h2>País: {}</h2>
        </header>
        
        <div >
        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Nuevos Confirmados</h5>
                <p className="card-text">{}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Total de Confirmados</h5>
                <p className="card-text">{}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Nuevas Muertes</h5>
                <p className="card-text">{}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Total de Muertes</h5>
                <p className="card-text">{}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Nuevos Recuperados</h5>
  <p className="card-text">{}</p>
            </div>
        </div>

        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Total de Recuperados</h5>
                <p className="card-text">{Countries.TotalRecovered}</p>
            </div>
        </div>

    </div>

</>
  );
};

export default SearchCountryInfo;

