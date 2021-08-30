import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { fg_passSchema } from "../../utils/validations";
const initialValues = {
  password: "",
  cf_password: "",
};
export default function ForgetPassword() {
  return (
    <div>
      <section className="login-page">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 login-bg sign-up">
              <div className="content">
                <h1>Change Password</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login">
                <Formik
                  initialValues={initialValues}
                  validationSchema={fg_passSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <Field
                          type="Password"
                          className="form-control"
                          placeholder="New Password"
                          name="password"
                          required=""
                        />
                      </div>
                      {errors.password && touched.password ? (
                        <div>{errors.password}</div>
                      ) : null}
                      <div className="form-group">
                        <Field
                          type="Password"
                          className="form-control"
                          placeholder="Confirm New Pasword"
                          name="cf_password"
                          required=""
                        />
                      </div>
                      {errors.cf_password && touched.cf_password ? (
                        <div>{errors.cf_password}</div>
                      ) : null}
                      {/* <Link href=""> */}
                      <a type="submit" className="theme-button mt-5 ">
                        Update Password
                      </a>
                      {/* </Link> */}
                      <h6>OR</h6>
                      <ul className="social-media">
                        <li>
                          <Link href="">
                            <a className="bg-facebook">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="">
                            <a className="bg-google">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                      <p>
                        Create A New Account?{" "}
                        <Link href="/staticpages/SignUp">
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
