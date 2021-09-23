import connectDB from "../../../utils/connectDB";
import User from "../../../models/user";
import { validatePasswords } from "../../../utils/validations";
import bcrypt from "bcrypt";

var jwtDecode = require("jwt-decode");

const saltRounds = 10;

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "PUT":
      await requestPasswordReset(req, res);
      break;
  }
};
const requestPasswordReset = async (req, res) => {
    const formikResult = validatePasswords.validate(req.body);
    if (formikResult.error) {
        return res.status(400).send({ message: formikResult.error.details[0].message });
      } else {
        const { password, cf_password,token } = req.body;
        if (password === cf_password) {
            var data = {
              password: password,
              cf_password: cf_password,
              token: token,
            };
            var decoded = jwtDecode(token);
            const userId = decoded.user;
            var result = await User.findOne({
              _id: userId,
            }).exec();
            if (result) {
              let hash = 0;
              if (data.password) {
                const salt = await bcrypt.genSalt(parseInt(saltRounds));
                hash = await bcrypt.hash(data.password, salt);
              }
              var data2 = {
                password: hash,
              };
              var update = await User.update(
                {
                  _id: userId,
                },
                {
                  $set: data2,
                }
              );
              return res.status(200).json({
                status: 200,
                user: update,
              });
            } else {
              res.status(200).json({
                status: 400,
                message: "Token has been expired!!",
              });
            }
          } else {
            return res.status(400).send({ message: "Passwords are not same!!" });
          }
      }
    
    
    //check if email already exists
  
    // const user = await User.findOne({ email });
  
    // if (!user)
    //   return res.sendApiResponse({
    //     status: 400,
    //     message: "Invalid Email or Password",
    //   });
  
    // if (user.passwordResetCode !== verificationCode)
    //   return res.sendApiResponse({
    //     status: 400,
    //     message: "Invalid reset code.",
    //   });
  
    //generating password hash
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);
  
    // user.passwordResetCode = "";
  
    // await user.save();
    // res.sendApiResponse({ message: "password reset successful" });
  
};
