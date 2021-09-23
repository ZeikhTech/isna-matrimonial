import Link from "next/link";
import React,{useState} from "react";
import { Card } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { requestPasswordResetSchema } from "../../utils/validations";
import { useDispatch } from "react-redux";
import Loader from "../../components/Loader"
import { toast } from "react-toastify";
import {Toast} from "../../components/ToastBody";

import {
  requestPasswordReset,
} from "../../redux/api/auth";
const initialValues = {
  email: "",
};
import storage from "../../services/storage";


export default function ForgetPassEmail() {
  const dispatch = useDispatch();
    const [showLoader, setShowLoader] = useState(false);
    const [errorMessage, setErrorMessage] = useState({
      type: "success",
      message: "",
    });
  const submitForm = (values) => { 
    setShowLoader(true);
    dispatch(
      requestPasswordReset({
        body: values,
        onSuccess: (res) => {
          console.log("success ha");
          // storage.store("password_reset_email", values.email);
          toast.success(
            <Toast
              title="Email Sent"
              message="We have sent you another password reset email"
            />
          );          // closeModal();
          // if (resetLink) resetLink.click();
        },
        onError: (err) => {
          console.log("err.response.data",err.response);
          if (err.response && err.response.data && err.response.data.message) {
            setErrorMessage({
              type: "danger",
              message: err.response.data.message,
            });
          }
        },
        onEnd: () => {
          setShowLoader(false);
        },
      })
    );
  };
 
  const renderLoader = () => {
    return (
      <div className="overlapping-loader">
        <Loader />
      </div>
    );
  };
  return (
    <div>
      <Card>
        {showLoader && renderLoader()}
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
            validationSchema={requestPasswordResetSchema}
            onSubmit={(value) => {
              console.log(value);
              submitForm(value)
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
                {errorMessage.message && (
                <div className={`alert alert-${errorMessage.type}`}>
                  {errorMessage.message}
                </div>
              )}
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
      </Card>
     </div>
  );
}
