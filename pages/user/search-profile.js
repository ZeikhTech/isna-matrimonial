import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function SearchProfile() {
  const [name, setName] = useState("");
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState("");
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [auth_token, setAuth_token] = useState("");
  const [countryStates, setCountryState] = useState("");

  const array = [];
  for (var i = 18; i < 100; i++) {
    array[i] = i;
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "https://www.universal-tutorial.com/api/getaccesstoken",
      headers: {
        Accept: "application/json",
        "api-token":
          "bPXiwceHbenxPVbU-KK_vK68rVbhXHakdohDSqtxXFgBOTfCPjAAbj7ttTAxsdNkCbI",
        "user-email": "awaiskaramat901223120@gmail.com",
      },
    }).then(function (response) {
      setAuth_token(response.data.auth_token);
      axios({
        method: "get",
        url: "https://www.universal-tutorial.com/api/countries/",
        headers: {
          Authorization: `Bearer ${response.data.auth_token}`,
          Accept: "application/json",
        },
      }).then(function (response1) {
        setCountries([...response1.data]);
      });
    });
  }, []);
  const onChangeCountry = (country) => {
    setCountry(country);
    axios({
      method: "get",
      url: `https://www.universal-tutorial.com/api/states/${country}`,
      headers: {
        Authorization: `Bearer ${auth_token}`,
        Accept: "application/json",
      },
    }).then(function (response) {
      console.log(response.data);
      setCountryState([...response.data]);
    });
  };
  const onSearch = (e) => {
    //here we would use the reducer

    e.preventDefault();
    console.log("in search");
  };
  return (
    <div className="card">
      <form
        className=" mb-0"
        method="post"
        name="basic_search"
        id="basic_search"
        action="/search"
      >
        <div className="search_inner d-flex flex-wrap  ">
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-name" className="control-label">
              Nick Name
            </label>
            <input
              id="sp-name"
              name="name"
              className="input-small"
              type="text"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-minage" className="control-label">
              Min Age
            </label>

            <select
              id="sp-minage"
              name="sp-minage"
              className="input-small"
              onChange={(e) => {
                setMinAge(e.target.value);
              }}
            >
              <option value="0">From</option>
              {array.map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </select>
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-maxage" className="control-label">
              Max Age
            </label>
            <select
              id="sp-minage"
              name="sp-minage"
              className="input-small"
              onChange={(e) => setMaxAge(e.target.value)}
            >
              <option value="0">To</option>

              {array
                .filter((age) => age >= minAge)
                .map((element) => {
                  return <option value={element}>{element}</option>;
                })}
            </select>
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-country" className="control-label">
              Country
            </label>
            <select
              required=""
              id="country"
              name="country"
              className="valid"
              onChange={(e) => {
                onChangeCountry(e.target.value);
              }}
            >
              <option value="0"> Please Select Country</option>
              {countries.length > 0
                ? countries.map((element) => {
                    return (
                      <option value={element.country_name}>
                        {element.country_name}
                      </option>
                    );
                  })
                : ""}
            </select>
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-state" className="control-label">
              State
            </label>
            <select className="" name="state" id="state" required="">
              <option value="0"> Please Select State</option>
              {countryStates.length > 0
                ? countryStates.map((countryState) => {
                    return (
                      <option value={countryState.state_name}>
                        {countryState.state_name}{" "}
                      </option>
                    );
                  })
                : ""}
            </select>
          </fieldset>
          {/* <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-yes" className="control-label">
              Photo
            </label>
            <div className="i-agree">
              <input type="checkbox" name="iagree_to" id="iagree_to" />
              <label for="iagree_to">
                <a href="">yes </a>
              </label>
            </div>
          </fieldset> */}
          <fieldset className="control-group pull-left mb-0">
            <Link href="/user/search-result">
              <button
                className="theme-button-dannger mt-3"
                onClick={(e) => {
                  onSearch(e);
                }}
              >
                Search
              </button>
            </Link>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
