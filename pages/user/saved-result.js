export default function SavedResults() {
  return (
    <div className="row d-flex align-items-center Search-results">
      <div className="col-lg-12 col-md-12">
        <h3>Search results</h3>
        <hr className="my-3" />
        <div className="card">
          <p>Sorry, you did'nt save any search.</p>
        </div>
      </div>
      <div className="col-lg-12 mb-5  ">
        <div className="button-view d-flex justify-content-end flex-wrap">
          <button type="button" className="theme-button-dannger icon-off mr-2">
            <span className=" ml-2">Hide Search Panel </span>
          </button>
          <button
            type="button"
            className="theme-button-success icon-th-large mr-2"
          >
            <span className=" ml-2"> Thumbnail View </span>
          </button>
          <button
            type="button"
            className="theme-button-reset icon-th-list mr-2"
          >
            <span className=" ml-2"> Summary View </span>
          </button>
        </div>
      </div>
    </div>
  );
}
