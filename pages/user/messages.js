export default function Messages() {
  return (
    <main className="pt-80">
      <form id="frmDelete" className="massage-box" action="" method="post">
        <section className=" main-content  " role="main-content">
          <div className="mt-30 container">
            <h3 className="mb-10">
              {" "}
              <i className="icon-envelope"></i> Inbox
            </h3>
            <div className="mb-30 card">
              <div className="row ">
                <div className="col-md-2 list">
                  <div
                    className="nav flex-column nav-pills mb-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {" "}
                    <a
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Home
                    </a>{" "}
                    <a
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Profile
                    </a>{" "}
                    <a
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      Messages
                    </a>{" "}
                    <a
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      Settings
                    </a>{" "}
                  </div>
                  <div className="create">
                    {" "}
                    <a
                      className="act mt-15 icon-folder-close-alt create_custom_folder_overlay"
                      href="/messages/userfolder"
                    >
                      {" "}
                      &nbsp; Create New Folder
                    </a>{" "}
                  </div>
                </div>
                <div className="col-md-10">
                  <div
                    className="tab-content custom-table"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="button-list d-flex justify-content-between mb-3 flex-wrap">
                        <div className="buton-left d-flex">
                          <button
                            type="button"
                            className="theme-button-dannger mr-2"
                          >
                            <i className="icon-trash mr-1"></i>Delete
                          </button>
                          <button
                            type="button"
                            className="theme-button-success mr-2"
                          >
                            <i className="icon-repeat mr-1"></i> Refresh
                          </button>
                          <div className="dropdown">
                            <button
                              className="theme-button-reset dropdown-toggle mr-2"
                              type="button"
                              data-toggle="dropdown"
                            >
                              Mark A <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#">HTML</a>
                              </li>
                              <li>
                                <a href="#">CSS</a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown mr-2">
                            <button
                              className="theme-button-reset dropdown-toggle"
                              type="button"
                              data-toggle="dropdown"
                            >
                              Mark A <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#">HTML</a>
                              </li>
                              <li>
                                <a href="#">CSS</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="btnn-right">
                          <button type="button" className="theme-button-reset">
                            <i className="icon-search mr-1"></i>Search
                          </button>
                        </div>
                      </div>
                      <table className="table table-condensed table-hover mt-20 messages">
                        <thead className="box-gradiant">
                          <tr>
                            <th>
                              <input
                                type="checkbox"
                                name="select-all"
                                id="checkit"
                                value="0"
                              />{" "}
                            </th>
                            <th>
                              <a href=" " title="Sort">
                                From
                              </a>
                            </th>
                            <th>
                              <a href=" " title="Sort">
                                Subject
                              </a>
                            </th>
                            <th>
                              <a href=" " title="Sort">
                                Date
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan="4">
                              <div className="alert alert-info" align="left">
                                {" "}
                                <i className="icon-info-sign mr-10"></i>You have
                                not received any message yet.{" "}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      {" "}
                      Profile{" "}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      {" "}
                      Messages{" "}
                    </div>
                  </div>
                  <div>
                    <div className="clear"></div>
                  </div>
                  <hr />
                  <div className="pagination pagination-right">
                    <ul> </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
