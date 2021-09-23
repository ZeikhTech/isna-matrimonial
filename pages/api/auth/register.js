import connectDB from "../../../utils/connectDB";
import User from "../../../models/user";
import { signupSchema } from "../../../utils/validations";
import bcrypt from "bcrypt";
import { ErrorMessage } from "formik";
const saltRounds = 10;

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};
const register = async (req, res) => {
  try {
    const { name, email, password, cf_password } = req.body;
    const formikResult = signupSchema.validate(req.body);
    const user = await User.find({ email });
    if (user.length > 0) {
      return res.status(409).send({ message: "Email already exists!" });
    }
    if (password) {
      const salt = await bcrypt.genSalt(parseInt(saltRounds));
      var hash = await bcrypt.hash(req.body.password, salt);
    }
    const newuser = new User({
      name: name,
      email: email,
      password: hash,
    });
    const result = await newuser.save();
    return res.status(200).json({
      status: 200,
      message: "success",
      user: result,
    });
  } catch (error) {
    return res.status(200).json({
      status: 500,
      message: error,
    });
  }
};
