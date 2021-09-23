import connectDB from "../../../utils/connectDB";
import User from "../../../models/user";
import { loginSchema } from "../../../utils/validations";
import bcrypt from "bcrypt";
import { ErrorMessage } from "formik";
import jwt from "jsonwebtoken"
const secretOrPrivateKey="c2RzYWRhc2RzZHNhZHNhZGFzZmRmZHNmc2RnZHNnZHNzZ3IzMnJld2Y0MzU0Zmd2NTR0Zg==";
import jwtDecode from "jwt-decode";


const saltRounds = 10;

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await signin(req, res);
      break;
  }
};
const signin = async (req,res)=>{
  try{    
    const result = loginSchema.validate(req.body);
    if (result.error) {

        return res.status(400).send({ message: result.message });
    } else {
      var { email,password } = req.body;
      const updatedUser = await User.findOne(
        { email:email },
        function (err, user) {

          if (err) {
            return res.send({
              status: 401,
              message: "Error Occurred",
            });
          } else {
            if (!user) {
              return res.status(400).send({
                status: 401,
                message: "User not found",
              });
            }
            //            if (!user.email.isVerified) {

            if (!user.email) {
              return res.send({
                status: 401,
                message: "Please verify your email address",
              });
            } else {
              bcrypt.compare(password, user.password, async (err, result) => {
                if (err || !result) {
                  return res
                    .status(400)
                    .send({status:403, message:"Wrong password."});
                } else {
                  const EMAIL_SECRET = secretOrPrivateKey;
                  const userId = user._id;
                  const accessToken = jwt.sign({ userId }, EMAIL_SECRET, {
                    expiresIn: "10h",
                  });
                  var decoded = jwtDecode(accessToken);

                  var data = {
                    userName: user.name,
                    email: user.email,
                    avatar: user.avatar,
                    role: user.role,
                  };

                  const id = user._id;
                    
                  return res.status(200).send({
                    status: 200,
                    accessToken: accessToken,
                    user: data,
                    id: id,
                    message: "Log In successfully!",
                  });
                }
              });
            }
          }
        }
      );
    }
  }catch(e){
    return res.status(200).json({
      status: 500,
      message: error,
    });
  }
}
const createUserSession = async (res, user) => {
    const userSession = await new AuthSession({
      user: user._id,
      createdAt: new Date(),
    }).save();
  
    const sessionToken = userSession.generateToken();
    res
      .header("x-auth-token", sessionToken)
      .header("Access-Control-Expose-Headers", "x-auth-token");
    res.sendApiResponse({ data: sanitizeUser(user) });
  };