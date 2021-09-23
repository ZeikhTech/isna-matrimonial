import React,{useState,useEffect} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { Formik, Form, Field } from "formik";
import { validatePasswordReset } from "../../../../utils/validations";
import {resetMyPassword} from "../../../../redux/api/auth"
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import {Toast} from "../../../../components/ToastBody";
const initialValues = {
  password: "",
  cf_password: "",
};


export default function ForgetPassword(props) {
 
    const router = useRouter()
const {token}= router.query;
console.log(token);
    const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(false);
    const resetPasswordHandler = (values) => {
        console.log("comming in update");
        setShowLoader(true);
        const body = {
            token:token,
          ...values,
        };
        dispatch(
          resetMyPassword({
            body,
            onSuccess: (res) => {
              toast.success(
                <Toast
                  title="Password Changed"
                  message="your password has been changed."
                />
              );
              router.push('/staticpages/login', undefined, { shallow: true })  
            //   dispatch(setLoginModalVisibility(true));
            },
            onEnd: () => {
              setShowLoader(false);
            },
          })
        );
      };
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
                  validationSchema={validatePasswordReset}
                  onSubmit={(values) => {
                    resetPasswordHandler(values);
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
                      <button type="submit" className="theme-button mt-5" >
                        Reset
                      </button>
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
