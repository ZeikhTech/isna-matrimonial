import * as Yup from "yup";
export const signupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short username!").required(),
  email: Yup.string()
    .email("Invalid email!")
    .required("Email address is required"),
  password: Yup.string().min(5, "Must be of at-least 5 characters!"),
  cf_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match!"
  ),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(5, "Too short!").required("Required"),
});

export const cpSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Required"),
  newPassword: Yup.string().min(5, "Too short!").required("Required"),
  cf_password: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match!"
  ),
});
export const fp_emailSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

export const fg_passSchema = Yup.object().shape({
  password: Yup.string().min(5, "Too short!").required("Required"),
  cf_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match!"
  ),
});

export const contactUs = Yup.object().shape({
  subject: Yup.string().min(1).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
