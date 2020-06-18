import React, { Component } from "react";
import SearchCountryInfo from "./../SearchCountryInfo/SearchCountryInfo";


class SearchInfo extends Component {
  state = {
    filterText: "",
  };

  onFilterTextChange = (filterText) => {
    this.setState({ filterText: filterText });
  };

  handleFilterTextChange = (e) => {
    this.onFilterTextChange(e.target.value);
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  render() {
    const rows = [];
    const { filterText } = this.state;
    const Countries = this.props.Countries;

    return (
        <>
        <div className= "col-sm-4 d-flex justify-content-center">
            <div className= "card text-primary border-0">
                <h5 className="card-title">Buscar Información por país</h5>
                <h6 className="card-subtitle">Seleccione un país del que desee conocer confirmados, muertes y recuperados</h6>
                <p className="card-text"><input
                    type="text"
                    list="data"
                    placeholder="Buscar país..."
                    value={filterText}
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleFilterTextChange}
                    />
                    <datalist id="data">
                    {Countries &&
                        Countries.map((item, key) => (
                        <option key={key} value={item.Country} />
                        ))}
                    </datalist>
                </p>
            </div>
                <div>
                    {Countries &&
                        Countries.map((item, key) => {
                            if (item.Country.indexOf(filterText) === -1) {
                                return;
                            }
                            rows.push(<SearchCountryInfo key={key} Countries={item} />);
                        })}
                    <div>{rows.length > 2 ? "Sin resultados..." : rows}</div>
                </div>    
            </div>
      </>
    );
  }
}

export default SearchInfo;





