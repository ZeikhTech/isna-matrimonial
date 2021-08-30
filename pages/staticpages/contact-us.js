import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactUs } from "../../utils/validations";

export default function ContactUs() {
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
              <Formik
                initialValues={{ subject: "", email: "" }}
                validationSchema={contactUs}
                onSubmit={(values) => {
                  console.log("comming");
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ errors, touched, handleSubmit }) => (
                  <Form>
                    <div className="txt_field">
                      {errors.subject && touched.subject ? (
                        <div>{errors.subject}</div>
                      ) : null}
                      <Field type="text" name="subject" /> <span></span>
                      <label>Subject*</label>
                    </div>
                    <div className="txt_field">
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                      <Field type="text" name="email" /> <span></span>
                      <label>email*</label>
                    </div>
                    <div className="form-group">
                      <textarea
                        name="textArea"
                        className="form-control"
                        rows="6"
                        placeholder="Message*"
                      ></textarea>

                      <div className="upload-btn-wrapper">
                        <button className="btn">
                          Attatch File <i className="fa fa-paperclip"></i>
                        </button>
                        <input type="file" name="myfile" />
                      </div>
                    </div>

                    <a
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                      className="theme-btn-light"
                    >
                      Submit
                    </a>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
