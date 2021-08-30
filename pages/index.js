import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  return (
    <div>
      <section className="site-banner">
        <div className="banner-text">
          <h3>Get a 7 day free trial</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor sed nisl sed porttitor. Maecenas luctus, ex ac lobortis
            euismod, diam arcu pellentesque nibh, sed placerat dolor metus vitae
            velit.
          </p>
          <Link href="">
            <a className="theme-btn-light">Register Today</a>
          </Link>
        </div>
      </section>
      <section className="larg-form">
        <div className="container">
          <form action="index_submit" method="get" acceptCharset="utf-8">
            <div className="form-wraper">
              <div className="form-group larg-filed first">
                <label>Gender</label>
                <select className="form-control custom_select">
                  <option value=""> woman</option>
                </select>
              </div>
              <div className="form-group small-filed">
                <label>Min Age</label>
                <select className="form-control custom_select">
                  <option value=""> from</option>
                </select>
              </div>
              <div className=" form-group small-filed">
                <label>Max Age</label>
                <select className="form-control custom_select">
                  <option value=""> to </option>
                </select>
              </div>
              <div className="form-group larg-filed">
                <label> Country</label>
                <select className="form-control custom_select">
                  <option value=""> United States</option>
                </select>
              </div>
              <div className="form-group larg-filed last">
                <label>State</label>
                <select className="form-control custom_select">
                  <option value=""> Florida</option>
                </select>
              </div>
              <div className="search-button">
                <button type="button" className="theme-button">
                  search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="prodect-service mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card text-center">
                <div className="card-img">
                  {" "}
                  <img
                    src="/assets/images/Advance-Search-Icon.png"
                    className="img-fluid"
                    alt=""
                  />{" "}
                </div>
                <h5>Perform Advance Search</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tempor sed nisl sed porttitor. Maecenas luctus, ex ac
                  lobortis euismod, diam arcu pellentesque nibh, sed placerat
                  dolor metus vitae velit.
                </p>
                <div className="bottom-img">
                  {" "}
                  <img
                    src="/assets/images/Pink-Flower.png"
                    className="img-fluid "
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card text-center">
                <div className="card-img">
                  {" "}
                  <img
                    src="/assets/images/Matched-Profile-Icon.png"
                    className="img-fluid"
                    alt=""
                  />{" "}
                </div>
                <h5>View Matched Profile</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tempor sed nisl sed porttitor. Maecenas luctus, ex ac
                  lobortis euismod, diam arcu pellentesque nibh, sed placerat
                  dolor metus vitae velit.
                </p>
                <div className="bottom-img">
                  {" "}
                  <img
                    src="/assets/images/Pink-Flower.png"
                    className="img-fluid "
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
              <div className="card text-center">
                <div className="card-img">
                  {" "}
                  <img
                    src="/assets/images/Message-Icon.png"
                    className="img-fluid"
                    alt=""
                  />{" "}
                </div>
                <h5>Send Message to any Profile</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tempor sed nisl sed porttitor. Maecenas luctus, ex ac
                  lobortis euismod, diam arcu pellentesque nibh, sed placerat
                  dolor metus vitae velit.
                </p>
                <div className="bottom-img">
                  {" "}
                  <img
                    src="/assets/images/Pink-Flower.png"
                    className="img-fluid "
                    alt=""
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slider">
        <div className="container">
          <Carousel responsive={responsive} autoPlay={true}>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  <img src="/assets/images/slid_1.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_2.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_3.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_1.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_2.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_3.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_1.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_2.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="slider-img-wraper">
                  {" "}
                  <img src="/assets/images/slid_3.png" alt="" />
                  <div className="slider-content">
                    <h5>Ayesha Salam</h5>
                    <p>Medical Doctor</p>
                    <p>Age: 33</p>
                    <p>Never Married</p>
                    <p>Muslim</p>
                    <p>Louisville</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
          <Link href="">
            <a className="theme-button">More</a>
          </Link>
        </div>
      </section>
      <section className="latest-articles">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card  ">
                <div className="card-img">
                  {" "}
                  <img
                    src="/assets/images/latest-articles.png"
                    className="img-fluid"
                    alt=""
                  />
                  <p>
                    I am a Muslim-twenty-something, born, educated, and raised
                    in U.S.-with Muslim, Pakistani immigrant parents who are
                    both highly educated. I consider myself a good... and decent
                    Muslim person. God and my duties come before
                  </p>
                </div>
                <div className="footer-botom mt-2 d-flex flex-wrap justify-content-between align-items-start">
                  <div className="text">
                    <h3 className="mb-0">
                      {" "}
                      Parents must consider character and{" "}
                    </h3>
                    <p className="mb-0">May 30, 2021</p>
                  </div>
                  <h3 className="text-brun"> Msiddique </h3>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4 latest-articles-text">
              <h3>latest articles</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services-wraper  ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 ">
              <div className="card">
                <div className="card-img-wraper">
                  {" "}
                  <img src="/assets/images/service_img_1.png" alt="" />
                  <h4>Msiddique</h4>{" "}
                </div>
                <h5>Seeking tranquility </h5>
                <p className="mb-2">May 30, 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenea ...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-img-wraper">
                  {" "}
                  <img src="/assets/images/service_img_2.png" alt="" />
                  <h4>Msiddique</h4>{" "}
                </div>
                <h5>Seeking tranquility </h5>
                <p className="mb-2">May 30, 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenea ...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mx-auto">
              <div className="card">
                <div className="card-img-wraper">
                  {" "}
                  <img src="/assets/images/service_img_1.png" alt="" />
                  <h4>Msiddique</h4>{" "}
                </div>
                <h5>Seeking tranquility </h5>
                <p className="mb-2">May 30, 2021</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenea ...
                </p>
              </div>
            </div>
          </div>{" "}
          <Link href="">
            <a className="theme-button">More</a>
          </Link>{" "}
        </div>
      </section>
    </div>
  );
}
