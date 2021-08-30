import Link from "next/link";
export default function SearchProfile() {
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
              name="sp-name"
              className="input-small"
              type="text"
              placeholder=""
            />{" "}
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-minage" className="control-label">
              Min Age
            </label>
            <select id="sp-minage" name="sp-minage" className="input-small">
              <option value="0">From</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
            </select>
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-maxage" className="control-label">
              Max Age
            </label>
            <select id="sp-maxage" name="sp-maxage" className="input-small">
              <option value="0">To</option>
              <option value="18">18</option>
              <option value="19">19</option>
            </select>
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-country" className="control-label">
              Country
            </label>
            <select required="" id="country" name="country" className="valid">
              <option value="0"> Please Select Country</option>
              <option value="223"> United States </option>
              <option value="36"> Canada </option>
            </select>
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-state" className="control-label">
              State
            </label>
            <select className="" name="state" id="state" required="">
              <option value="0"> Please Select State</option>
              <option value="2"> Alabama </option>
              <option value="1"> Alaska </option>
              <option value="3"> American Samoa </option>
            </select>
          </fieldset>
          <fieldset className="control-group pull-left mr-10 mb-0">
            <label for="sp-yes" className="control-label">
              Photo
            </label>
            <div className="i-agree">
              <input type="checkbox" name="iagree_to" id="iagree_to" />
              <label for="iagree_to">
                {" "}
                <a href="">yes </a>{" "}
              </label>
            </div>
          </fieldset>
          <fieldset className="control-group pull-left mb-0">
            <Link href="/user/search-result">
              <button className="theme-button-dannger mt-3">Search</button>
            </Link>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
