export default function HeaderAfterLogin() {
  return (
    <header>
      <div className="navbar-fixed-top">
        <div className="brand-bar bg-light">
          <div className="container  ">
            <a className="brand" href="/">
              {" "}
              <img
                src="/assets/images/brand_logo.png"
                alt="ISNA Matrimonials"
              />{" "}
            </a>
            <div className="pull-right ">
              <div className="pull-right d-flex align-items-center ">
                <a href="/user/dashboard">Dashboard</a>{" "}
                <span className="mr-15 ml-15 va-m">|</span>{" "}
                <a href="/user/messages">Communication</a>{" "}
                <span className="mr-15 ml-15 va-m">|</span>{" "}
                <a href="/user/list-media">Gallery</a>
                <div
                  className="btn-group ml-15 dropdown"
                  style={{ display: "inline-block !important" }}
                >
                  {/* <a className="btn prf_info" href="/user/profile">
                    <img src="/assets/images/2/profile_images/icon/20210729013909.jpg?time=1627974178" />{" "}
                    <span style={{ textTransform: "capitalize" }}>
                      Awais Karamat
                    </span>
                  </a>
                  <a className="btn dropdown-toggle btn-top-drop" href="#">
                    <span className="caret"></span>
                  </a> */}

                  <div className="dropdown ">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle prf_info"
                      data-toggle="dropdown"
                    >
                      <img src="/assets/images/2/profile_images/icon/20210729013909.jpg?time=1627974178" />{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        Awais Karamat
                      </span>
                      {/* Dropdown button */}
                    </button>{" "}
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/user/edit-profile">
                        <i className="icon-cog"></i> Update Profile
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="/user/membership-settings"
                      >
                        <i className="icon-user"></i> Manage Membership
                      </a>
                      <a className="dropdown-item" href="/user/match-criteria">
                        <i className="icon-eye-open"></i> Match Criteria
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="/staticpages/change-password"
                      >
                        <i className="icon-lock"></i> Change Password
                      </a>
                      <a className="dropdown-item" href="/staticpages/login">
                        <i className="icon-signout"></i> Sign Out
                      </a>
                    </div>
                  </div>

                  {/* <ul className="dropdown-menu">
                    <li>
                      <a href="/user/edit-profile">
                        <i className="icon-cog"></i> Update Profile
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="/user/membership-settings">
                        <i className="icon-user"></i> Manage Membership
                      </a>
                    </li>
                    <li>
                      <a href="/user/match-criteria">
                        <i className="icon-eye-open"></i> Match Criteria
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="/staticpages/change-password">
                        <i className="icon-lock"></i> Change Password
                      </a>
                    </li>
                    <li>
                      <a href="/staticpages/login">
                        <i className="icon-signout"></i> Sign Out
                      </a>
                    </li>
                  </ul>
               */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
