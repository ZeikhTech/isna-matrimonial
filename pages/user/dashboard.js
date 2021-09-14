import SearchProfile from "./search-profile";
import AdvancedSearch from "./advanced-search";
import SavedResults from "./saved-result";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Dashboard() {
  return (
    <main className="pt-80 page-waper">
      <section className="profile-card">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" style={{ minHeight: "212px" }}>
              <div className="card">
                <div className="media d-flex align-items-center">
                  <div className="pull-left" align="center">
                    <div className="ipg_112">
                      {" "}
                      <span>
                        <Link href="/user/profile">
                          <a className="crop_overlay">
                            <img
                              className="ipg media-object img-polaroid"
                              src="/assets/images/iph.gif"
                              style={{
                                backgroundImage:
                                  "url(/assets/images/2/profile_images/thumb/awais-karamat.jpg)",
                              }}
                            />
                            <div
                              id="advanced"
                              className="circle"
                              style={{ display: "none" }}
                            ></div>
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div className="media-body ml-3">
                    <h4 className="pull-left" style={{ textTransform: "none" }}>
                      Awais Karamat
                    </h4>
                    <div className="clearfix"></div>
                    <p className="mb-0">
                      Age: 26
                      <br /> New York , United States{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-tabs">
        <div className="container">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Search Profile
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Advance Search
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                My Saved Search
              </a>{" "}
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <SearchProfile />
            </div>
            <div
              className="tab-pane fade show active"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <AdvancedSearch />
            </div>
            <div
              className="tab-pane fade show active"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <SavedResults />
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 Favorites-tabs mb-3">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    First Panel
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    Second Panel
                  </a>{" "}
                </li>
              </ul>
              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div id="favorties" className="tab-pane pad-15  active  ">
                    <div className="media">
                      <a className="pull-left" href="">
                        <img
                          src="/assets/images/2/profile_images/thumb/Favorites.jpg"
                          width="72"
                          className="media-object img-polaroid"
                        />
                      </a>
                      <div className="media-body ml-15">
                        <h5 style={{ marginBottom: "5px" }}>
                          <Link href="/user/profile">
                            <a>Zubia Mahmood</a>
                          </Link>
                          <br />
                          <small>Registered Nurse</small>
                        </h5>
                        <p>
                          Age: 22 | Never Married | Muslim
                          <br /> Corner Brook | Canada
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div align="right">
                      {" "}
                      <span className="badge">1 </span>{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="tabs-2"
                  role="tabpanel"
                  style={{ minHeight: "200px" }}
                >
                  <p>Second Panel</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="accordion">
                <div className="accordion-group">
                  <div className="accordion-heading">
                    <div className="accordion-toggle pl-2">
                      <span>My Gallery</span>
                      <a
                        href="mediacontent/listmedia/1/30766"
                        className="pull-right"
                      >
                        {" "}
                        <span className="badge"></span>{" "}
                        <small className="pr-2">Manage Gallery</small>
                      </a>
                    </div>
                  </div>
                  <div className="pad-5 mt-10 ">
                    <div className="row-fluid" id="media_gallery">
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Articles-wraper ">
        <div className="container pt-4">
          <div className="row">
            <div className="col-lg-3 col-md-5 col-sm-7 col-10 mx-auto px-0">
              <OwlCarousel
                className="owl-theme "
                items={1}
                loop
                margin={10}
                autoplay={true}
                nav
              >
                <div className="item">
                  <div className="card p-3 ">
                    <a href="" className="img-polaroid mb-10 ipg ">
                      <img src="/assets/images/2/profile_images/featured/slide-3.jpg" />
                    </a>
                    <h5>
                      <a href="">MSiddique</a>
                      <br />
                      <small>Student</small>
                    </h5>
                    <div>
                      Age: 21 | Never Married | Muslim
                      <br />
                      Granger | United States
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card p-3 ">
                    <a href="" className="img-polaroid mb-10 ipg ">
                      <img src="/assets/images/2/profile_images/featured/slide-3.jpg" />
                    </a>
                    <h5>
                      <a href="">MSiddique</a>
                      <br />
                      <small>Student</small>
                    </h5>
                    <div>
                      Age: 21 | Never Married | Muslim
                      <br />
                      Granger | United States
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card p-3 ">
                    <a href="" className="img-polaroid mb-10 ipg ">
                      <img src="/assets/images/2/profile_images/featured/slide-3.jpg" />
                    </a>
                    <h5>
                      <a href="">MSiddique</a>
                      <br />
                      <small>Student</small>
                    </h5>
                    <div>
                      Age: 21 | Never Married | Muslim
                      <br />
                      Granger | United States
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>{" "}
            <div className="col-lg-5 col-md-7 mb-3">
              <div className="media-gallery ipg_388 p-3">
                <a href="" className="img-polaroid mb-10 ipg ">
                  <img
                    src="/assets/images/iph.gif"
                    className="img-polaroid mb-10 ipg"
                    style={{
                      backgroundImage:
                        "url(/assets/images/2/profile_images/Decent.jpg)",
                    }}
                  />
                </a>
                <div
                  className="detail"
                  style={{ minWidth: "94%", fontSize: "14px" }}
                >
                  {" "}
                  <a href="">
                    <h5>
                      Decent
                      <br />
                      <small>Computer Scientist</small>
                    </h5>
                    <p>
                      Age: 29 | Never Married | Muslim
                      <br />
                      New York | United States
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 articles-content-text ">
              <h3 className="hbb">
                Articles
                <small className="pull-right mt-10 mr-30">
                  <a href="/articles">See All</a>
                </small>
              </h3>
              <ul className="media-list article">
                <ul className="media-list article">
                  <li className="media">
                    <h4 className="media-heading">
                      <a href="">Parents must consider character and…</a>
                      <br />
                      <small style={{ textTransform: "capitalize" }}>
                        May 30, 2013
                      </small>
                    </h4>
                    <p className="media-body"> </p>
                    <p>
                      I am a Muslim-twenty-something, born, educated, and raised
                      in U.S.-with Muslim, Pakistani immigrant…
                      <a href="">
                        <u>Read more</u>
                      </a>
                    </p>
                  </li>
                  <li className="media">
                    <h4 className="media-heading">
                      <a href="">Seeking Tranquility</a>
                      <br />
                      <small style={{ textTransform: "capitalize" }}>
                        May 30, 2013
                      </small>
                    </h4>
                    <p className="media-body"> </p>
                    <p>
                      The Qur’an not only provides a romantic image, but also
                      reveals practical ways to achieve…
                      <a href="">
                        <u>Read more</u>
                      </a>
                    </p>
                  </li>
                  <li className="media">
                    <h4 className="media-heading">
                      <a href="">Muslim couples need to weigh…</a>
                      <br />
                      <small style={{ textTransform: "capitalize" }}>
                        May 30, 2013
                      </small>
                    </h4>
                    <p className="media-body"> </p>
                    <p>By Aneesah and Zarinah Nadir</p>
                    <p>
                      Lady of Justice may be blind, but when…
                      <a href="">
                        <u>Read more</u>
                      </a>
                    </p>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container   my-5">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            autoplay={true}
            nav
          >
            <div className="item">
              <div className="card">
                <div className="img-box pull-left ml-0 ipg img-polaroid">
                  <img src="/assets/images/2/profile_images/Nursing.jpg" />
                </div>
                <div>
                  {" "}
                  <span className="day">
                    <a href="javascript:void(0);" style={{ cursor: "text" }}>
                      a couple of days ago
                    </a>
                  </span>
                  <h5>
                    <Link href="/user/profile">
                      <a>Psyche</a>
                    </Link>
                    <br />
                    <small>Student</small>
                  </h5>
                  <p>
                    Age: 20 | Never Married | Muslim
                    <br />
                    Texas | United States
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="img-box pull-left ml-0 ipg img-polaroid">
                  <img src="/assets/images/2/profile_images/Nursing.jpg" />
                </div>
                <div>
                  {" "}
                  <span className="day">
                    <a href="javascript:void(0);" style={{ cursor: "text" }}>
                      a couple of days ago
                    </a>
                  </span>
                  <h5>
                    <Link href="/user/profile">
                      <a>Psyche</a>
                    </Link>
                    <br />
                    <small>Student</small>
                  </h5>
                  <p>
                    Age: 20 | Never Married | Muslim
                    <br />
                    Texas | United States
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="img-box pull-left ml-0 ipg img-polaroid">
                  <img src="/assets/images/2/profile_images/Nursing.jpg" />
                </div>
                <div>
                  {" "}
                  <span className="day">
                    <a href="javascript:void(0);" style={{ cursor: "text" }}>
                      a couple of days ago
                    </a>
                  </span>
                  <h5>
                    <Link href="/user/profile">
                      <a>Psyche</a>
                    </Link>
                    <br />
                    <small>Student</small>
                  </h5>
                  <p>
                    Age: 20 | Never Married | Muslim
                    <br />
                    Texas | United States
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="img-box pull-left ml-0 ipg img-polaroid">
                  <img src="/assets/images/2/profile_images/Nursing.jpg" />
                </div>
                <div>
                  {" "}
                  <span className="day">
                    <a href="javascript:void(0);" style={{ cursor: "text" }}>
                      a couple of days ago
                    </a>
                  </span>
                  <h5>
                    <Link href="/user/profile">
                      <a>Psyche</a>
                    </Link>
                    <br />
                    <small>Student</small>
                  </h5>
                  <p>
                    Age: 20 | Never Married | Muslim
                    <br />
                    Texas | United States
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <div className="img-box pull-left ml-0 ipg img-polaroid">
                  <img src="/assets/images/2/profile_images/Nursing.jpg" />
                </div>
                <div>
                  {" "}
                  <span className="day">
                    <a href="javascript:void(0);" style={{ cursor: "text" }}>
                      a couple of days ago
                    </a>
                  </span>
                  <h5>
                    <Link href="/user/profile">
                      <a>Psyche</a>
                    </Link>
                    <br />
                    <small>Student</small>
                  </h5>
                  <p>
                    Age: 20 | Never Married | Muslim
                    <br />
                    Texas | United States
                  </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
          {/* <div className="owl-carousel hom-carousel" id="client-slider"> */}
          {/* <SecondCarousel responsive={responsive}> */}
          {/* </SecondCarousel> */}
          {/* </div> */}
        </div>
      </section>
    </main>
  );
}
