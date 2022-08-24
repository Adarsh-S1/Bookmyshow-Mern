import express from "express";
import passport from "passport";
import fast2sms from "fast-two-sms";
import fetch from "node-fetch";
import otpGenerator from "otp-generator";
import dotenv from "dotenv";
import { emailOtp, otpVerify, googleLogin } from "./userHelper.js";
import "../../utils/Passport.js";
var router = express.Router();
dotenv.config();

const OTP_KEY = process.env.OTP_KEY;
const apiKey = process.env.API_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/loginemail", (req, res) => {
  emailOtp(req.body.email).then((data) => {
    res.json(data.success);
  });
});

router.post("/otpverify", (req, res) => {
  otpVerify(parseInt(req.body.otp)).then((data) => {
    res.json(data);
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "profile",
      "email"
    ],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {
    googleLogin(req.user._json, JWT_SECRET).then((res) => {
      res.json(res);
    });
  }
);

router.post("/loginphone", (req, res) => {
  let phoneOtp = otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  var options = {
    authorization: OTP_KEY,
    message: "Your OTP to login into Bookmyshow-Clone is " + phoneOtp,
    numbers: [req.body.phone],
  };

  // fast2sms
  //   .sendMessage(options)
  //   .then((response) => {
  //     console.log(options);
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});
export { router };
