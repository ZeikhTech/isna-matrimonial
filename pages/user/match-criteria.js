export default function MatchCriteria() {
  return (
    <main className="pt-80   page-waper">
      <section role="main-content" className="container">
        <div className="mt-30 nofl container">
          <div className="row ">
            <div className="col-lg-8 match_criteria">
              <h3 className="mt-3">Match Criteria</h3>
              <h4>
                <small className="ml-0">
                  You will receive the weekly updates via email for the profiles
                  that match your defined criteria
                </small>
              </h4>
              <hr />
              <form
                className="form-horizontal"
                name="match_criteria"
                id="match_criteria"
                action=""
                method="post"
                encType="multipart/form-data"
              >
                <div className="card mt-2">
                  <div id="accordion" className="accordion">
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
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="age"
                          >
                            Age Range
                          </label>
                          <select
                            className="form-control mr-2 "
                            id="age_from"
                            name="age_from"
                          >
                            <option value="0">From</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                          </select>
                          <select
                            className=" form-control  "
                            id="age_to"
                            name="age_to"
                          >
                            <option value="0">To</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                          </select>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="height"
                          >
                            Height Range
                          </label>
                          <select
                            name="height_from"
                            className="form-control mr-2"
                            id="height_from"
                          >
                            <option value="0">From</option>
                            <option value="1">3</option>
                            <option value="2">3(93cm)</option>
                            <option value="3">3(96cm)</option>
                          </select>
                          <select
                            name="height_to"
                            className="form-control "
                            id="height_to"
                          >
                            <option value="0">To</option>
                            <option value="1">3(91cm)</option>
                            <option value="2">31(93cm)</option>
                            <option value="3">32(96cm)</option>
                          </select>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="color"
                          >
                            Eye Color
                          </label>
                          <div className="row justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Black-2"
                                id="Black-2"
                              />
                              <label htmlFor="Black-2">
                                {" "}
                                <a href="">Black</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Blue-2"
                                id="Blue-2"
                              />
                              <label htmlFor="Blue-2">
                                {" "}
                                <a href="">Blue</a>{" "}
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label  col-sm-4  col-lg-4"
                            htmlFor="Hcolor"
                          >
                            Hair Color
                          </label>
                          <div className="row justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Auburn/Red"
                                id="Auburn/Red"
                              />
                              <label htmlFor="Auburn/Red">
                                {" "}
                                <a href="">Auburn/Red</a>{" "}
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="Build"
                          >
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
                              <input
                                type="checkbox"
                                name="Athletic"
                                id="Athletic"
                              />
                              <label htmlFor="Athletic">
                                {" "}
                                <a href="">Athletic</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Full Figured"
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
                        <a className="card-title">
                          Professional Information
                        </a>{" "}
                      </div>
                      <div
                        id="collapseTwo"
                        className="card-body collapse"
                        data-parent="#accordion"
                      >
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="work"
                          >
                            Profession
                          </label>
                          <div className="row  d-flex justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13 span5">
                              <input
                                type="checkbox"
                                name="Medical Doctor"
                                id="Medical-Doctor"
                              />
                              <label htmlFor="Medical-Doctor">
                                {" "}
                                <a href="">Medical Doctor</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span5">
                              <input
                                type="checkbox"
                                name="Dentist"
                                id="Dentist"
                              />
                              <label htmlFor="Dentist">
                                {" "}
                                <a href="">Dentist</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span5">
                              <input
                                type="checkbox"
                                name="Computer Scientist"
                                id="Computer-Scientist"
                              />
                              <label htmlFor="Computer-Scientist">
                                {" "}
                                <a href="">Computer Scientist</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span5">
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
                            className="control-label  col-sm-4  col-lg-4"
                            htmlFor="income"
                          >
                            Annual Income
                          </label>
                          <div className="row d-flex justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13 span5">
                              <input
                                type="checkbox"
                                name="Less Than"
                                id="Less-Than"
                              />
                              <label htmlFor="Less-Than">
                                {" "}
                                <a href="">Less Than $25,000</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span5">
                              <input
                                type="checkbox"
                                name="Less-Than-3"
                                id="Less-Than-3"
                              />
                              <label htmlFor="Less-Than-3">
                                {" "}
                                <a href="">$25,001 to $35,000</a>{" "}
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="income"
                          >
                            Education
                          </label>
                          <div className="row d-flex justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13  ">
                              <input
                                type="checkbox"
                                name="High-School"
                                id="High-School"
                              />
                              <label htmlFor="High-School">
                                {" "}
                                <a href="">High School</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Bachelors"
                                id="Bachelors"
                              />
                              <label htmlFor="Bachelors">
                                {" "}
                                <a href="">Bachelors</a>{" "}
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
                        <a className="card-title">
                          Background Information
                        </a>{" "}
                      </div>
                      <div
                        id="collapseThree"
                        className="card-body collapse"
                        data-parent="#accordion"
                      >
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="Religin"
                          >
                            Religion
                          </label>
                          <div className="row justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Muslim"
                                id="Muslim"
                              />
                              <label htmlFor="Muslim">
                                {" "}
                                <a href="">Muslim</a>{" "}
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            className="control-labe col-sm-4  col-lg-4"
                            htmlFor="Languages"
                          >
                            Languages
                          </label>
                          <div className="row justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Arabic"
                                id="Arabic"
                              />
                              <label htmlFor="Arabic">
                                {" "}
                                <a href="">Arabic</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Hebrew"
                                id="Hebrew"
                              />
                              <label htmlFor="Hebrew">
                                {" "}
                                <a href="">Hebrew</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Russian"
                                id="Russian"
                              />
                              <label htmlFor="Russian">
                                {" "}
                                <a href="">Russian</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input type="checkbox" name="Other" id="Other2" />
                              <label htmlFor="Other2">
                                {" "}
                                <a href="">Other</a>{" "}
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            htmlFor="country"
                            className="control-label col-sm-4  col-lg-4"
                          >
                            Country
                          </label>
                          <select
                            required=""
                            className="form-control"
                            id="country"
                            name="country"
                          >
                            <option value="0"> Please Select Country</option>
                            <option value="223"> UNITED STATES </option>
                            <option value="36"> CANADA </option>
                          </select>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            htmlFor="state"
                            className="control-label col-sm-4  col-lg-4"
                          >
                            State
                          </label>
                          <select
                            className="form-control"
                            name="state"
                            id="state"
                            required
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
                        className="card-body collapse"
                        data-parent="#accordion"
                      >
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
                            htmlFor="Religin"
                          >
                            Status in USA
                          </label>
                          <div className="row justify-content-start flex-wrap pr-2 w-100">
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Citizen"
                                id="Citizen"
                              />
                              <label htmlFor="Citizen">
                                {" "}
                                <a href="">Citizen</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Resident Alien"
                                id="ResidentAlien"
                              />
                              <label htmlFor="ResidentAlien">
                                {" "}
                                <a href="">Resident Alien</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input
                                type="checkbox"
                                name="Student-Visa"
                                id="Student-Visa"
                              />
                              <label htmlFor="Student-Visa">
                                {" "}
                                <a href="">Student Visa</a>{" "}
                              </label>
                            </div>
                            <div className="i-agree inline text_13 span3">
                              <input type="checkbox" name="Other" id="Other1" />
                              <label htmlFor="Other1">
                                {" "}
                                <a href="">Other</a>{" "}
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset
                          className="form-check-inline"
                          id="other_status_usa_area"
                        >
                          <label
                            htmlFor="other_status_usa"
                            className="control-label col-sm-4  col-lg-4"
                          >
                            Other Status in USA
                          </label>
                          <input
                            type="text"
                            id="other_status_usa"
                            name="other_status_usa"
                            className="  col-sm-8  col-lg-8"
                            placeholder="Other Status in USA"
                            value=""
                            readOnly
                          />
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            className="control-label col-sm-4  col-lg-4"
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
                              <input
                                type="checkbox"
                                name="Divorced"
                                id="Divorced"
                              />
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
                            className="control-label col-sm-4  col-lg-4"
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
                            className="control-label col-sm-4  col-lg-4"
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
                            className="control-label col-sm-4  col-lg-4"
                          >
                            Smokes
                          </label>
                          <select
                            name="smoke"
                            id="smoke"
                            className="form-control"
                          >
                            <option value="0">Select One</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                          </select>
                        </fieldset>
                        <fieldset className="form-check-inline">
                          <label
                            htmlFor="pics"
                            className="control-label col-sm-4  col-lg-4"
                          >
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
                </div>
                <div className="form-check-inline d-flex justify-content-center mb-5">
                  <div className="btn-group">
                    <button type="submit" className="theme-button-success mr-2">
                      Save
                    </button>
                    <button type="submit" className="theme-button-dannger">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card Featured-profile manage-profile">
                <h4 className="hbb">Featured Profile</h4>
                <div className="media">
                  <a href=" " className="pull-left ipg">
                    {" "}
                    <img
                      src="/assets/images/2/profile_images/Nursing.jpg"
                      className="img-fluid"
                    />{" "}
                  </a>
                  <div className="media-body ml-2">
                    <h5 className="media-heading">
                      <a href=" ">MSiddique</a>
                    </h5>
                    <p>
                      Age: &nbsp; 21
                      <br />
                      Religion: &nbsp; Muslim
                      <br />
                      State: &nbsp; Indiana
                      <br /> Country: &nbsp; United States
                    </p>
                    <div align="right">
                      <a href=" " className="linke-style">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card Featured-profile manage-profile">
                <h4 className="hbb">Profile of the Week</h4>
                <div className="media">
                  <a href=" " className="pull-left ipg">
                    {" "}
                    <img
                      src="/assets/images/2/profile_images/Midwife-intern.jpg"
                      className="img-fluid"
                    />{" "}
                  </a>
                  <div className="media-body ml-2">
                    <h5 className="media-heading">
                      <a href=" ">MSiddique</a>
                    </h5>
                    <p>
                      Age: &nbsp; 21
                      <br />
                      Religion: &nbsp; Muslim
                      <br />
                      State: &nbsp; Indiana
                      <br /> Country: &nbsp; United States
                    </p>
                    <div align="right">
                      <a href=" " className="linke-style">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
