import Link from "next/link";
import React from "react";
import { Formik, Form, Field } from "formik";
import { cpSchema } from "../../utils/validations";
const initialValue = {
  oldPassword: "",
  newPassword: "",
  cf_password: "",
};
const submitForm = (userData) => {
  console.log(userData);
};
export default function ChangePassword() {
  return (
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
                initialValues={initialValue}
                validationSchema={cpSchema}
                onSubmit={(values) => {
                  console.log("values", cpSchema);
                }}
              >
                {({ errors, touched, handleSubmit }) => (
                  <Form>
                    <div className="form-group">
                      <Field
                        type="Password"
                        className="form-control"
                        placeholder="Old Password"
                        name="oldPassword"
                        required=""
                      />
                    </div>
                    {errors.oldPassword && touched.oldPassword ? (
                      <div>{errors.oldPassword}</div>
                    ) : null}
                    <div className="form-group">
                      <Field
                        type="Password"
                        className="form-control"
                        placeholder="New Password"
                        name="newPassword"
                        required=""
                      />
                    </div>{" "}
                    {errors.newPassword && touched.newPassword ? (
                      <div>{errors.newPassword}</div>
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
                    <a onClick={handleSubmit} className="theme-button mt-5 ">
                      Update Password
                    </a>
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
                      Create A New Account?
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
  );
}
