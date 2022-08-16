import express from "express";
var router = express.Router();  
import { emailOtp, otpVerify } from "./userHelper.js";
import dotenv from "dotenv";
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleSecretId = process.env.GOOGLE_CLIENT_SECRET;


router.post("/loginemail", (req, res) => {
  emailOtp(req.body.email).then((data) => {
    res.json(data.success)
  })
});

router.post("/otpverify", (req, res) => {
  otpVerify(parseInt(req.body.otp)).then((data) => {
  res.json(data)
  });
});

export { router };
