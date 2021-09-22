import Link from "next/link";
import Header2 from "./header-after-login";
const onChangeCat = (type) => {
  var array = ["Home", "About", "Articles", "Faq", "Contact"];
  for (let x = 0; x < array.length; x++) {
    $(`#${array[x]}`).removeClass("active");
  }
  if (type != "") {
    $(`#${type}`).addClass("active");
  }
};
export default function header() {
  return (
    <div>
      {" "}
      <header>
        <div className="container">
          <div className="tob-bar">
            <Link href="/">
              <a>
                <img
                  src="/assets/images/brand_logo.png"
                  className="img-fluid brand-logo"
                  alt=""
                />
              </a>
            </Link>
            <div>
              <ul>
                <li>
                  <Link href="/staticpages/login">
                    <a>
                      <img
                        src="/assets/images/login_icon.png"
                        className="mr-2"
                        alt="login_icon"
                      />
                      <span className="txt-hide">Login</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/staticpages/sign-up">
                    <a>
                      <img
                        src="/assets/images/sign-up-icon.png"
                        className="mr-2"
                        alt="login_icon"
                      />
                      <span className="txt-hide">Sign Up</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample11"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-sm navbar-light bg-light top-nav-fiex"
          data-toggle="affix"
        >
          <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
            <div
              className="collapse navbar-collapse text-center center-nav"
              id="navbarsExample11"
            >
              <ul className="navbar-nav">
                <li className="nav-item  ">
                  <Link href="/">
                    <a
                      onClick={(e) => {
                        onChangeCat("Home");
                      }}
                      className="nav-link"
                      id="Home"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/staticpages/about-us">
                    <a
                      className="nav-link "
                      onClick={(e) => {
                        onChangeCat("About");
                      }}
                      id="About"
                    >
                      About Us
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/staticpages/articles">
                    <a
                      className="nav-link"
                      onClick={(e) => {
                        onChangeCat("Articles");
                      }}
                      id="Articles"
                    >
                      Articles
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/staticpages/faq">
                    <a
                      className="nav-link"
                      onClick={(e) => {
                        onChangeCat("Faq");
                      }}
                      id="Faq"
                    >
                      faqs
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/staticpages/contact-us">
                    <a
                      className="nav-link"
                      onClick={(e) => {
                        onChangeCat("Contact");
                      }}
                      id="Contact"
                    >
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
