export default function AdvancedSearch() {
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
                  <label className="control-label " for="age">
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
                      >
                        <option value="0">From</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <select
                        className="form-control d-block w-100"
                        id="age_to"
                        name="age_to"
                      >
                        <option value="0">To</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline ">
              <div className="row w-100">
                <div className="col-lg-3">
                  <label className="control-label" for="height">
                    Height Range
                  </label>
                </div>
                <div className="col-lg-9  ">
                  <div className="row w-100">
                    <div className="col-lg-6">
                      <select
                        name="height_from"
                        className="form-control d-block w-100"
                        id="height_from"
                        className="span2"
                      >
                        <option value="0">From</option>
                        <option value="1">3'0"(91cm)</option>
                        <option value="2">3'1"(93cm)</option>
                        <option value="3">3'2"(96cm)</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <select
                        name="height_to"
                        className="form-control d-block w-100"
                        id="height_to"
                        className="span2"
                      >
                        <option value="0">To</option>
                        <option value="1">3'0"(91cm)</option>
                        <option value="2">3'1"(93cm)</option>
                        <option value="3">3'2"(96cm)</option>
                        <option value="4">3'3"(99cm)</option>
                        <option value="5">3'4"(101cm)</option>
                        <option value="6">3'5"(104cm)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline ">
              <label className="control-label col-sm-4  col-lg-3" for="color">
                Eye Color
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Black" id="Black" />
                  <label for="Black">
                    {" "}
                    <a href="">Black </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Blue" id="Blue" />
                  <label for="Blue">
                    {" "}
                    <a href="">Blue </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Brown" id="Brown" />
                  <label for="Brown">
                    {" "}
                    <a href="">Brown </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="Colored-contacts"
                    id="Colored-contacts"
                  />
                  <label for="Colored-contacts">
                    {" "}
                    <a href="">Colored contacts </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Green" id="Green" />
                  <label for="Green">
                    {" "}
                    <a href="">Green </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Grey" id="Grey" />
                  <label for="Grey">
                    {" "}
                    <a href="">Grey </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Hazel" id="Hazel" />
                  <label for="Hazel">
                    {" "}
                    <a href="">Hazel </a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" for="Hcolor">
                Hair Color
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Auburn-Red" id="Auburn_Red" />
                  <label for="Auburn-Red">
                    {" "}
                    <a href="">Auburn/Red </a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Bald" id="Bald" />
                  <label for="Bald">
                    {" "}
                    <a href="">Bald</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Black_1" id="Black_1" />
                  <label for="Black_1">
                    {" "}
                    <a href="">Black</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Blonde" id="Blonde" />
                  <label for="Blonde">
                    {" "}
                    <a href="">Blonde</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" for="Build">
                Build
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Slim" id="Slim" />
                  <label for="Slim">
                    {" "}
                    <a href="">Slim</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Athletic" id="Athletic" />
                  <label for="Athletic">
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
                  <label for="About-average">
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
                  <label for="Few-extra-pounds">
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
                  <label for="Full-Figured">
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
              <label className="control-label col-sm-4  col-lg-3" for="work">
                Profession
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input
                    type="checkbox"
                    name="Medical-Doctor"
                    id="Medical-Doctor"
                  />
                  <label for="Medical-Doctor">
                    {" "}
                    <a href="">Medical Doctor</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Dentist" id="Dentist" />
                  <label for="Dentist">
                    {" "}
                    <a href="">Dentist</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Other" id="Other" />
                  <label for="Other">
                    {" "}
                    <a href="">Other</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" for="income">
                Annual Income
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Less-Than" id="Less-Than" />
                  <label for="Less-Than">
                    {" "}
                    <a href="">Less Than $25,000</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Less-Than-1" id="Less-Than-1" />
                  <label for="Less-Than-1">
                    {" "}
                    <a href="">$25,001 to $35,000</a>{" "}
                  </label>
                </div>
              </div>
            </fieldset>
            <fieldset className="form-check-inline">
              <label className="control-label col-sm-4  col-lg-3" for="income">
                Education
              </label>
              <div className="row justify-content-start flex-wrap pr-2 w-100">
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="High-School" id="High-School" />
                  <label for="High-School">
                    {" "}
                    <a href="">High School</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Bachelors" id="Bachelors" />
                  <label for="Bachelors">
                    {" "}
                    <a href="">Bachelors</a>{" "}
                  </label>
                </div>
                <div className="i-agree inline text_13 span3">
                  <input type="checkbox" name="Masters" id="Masters" />
                  <label for="Masters">
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
                  for="Religin"
                >
                  Religion
                </label>
                <div className="row justify-content-start flex-wrap pr-2 w-100">
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Muslim" id="Muslim" />
                    <label for="Muslim">
                      {" "}
                      <a href="">Muslim</a>{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  className="control-label col-sm-4  col-lg-3"
                  for="Languages"
                >
                  Languages
                </label>
                <div className="row justify-content-start flex-wrap pr-2 w-100">
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Arabic" id="Arabic" />
                    <label for="Arabic">
                      {" "}
                      <a href="">Arabic</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Hebrew" id="Hebrew" />
                    <label for="Hebrew">
                      {" "}
                      <a href="">Hebrew</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Russian" id="Russian" />
                    <label for="Russian">
                      {" "}
                      <a href="">Russian</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Chinese" id="Chinese" />
                    <label for="Chinese">
                      {" "}
                      <a href="">Chinese</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Hindi" id="Hindi" />
                    <label for="Hindi">
                      {" "}
                      <a href="">Hindi</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Spanish" id="Spanish" />
                    <label for="Spanish">
                      {" "}
                      <a href="">Spanish</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Dutch" id="Dutch" />
                    <label for="Dutch">
                      {" "}
                      <a href="">Dutch</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13  span3  ">
                    <input type="checkbox" name="Italian" id="Italian" />
                    <label for="Italian">
                      {" "}
                      <a href="">Italian</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 ">
                    <input type="checkbox" name="Tagalong" id="Tagalong" />
                    <label for="Tagalong">
                      {" "}
                      <a href="">Tagalong</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="English" id="English" />
                    <label for="English">
                      {" "}
                      <a href="">English</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Japanese" id="Japanese" />
                    <label for="Japanese">
                      {" "}
                      <a href="">Japanese</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Urdu" id="Urdu" />
                    <label for="Urdu">
                      {" "}
                      <a href="">Urdu</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="French" id="French" />
                    <label for="French">
                      {" "}
                      <a href="">French</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Portuguese" id="Portuguese" />
                    <label for="Portuguese">
                      {" "}
                      <a href="">Portuguese</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13  span3">
                    <input type="checkbox" name="German" id="German" />
                    <label for="German">
                      {" "}
                      <a href="">German</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Other" id="Other" />
                    <label for="Other">
                      {" "}
                      <a href="">Other</a>{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  for="country"
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
                  for="state"
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
                  for="origin"
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
                  for="Religin"
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
                    <label for="Never-Married">
                      {" "}
                      <a href="">Never Married</a>{" "}
                    </label>
                  </div>
                  <div className="i-agree inline text_13 span3">
                    <input type="checkbox" name="Divorced" id="Divorced" />
                    <label for="Divorced">
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
                    <label for="Widow/Widower">
                      {" "}
                      <a href="">Widow/Widower</a>{" "}
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className="form-check-inline">
                <label
                  for="children"
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
                  for="Hchildren"
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
                  for="Smokes"
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
                <label for="pics" className="control-label col-sm-4  col-lg-3">
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
