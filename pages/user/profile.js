export default function Profile() {
  return (
    <main className="pt-80">
      <section className="container" role="main-content">
        <div className="mt-20">
          <div className="row ">
            <div className="col-md-7  card" style={{ minHeight: "212px" }}>
              <div className="media user-profile-card">
                <div className="pull-left" align="center">
                  <div className="ipg_112">
                    {" "}
                    <span>
                      <a className="crop_overlay" href=" ">
                        <img
                          className="ipg media-object img-polaroid"
                          src="/assets/images/2/profile_images/Nursing.jpg"
                        />
                      </a>
                    </span>{" "}
                  </div>
                  <button
                    className="theme-button-reset   icon-heart mt-2"
                    id="favme"
                  >
                    {" "}
                    Add to Favorite
                  </button>

                  <div id="interest">
                    {" "}
                    <a
                      className="theme-button-reset  icon-eye-open mt-2"
                      href=" "
                    >
                      Show Interest
                    </a>{" "}
                  </div>
                  <button type="button" className="theme-button-dannger mt-2  ">
                    Report
                  </button>
                </div>
                <div className="media-body">
                  <h4 className="pull-left" style={{ textTransform: "none" }}>
                    Zubia Mahmood
                  </h4>
                  <div className="clearfix"></div>
                  <p>
                    Age: 22
                    <br /> Newfoundland , Canada{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12 mb-20 my-4">
              <div className="accordion-group">
                <div className="accordion-heading">
                  {" "}
                  <span className="accordion-toggle">
                    Media
                    <a
                      className="pull-right"
                      href="/mediacontent/listmedia/1/28213"
                    >
                      <small>View Gallery</small>
                    </a>
                  </span>
                </div>
                <div className="p-4">
                  <div className="row " id="media_gallery">
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-2 ">
            <div className="col-lg-6">
              <h3 className="mb-2">Personal Information</h3>
              <table className="table table-bordered table-striped mb-5">
                <tbody>
                  <tr>
                    <td width="185px">
                      <strong>Gender</strong>
                    </td>
                    <td> Female </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Age</strong>
                    </td>
                    <td> 22 </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Citizenship Status</strong>
                    </td>
                    <td>Citizen</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Location</strong>
                    </td>
                    <td> Newfoundland , Canada </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Height</strong>
                    </td>
                    <td> 5'5"(165cm) </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Eye Color</strong>
                    </td>
                    <td> Brown </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hair Color</strong>
                    </td>
                    <td> Black </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Profession</strong>
                    </td>
                    <td> Other , Registered Nurse </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Annual Income</strong>
                    </td>
                    <td> $50,001 to $75,000 </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Origin</strong>
                    </td>
                    <td>
                      <span>Canada </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Body Type</strong>
                    </td>
                    <td> About average </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Education</strong>
                    </td>
                    <td> Bachelors </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Marital Status</strong>
                    </td>
                    <td> Never Married </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Want Children</strong>
                    </td>
                    <td> May be </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Have Children</strong>
                    </td>
                    <td> No </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Religion</strong>
                    </td>
                    <td> Muslim </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Smoke</strong>
                    </td>
                    <td> No </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Language</strong>
                    </td>
                    <td> </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-2">Looking For</h3>
              <table className="table table-bordered table-striped mb-0">
                <tbody>
                  <tr>
                    <td width="185px">
                      <strong>Gender</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Age</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Citizenship Status</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Location</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Height</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Eye Color</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Hair Color</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Profession</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Annual Income</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Body Type</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Education</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Marital Status</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Want Children</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Have Children</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Religion</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Smoke</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Language</strong>
                    </td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Desired Partner`s Qualities</strong>
                    </td>
                    <td>
                      {" "}
                      Good looking, medical doctor or studying for med
                      school,open to reason when there is dispute, fun
                      loving,Pakistani punjabi backgroung preferred{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
