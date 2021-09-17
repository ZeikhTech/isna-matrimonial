import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function AdvancedSearch() {
  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState("");
  const [minHeight, setMinHeight] = useState(3);
  const [eyeColor, setEyeColor] = useState({ black: false, blue: false });

  const array = [];
  for (var i = 18; i < 100; i++) {
    array[i] = i;
  }

  const height = [];
  // const feet = "",
  //  const inch = "";

  for (var i = 3; i < 7; i++) {
    for (var j = 0; j < 12; j++) {
      var key = parseFloat(i + "." + j);
      var value = i + "'" + j;
      height.push({ key, value });
    }
  }
  return (
    <div className="card">
      <div id="accordion" className="accordion wrpar">
        <div className="card">
          <div
            className="card-header collapsed"
            data-toggle="collapse"
            href="#collapseOne"
          >
            {" "}
            <a className="card-title">Personal Information</a>{" "}
          </div>
          <div
            id="collapseOne"
            className="card-body collapse"
            data-parent="#accordion"
          >
            <fieldset className="form-check-inline ">
              <div className="row w-100">
                <div className="col-lg-3">
                  <label className="control-label " htmlFor="age">
                    Age Range
                  </label>
                </div>
                <div className="col-lg-9  ">
                  <div className="row w-100">
                    <div className="col-lg-6">
                      <select
                        className="form-control d-block w-100"
                        id="age_from"
                        name="age_from"
                        onChange={(e) => {
                          setMinAge(e.target.value);
                        }}
                      >
                        <option value="0">From</option>
                        {array.map((element,index) => {
                          return <option value={element} key={index}>{element}</option>;
                        })}
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <select
                        className="form-control d-block w-100"
                        id="age_to"
                        name="age_to"
                        onChange={(e) => setMaxAge(e.target.value)}
                      >
                        <option value="0">To</option>
                        {array
                          .filter((age) => age >= minAge)
                          .map((element, index) => {
                            return <option value={element} key={index}>{element}</option>;
                          })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline ">
              <div className="row w-100">
                <div className="col-lg-3">
                  <label className="control-label" htmlFor="height">
                    Height Range
                  </label>
                </div>
                <div className="col-lg-9  ">
                  <div className="row w-100">
                    <div className="col-lg-6">
                      <select
                        name="height_from"
                        className="form-control d-block w-100 span2"
                        id="height_from"
                        onChange={(e) => {
                          setMinHeight(e.target.value);
                        }}
                      >
                        <option value="0">From</option>
                        {height.map((element , index) => {
                          return (
                            <option value={element.key} key={index}>{element.value}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <select
                        name="height_to"
                        className="form-control d-block w-100 span2"
                        id="height_to"
                      >
                        <option value="0">To</option>
                        {height
                          .filter(
                            (height) =>
                              parseFloat(height.key) >= parseFloat(minHeight)
                          )
                          .map((element ,index) => {
                            return (
                              <option value={element.key} key={index}>
                                {element.value}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline ">
              <label className="control-label col-sm-4  col-lg-3" htmlFor="color">
                Eye Color
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="black"
                    id="Black"
                    selected={false}
                    onChange={(e) => {
                      if (e.target.selected == false) {
                        console.log("true", e.target.selected);
                        setEyeColor();
                      }
                      // e.target.value = false;
                      // console.log(e.target.value);
                    }}
                  />
                  <label htmlFor="Black">Black</label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Blue" id="Blue" />
                  <label htmlFor="Blue">Blue</label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Brown" id="Brown" />
                  <label htmlFor="Brown"> Brown </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="Colored-contacts"
                    id="Colored-contacts"
                  />
                  <label htmlFor="Colored-contacts"> Colored contacts </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Green" id="Green" />
                  <label htmlFor="Green"> Green </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Grey" id="Grey" />
                  <label htmlFor="Grey"> Grey </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Hazel" id="Hazel" />
                  <label htmlFor="Hazel"> Hazel </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" htmlFor="Hcolor">
                Hair Color
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Auburn-Red" id="Auburn_Red" />
                  <label htmlFor="Auburn-Red">
                    {" "}
                    <a href="">Auburn/Red </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Bald" id="Bald" />
                  <label htmlFor="Bald">
                    {" "}
                    <a href="">Bald</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Black_1" id="Black_1" />
                  <label htmlFor="Black_1">
                    {" "}
                    <a href="">Black</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Blonde" id="Blonde" />
                  <label htmlFor="Blonde">
                    {" "}
                    <a href="">Blonde</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" htmlFor="Build">
                Build
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Slim" id="Slim" />
                  <label htmlFor="Slim">
                    {" "}
                    <a href="">Slim</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Athletic" id="Athletic" />
                  <label htmlFor="Athletic">
                    {" "}
                    <a href="">Athletic</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="About-average"
                    id="About-average"
                  />
                  <label htmlFor="About-average">
                    {" "}
                    <a href="">About average</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="Few-extra-pounds"
                    id="Few-extra-pounds"
                  />
                  <label htmlFor="Few-extra-pounds">
                    {" "}
                    <a href="">Few extra pounds</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="Full-Figured"
                    id="Full-Figured"
                  />
                  <label htmlFor="Full-Figured">
                    {" "}
                    <a href="">Full Figured</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="card">
          <div
            className="card-header collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseTwo"
          >
            {" "}
            <a className="card-title">Professional Information</a>{" "}
          </div>
          <div
            id="collapseTwo"
            className="card-body collapse"
            data-parent="#accordion"
          >
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" htmlFor="work">
                Profession
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="Medical-Doctor"
                    id="Medical-Doctor"
                  />
                  <label htmlFor="Medical-Doctor">
                    {" "}
                    <a href="">Medical Doctor</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Dentist" id="Dentist" />
                  <label htmlFor="Dentist">
                    {" "}
                    <a href="">Dentist</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Other" id="Other" />
                  <label htmlFor="Other">
                    {" "}
                    <a href="">Other</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" htmlFor="income">
                Annual Income
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Less-Than" id="Less-Than" />
                  <label htmlFor="Less-Than">
                    {" "}
                    <a href="">Less Than $25,000</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Less-Than-1" id="Less-Than-1" />
                  <label htmlFor="Less-Than-1">
                    {" "}
                    <a href="">$25,001 to $35,000</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" htmlFor="income">
                Education
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="High-School" id="High-School" />
                  <label htmlFor="High-School">
                    {" "}
                    <a href="">High School</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Bachelors" id="Bachelors" />
                  <label htmlFor="Bachelors">
                    {" "}
                    <a href="">Bachelors</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Masters" id="Masters" />
                  <label htmlFor="Masters">
                    {" "}
                    <a href="">Masters</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="card">
          <div
            className="card-header collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseThree"
          >
            {" "}
            <a className="card-title">Background Information</a>{" "}
          </div>
          <div
            id="collapseThree"
            className="collapse wrpar"
            data-parent="#accordion"
          >
            <div className="card-body">
              <fieldset className="form-check-inline">
                <label
                  className="control-label col-sm-4  col-lg-3"
                  htmlFor="Religin"
                >
                  Religion
                </label>
                <div className="row justify-content-start flex-wrap pr-2 w-100">
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Muslim" id="Muslim" />
                    <label htmlFor="Muslim">
                      {" "}
                      <a href="">Muslim</a>{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  className="control-label col-sm-4  col-lg-3"
                  htmlFor="Languages"
                >
                  Languages
                </label>
                <div className="row justify-content-start flex-wrap pr-2 w-100">
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Arabic" id="Arabic" />
                    <label htmlFor="Arabic">
                      {" "}
                      <a href="">Arabic</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Hebrew" id="Hebrew" />
                    <label htmlFor="Hebrew">
                      {" "}
                      <a href="">Hebrew</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Russian" id="Russian" />
                    <label htmlFor="Russian">
                      {" "}
                      <a href="">Russian</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Chinese" id="Chinese" />
                    <label htmlFor="Chinese">
                      {" "}
                      <a href="">Chinese</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Hindi" id="Hindi" />
                    <label htmlFor="Hindi">
                      {" "}
                      <a href="">Hindi</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Spanish" id="Spanish" />
                    <label htmlFor="Spanish">
                      {" "}
                      <a href="">Spanish</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Dutch" id="Dutch" />
                    <label htmlFor="Dutch">
                      {" "}
                      <a href="">Dutch</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13  span3  ">
                    <input type="checkbox" name="Italian" id="Italian" />
                    <label htmlFor="Italian">
                      {" "}
                      <a href="">Italian</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 ">
                    <input type="checkbox" name="Tagalong" id="Tagalong" />
                    <label htmlFor="Tagalong">
                      {" "}
                      <a href="">Tagalong</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="English" id="English" />
                    <label htmlFor="English">
                      {" "}
                      <a href="">English</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Japanese" id="Japanese" />
                    <label htmlFor="Japanese">
                      {" "}
                      <a href="">Japanese</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Urdu" id="Urdu" />
                    <label htmlFor="Urdu">
                      {" "}
                      <a href="">Urdu</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="French" id="French" />
                    <label htmlFor="French">
                      {" "}
                      <a href="">French</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Portuguese" id="Portuguese" />
                    <label htmlFor="Portuguese">
                      {" "}
                      <a href="">Portuguese</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13  span3">
                    <input type="checkbox" name="German" id="German" />
                    <label htmlFor="German">
                      {" "}
                      <a href="">German</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Other" id="Other" />
                    <label htmlFor="Other">
                      {" "}
                      <a href="">Other</a>{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  htmlFor="country"
                  className="control-label col-sm-4  col-lg-3 pr-0"
                >
                  Country
                </label>
                <select
                  required=""
                  id="country"
                  name="country"
                  className="form-control"
                >
                  <option value="0"> Please Select Country</option>
                  <option value="223"> United States </option>
                  <option value="36"> Canada </option>
                </select>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  htmlFor="state"
                  className="control-label col-sm-4  col-lg-3 pr-0"
                >
                  State
                </label>
                <select
                  className="form-control "
                  name="state"
                  id="state"
                  required=""
                >
                  <option value="0"> Please Select State</option>
                  <option value="2"> Alabama </option>
                  <option value="1"> Alaska </option>
                  <option value="3"> American Samoa </option>
                  <option value="4"> Arizona </option>
                  <option value="5"> Arkansas </option>
                  <option value="60"> Armed Forces Africa </option>
                </select>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  htmlFor="origin"
                  className="control-label  col-sm-4  col-lg-3 pr-0"
                >
                  Country of Origin
                </label>
                <select
                  name="origin"
                  id="origin"
                  className="form-control "
                  required=""
                >
                  <option value="0"> Please Select Country</option>
                  <option value="AFGHANISTAN"> AFGHANISTAN </option>
                  <option value="ALBANIA"> ALBANIA </option>
                  <option value="ALGERIA"> ALGERIA </option>
                  <option value="AMERICAN SAMOA"> AMERICAN SAMOA </option>
                  <option value="ANDORRA"> ANDORRA </option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="card-header collapsed"
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseFour"
          >
            {" "}
            <a className="card-title">Other Information</a>{" "}
          </div>
          <div
            id="collapseFour"
            className="collapse wrpar"
            data-parent="#accordion"
          >
            <div className="card-body">
              <fieldset className="form-check-inline">
                <label
                  className="control-label col-sm-4  col-lg-3"
                  htmlFor="Religin"
                >
                  Marital Status
                </label>
                <div className="row justify-content-start flex-wrap pr-2 w-100">
                  <div className="i-agree inline text_13 span3">
                    <input
                      type="checkbox"
                      name="Never-Married"
                      id="Never-Married"
                    />
                    <label htmlFor="Never-Married">
                      {" "}
                      <a href="">Never Married</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Divorced" id="Divorced" />
                    <label htmlFor="Divorced">
                      {" "}
                      <a href="">Divorced</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input
                      type="checkbox"
                      name="Widow/Widower"
                      id="Widow/Widower"
                    />
                    <label htmlFor="Widow/Widower">
                      {" "}
                      <a href="">Widow/Widower</a>{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  htmlFor="children"
                  className="control-label col-sm-4  col-lg-3"
                >
                  Want Children
                </label>
                <select
                  name="want_childern"
                  id="want_childern"
                  className="form-control"
                >
                  <option value="0">Select One</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">May be</option>
                </select>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  htmlFor="Hchildren"
                  className="control-label col-sm-4  col-lg-3"
                >
                  Have Children
                </label>
                <select
                  name="have_children"
                  id="have_children"
                  className="form-control"
                >
                  <option value="0">Select One</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  htmlFor="Smokes"
                  className="control-label col-sm-4  col-lg-3"
                >
                  Smokes
                </label>
                <select name="smoke" id="smoke" className="form-control">
                  <option value="0">Select One</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </fieldset>
              <fieldset className="form-check-inline">
                <label htmlFor="pics" className="control-label col-sm-4  col-lg-3">
                  With Pics Only
                </label>
                <select
                  name="with_pics"
                  id="with_pics"
                  className="form-control"
                >
                  <option value="0">Select One</option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                </select>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="row flex-wrap justify-content-end pr-3">
          <button type="button" className="theme-button-dannger mr-2">
            Search
          </button>
          <button type="button" className="theme-button-success mr-2">
            Save
          </button>
          <button type="button" className="theme-button-reset mr-2">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
