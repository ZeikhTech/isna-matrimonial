import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValue = {
  name: "",
  email: "",
  password: "",
  cf_password: "",
};
const schema = Yup.object().shape({
  name: Yup.string().min(3, "Too short username!").required(),
  email: Yup.string()
    .email("Invalid email!")
    .required("Email address is required"),
  password: Yup.string().min(5, "Must be of at-least 5 characters"),
  cf_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
export default function SignUp() {
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
                  initialValues={initialValue}
                  validationSchema={schema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                >
                  {({ errors, touched }) => (
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
                      <a href="" className="theme-button mt-5 ">
                        Signup
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
