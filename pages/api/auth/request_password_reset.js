import connectDB from "../../../utils/connectDB";
import User from "../../../models/user";
import { requestPasswordResetSchema } from "../../../utils/validations";
import {forgetPassEmailVeriFunction} from "./emailVerification"
var emailVerification = require("./emailVerification")
const saltRounds = 10;

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await requestPasswordReset(req, res);
      break;
  }
};
const requestPasswordReset = async (req, res) => {
  const result = requestPasswordResetSchema.validate(req.body);
  if (result.error) {

    return res.status(400).send({ message: result.message });
} else {

  const { email } = req.body;
  //check if email already exists
  const user = await User.findOne({ email });

  if (!user){
    return res.status(401).send({ status: 404, message: "User not found!" });
  }else{
    var id = user._id;
    const x = emailVerification.forgetPassEmailVeriFunction(id, email);
    // await user.save();
    return res.status(200).json({ status: 200, user: user });

  //send email to user with code
  // const { base_url } = req;
  // sendPasswordResetEmail({
  //   to: user.email,
  //   resetCode: user.passwordResetCode,
  //   logoImage: base_url + "/images/logo.png",
  // });
  // res.sendApiResponse({
  //   message: "Password reset code has been sent to your email.",
  // });

  }
    



}
  
};
