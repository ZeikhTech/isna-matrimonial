import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'
import { signupSchema } from "../../utils/validations";
import { useState, useContext } from "react";
import { postData } from "../../utils/fetchData";
import { Modal, Row, Col } from "react-bootstrap";
import Loader from "../../components/Loader";

import {
  signupUser, 
  signinWithFacebook,
  signinWithGoogle,
} from "../../redux/api/auth";

const initialValue = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
};

  //overlapping Loader
  const renderLoader = () => {
    return (
      <div className="overlapping-loader">
        <Loader />
      </div>
    );
  };
export default function SignUp() {
  const [showLoader, setShowLoader] = useState(false);

  // log
  const router = useRouter()
    const dispatch = useDispatch();
  const submitForm = async (userData) => {
    console.log(userData);
    // const res = await postData("auth/register", userData);
    setShowLoader(true);

    dispatch(
      signupUser({
        body: userData,
        onSuccess: (res) => {
          // if (verifyLink) {
          //   verifyLink.click();
          // }
          router.push('/staticpages/login', undefined, { shallow: true })
          // this.props.history.push("/");
        },
        onEnd: () => {
          setShowLoader(false);
        },
      })
    );

  };
  const [userData, setUserData] = useState(initialValue);
  const { name, email, password, cf_password } = userData;
  return (
    <div>
      <section className="login-page">
      {showLoader && renderLoader()}

        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 sign-up">
              <div className="content">
                <h1>Welcome!</h1>

              </div>
            </div>
            <div className="col-lg-6">

              <div className="login">
 
                <Formik
                  initialValues={initialValue}
                  validationSchema={signupSchema}
                  onSubmit={(value) => {
                    submitForm(value);
                  }}
                >
                  {({ errors, touched, handleSubmit }) => (
                    <Form>
                      <div className="form-group">
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          required=""
                        />
                      </div>
                      {errors.name && touched.name ? (
                        <div>{errors.name}</div>
                      ) : null}
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
                      <div className="form-group">
                        <Field
                          type="Password"
                          className="form-control"
                          placeholder="Password"
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
                          placeholder="Confirm Pasword"
                          name="cf_password"
                          required=""
                        />
                      </div>
                      {errors.cf_password && touched.cf_password ? (
                        <div>{errors.cf_password}</div>
                      ) : null}


                      <button
                        // onClick={handleSubmit}
                        type="submit"
                        className="theme-button mt-5 "
                      >
                        Signup
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
                        Already a member?
                        <Link href="/staticpages/login">
                          <a> Login</a>
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
