import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "../../redux/reducer/authReducer"
import { useRouter } from 'next/router'

export default function HeaderAfterLogin(props) {
  const router = useRouter()
// console.log();
  const dispatch = useDispatch()
  const logoutt = (e)=>{
  dispatch(logout())
  // localStorage.removeItem("xAuthToken");
  router.push('/staticpages/login', undefined, { shallow: true })
  }
  return (  
    <header>
      <div className="navbar-fixed-top">
        <div className="brand-bar bg-light">
          <div className="container  ">
            <Link href="/">
            <a className="brand" >
              {" "}
              <img
                src="/assets/images/brand_logo.png"
                alt="ISNA Matrimonials"
              />{" "}
            </a></Link>
            <div className="pull-right ">
              <div className="pull-right d-flex align-items-center ">
                <Link href="/user/dashboard">
                  <a>Dashboard</a>
                </Link>
                <span className="mr-15 ml-15 va-m">|</span>{" "}
                <Link href="/user/messages">
                  <a>Communication</a>
                </Link>
                <span className="mr-15 ml-15 va-m">|</span>{" "}
                <Link href="/user/list-media">
                  <a>Gallery</a>
                </Link>
                <div></div><div
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
                      <Link href="/user/edit-profile">
                        <a className="dropdown-item">
                          <i className="icon-cog"></i> Update Profile
                        </a>
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link href="/user/membership-settings">
                        <a className="dropdown-item">
                          <i className="icon-user"></i> Manage Membership
                        </a>
                      </Link>
                      <Link href="/user/match-criteria">
                        <a className="dropdown-item">
                          <i className="icon-eye-open"></i> Match Criteria
                        </a>
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link href="/staticpages/change-password">
                        <a className="dropdown-item">
                          <i className="icon-lock"></i> Change Password
                        </a>
                      </Link>
                        <a className="dropdown-item" onClick={(e)=>{logoutt(e)}}>
                          <i className="icon-signout"></i> Sign Out
                        </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
