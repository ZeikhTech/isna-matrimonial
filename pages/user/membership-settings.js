export default function MembershipSettings() {
  return (
    <main className="pt-80   page-waper">
      <section role="main-content">
        <div className="mt-30 nofl container">
          <div className="row faq-wraper">
            <div className="col-lg-8">
              <h3>Membership Setting</h3>
              <hr className="my-3" />
              <div id="accordion" className="accordion">
                <div className="card">
                  <div
                    className="card-header collapsed"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    {" "}
                    <a className="card-title">Current Billing Cycle</a>{" "}
                  </div>
                  <div
                    id="collapseOne"
                    className="card-body collapse"
                    data-parent="#accordion"
                  >
                    <p>
                      <b>Start Date:</b> 07-29-2021 <b>End Date:</b> 08-05-2021{" "}
                      <b>Payment Plan:</b> Free Trial <b>Amount:</b> $0.00{" "}
                      <b>Status:</b> Active{" "}
                    </p>
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
                    <a className="card-title">Upgrade Your Membership</a>{" "}
                  </div>
                  <div
                    id="collapseTwo"
                    className="card-body collapse"
                    data-parent="#accordion"
                  >
                    <p>
                      <p>
                        You are using Free Trial membership for now. Upgrade
                        your membership now to access all features and
                        communicate freely with other members. Please click
                        button below.{" "}
                      </p>
                    </p>
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
                    <a className="card-title">Cancel You Membership</a>{" "}
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        If you would like to cancel your membership, please
                        click on the button below. This will inactivate your
                        auto billing i.e you credit card will not be auto
                        recharged and your payments will be stopped. Your
                        profile will not be shown in search results for other
                        members to contact you. You will still be able to log in
                        to your account till your current membership expires.
                        You may reactivate your account in the future without
                        having to create a new account.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
