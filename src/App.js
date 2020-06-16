import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoGlobal from "./Componentes/InfoGlobal"

class App extends Component {

state = {
  data: [],
};

stateData = (dataApi) => {
  this.setState({ data: dataApi });
  };

  getData = async () => {
    let response = await fetch("https://api.covid19api.com/summary");
    let data = await response.json();
    this.stateData(data);
  };

  componentDidMount() {
    this.getData();
  }
render () {
    return ( <>
      <header className= "header"> 
          <h1>COVID-19</h1>
      </header>
      
      <div direction= "row" justify= "center" alignItems= "center">
        <InfoGlobal
          data= {data.Date}
          NewConfirmed={data.Global && data.Global.NewConfirmed}
          TotalConfirmed={data.Global && data.Global.TotalConfirmed}
          TotalDeaths={data.Global && data.Global.TotalDeaths}
          NewDeaths={data.Global && data.Global.NewDeaths}
          NewRecovered={data.Global && data.Global.NewRecovered}
          TotalRecovered={data.Global && data.Global.TotalRecovered}
        />
      </div> 
    </>
      
    );  
  }
}


export default App;
