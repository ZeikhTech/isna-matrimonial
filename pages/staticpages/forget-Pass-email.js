import Link from "next/link";
import React from "react";
import { Formik, Form, Field } from "formik";
import { fp_emailSchema } from "../../utils/validations";
const initialValues = {
  email: "",
};
const submitForm = (userData) => {
  console.log(userData);
};
export default function ForgetPassEmail() {
  return (
    <div>
      <section className="login-page">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 login-bg sign-up">
              <div className="content">
                <h1>Find Your Account</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login">
                <Formik
                  initialValues={initialValues}
                  validationSchema={fp_emailSchema}
                  onSubmit={(value) => {
                    console.log(value);
                  }}
                >
                  {({ errors, touched, handleSubmit }) => (
                    <Form>
                      <div className="form-group">
                        <Field
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          required=""
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                      ) : null}
                      {/* <Link href="/staticpages/Login"> */}
                      <button type="submit" className="theme-button mt-5 ">
                        Send Email
                      </button>
                      {/* </Link> */}
                      <h6>OR</h6>
                      {/* <ul className="social-media">
                    <li>
                      <a href="" className="bg-facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" className="bg-google">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul> */}
                      <p>
                        Create A New Account?
                        <Link href="/staticpages/sign-up">
                          <a> SignUp</a>
                        </Link>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
