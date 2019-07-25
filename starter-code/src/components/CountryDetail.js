import React from "react";
import allCountriesJSON from "./../countries.json";

import { Link } from "react-router-dom";

function CountryDetail(props) {
  return (
    <div>
      {allCountriesJSON.map(eachCountry => {
        if (eachCountry.cca3 === props.match.params.countryCode) {
          return (
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h1>{eachCountry.name.common}</h1>
                  </td>
                </tr>
                <tr>
                  <td>Capital</td>
                  <td>{eachCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{eachCountry.area}</td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {eachCountry.borders.map(eachBorder => {
                        return (
                          <li>
                            <Link exact to={`${eachBorder}`}>
                              {
                                allCountriesJSON.find(
                                  x => x.cca3 === eachBorder
                                ).name.common
                              }
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        }
      })}
    </div>
  );
}

export default CountryDetail;
