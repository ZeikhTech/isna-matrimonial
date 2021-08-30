export default function ListMedia() {
  return (
    <div>
      <main className="pt-80 page-waper ">
        <section className="container" role="main-content">
          <div className="mt-30 nofl">
            <div
              align="left"
              className="alert alert-success"
              id="profile_photo"
              style={{ display: "none" }}
            >
              <button type="button" className="close" data-dismiss="alert">
                ×
              </button>{" "}
              <i className="icon-ok-sign mr-10"></i> Your photo has been changed{" "}
            </div>
            <div className="row">
              <div className="col-lg-8">
                <h3>
                  Media Gallery
                  <a
                    href=" "
                    className="pull-right theme-button-success icon-upload addphoto_overlay mb-2"
                  >
                    {" "}
                    Upload
                  </a>
                </h3>
                <hr className="my-3" />
                <div className="clearfix">
                  <div align="left" className="alert alert-success">
                    {" "}
                    List is empty{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
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
    </div>
  );
}
