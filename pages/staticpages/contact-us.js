import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactUs } from "../../utils/validations";
import React, { useState } from "react";
export default function ContactUs() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    const exp = /^[a-z A-Z]+$/;
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    if (subject == "") {
      setErrors("Subject is required");
    } else if (subject.length < 3 || !subject.match(exp)) {
      setErrors("Invalid subject");
    } else if (email == "") {
      setErrors("Email is required");
    } else if (!email.match(regexp)) {
      setErrors("Invalid email address");
    } else if (message == "") {
      setErrors("Message is required");
    } else {
      setErrors("");
    }
  };
  return (
    <div>
      <div className="page-title">
        <h1>Contact Us</h1>{" "}
      </div>
      {/* <!--  about-us-banner --> */}
      <div className="about-us-img">
        {" "}
        <img
          src="/assets/images/Contact-Us.png"
          className="img-fluid"
          alt=""
        />{" "}
      </div>
      {/* <!--  about-us-banner --> */}
      <section className="content-us pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h6>
                We are striving to better serve you. Your feedback is very
                important to us. Please use the form below, drop us an email, or
                call us.
              </h6>
              <h4>General questions and feedback</h4>
              <p>
                For general questions and feedback email at{" "}
                <a
                  href="mailto:support@isnamatrimonials.net"
                  className="text-brun"
                >
                  support@isnamatrimonials.net
                </a>
              </p>
              <h4>Business inquiries</h4>
              <p>
                For business development queries (alliances, co-branding,
                advertising), please contact us at{" "}
                <a
                  href="mailto:bizdev@isnamatrimonials.net"
                  className="text-brun"
                >
                  bizdev@isnamatrimonials.net
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-md-6">
              <h4>Customer care</h4>
              <p>For customer care enquiries</p>

              <form>
                <div className="txt_field">
                  <input
                    type="text"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <span></span>
                  <label>Subject*</label>
                </div>
                <div className="txt_field">
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span></span>
                  <label>email*</label>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Message*"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>

                  {/* <div className="upload-btn-wrapper">
                    <button className="btn">
                      Attatch File <i className="fa fa-paperclip"></i>
                    </button>
                    <input type="file" name="myfile" />
                  </div> */}
                </div>
                {errors ? (
                  <div
                    style={{ color: "#FE6E00" }}
                    className="alert alert-danger"
                  >
                    {errors}
                  </div>
                ) : (
                  ""
                )}
                <a
                  className="theme-btn-light"
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  Submit
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
