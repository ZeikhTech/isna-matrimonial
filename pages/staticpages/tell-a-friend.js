export default function InviteFriend() {
  return (
    <main className="page-waper pt-80 Invite_friends">
      <section id="content" className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card mt-30 minh-320">
                <form action="/dashboard" method="POST">
                  <h3 className="pull-left  "> Invite friends and family</h3>
                  <button
                    type="submit"
                    className="theme-button-success mr-5 icon-forward pull-right"
                    style={{ marginTop: "-5px" }}
                  >
                    &nbsp; Leave it
                  </button>
                </form>
                <hr className="my-3" />
                <p>
                  Invite your inner circle to ISNA Matrimonials to help grow our
                  community.
                </p>
                <form
                  name="invitefriends"
                  id="invitefriends"
                  className="form-horizontal"
                  action=" m"
                  method="POST"
                >
                  <fieldset className="form-check-inline required align-items-start">
                    <label
                      className="control-label col-sm-4  col-lg-3"
                      for="inputDate"
                    >
                      To
                    </label>
                    <div className="col-lg-8 col-sm-8 px-0">
                      <textarea
                        rows="3"
                        className="form-control "
                        placeholder="Type your friends email here..."
                        name="to"
                        id="to"
                      ></textarea>
                      <p className="muted my-4 col-lg-8 col-sm-8 ml-0  px-0 ">
                        Email addresses should be separated by comma(,).
                      </p>
                    </div>
                  </fieldset>
                  <fieldset className="orm-check-inline required">
                    <label
                      className="control-label col-sm-4  col-lg-3"
                      for="inputDate"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      className="form-control col-lg-8 col-sm-8  readonly"
                      readonly="readonly"
                      value="Invitation to join Matrimonial"
                    />{" "}
                  </fieldset>
                  <fieldset className="form-check-inline required">
                    <label
                      className="control-label col-sm-4  col-lg-3"
                      for="inputDate"
                    >
                      Message
                    </label>
                    <textarea
                      rows="7"
                      placeholder="Type your friends email here..."
                      name="message"
                      id="message"
                      className="form-control col-lg-8 col-sm-8"
                    >
                      {" "}
                    </textarea>
                  </fieldset>
                  <div className="controls d-flex justify-content-center">
                    <button
                      type="submit"
                      className="theme-button-success mr-5 icon-hand-right"
                    >
                      &nbsp; Send
                    </button>
                    <button
                      type="reset"
                      className="theme-button-dannger icon-minus-sign"
                    >
                      &nbsp; Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
