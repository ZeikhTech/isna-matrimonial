import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../../utils/validations";
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react"
import {
  signinUser,
} from "../redux/api/auth";
export default function Login() {
const {errors,setErrors}= useState("")
  const router = useRouter()
    const dispatch = useDispatch();
  const submitForm = async (userData) => {

    dispatch(
      signinUser({
        body: userData,
        onSuccess: (res) => {

          console.log(res);
          if(res.data.status==200){
            localStorage.setItem("accessToken",res.data.accessToken)
            router.push('/', undefined, { shallow: true })  
          }

          // this.props.history.push("/");
        },onError:(res)=>{
          console.log(res);
          if(res.status==403){
            console.log("402");
            alert("Worng usernmae password")
          }else if(res.status==401){
            console.log("401");
            alert("User not found")
          }
          
        },
        onEnd: () => {
          // setShowLoader(false);
        },
      })
    );
    }

  return (
    <div>
      <section className="login-page">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-6 sign-up">
              <div className="content">
                <h1>Happy to see you!</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login">
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={loginSchema}
                  onSubmit={(value) => {
                    submitForm(value); 
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-group">
                        <Field
                          type="email"
                          className="form-control"
                          placeholder="Username/Email"
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
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheckBox1"
                        />
                        <label
                          className="custom-control-label"
                          for="customCheckBox1"
                        >
                          Keep me signed in
                        </label>
                      </div>
                      {/* <Link href="/"> */}
                      <button type="submit" className="theme-button mt-5 ">
                        Login
                      </button>
                      {/* </Link> */}
                      <Link href="/staticpages/forget-Pass-email">
                        <a className="btn-link text-center d-block">
                          Forgot Password or Username?
                        </a>
                      </Link>
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
                        Not Registered?
                        <Link href="staticpages/SignUp">
                          <a>Join for Free</a>
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
