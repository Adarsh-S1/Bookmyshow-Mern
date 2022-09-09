import express from "express";
import passport from "passport";
import dotenv from "dotenv";
import {
  otpLogin,
  otpVerify,
  googleLogin,
  registerUser,
} from "./userHelper.js";
import "../../utils/Passport.js";
var router = express.Router();
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/loginemail", (req, res) => {
  otpLogin(req.body.email).then((data) => {
    res.json(data.success);
  });
});

router.post("/loginphone", (req, res) => {
  otpLogin(parseInt(req.body.phone)).then((data) => {
    res.json(data);
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
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  async (req, res) => {
    await googleLogin(req.user._json, JWT_SECRET).then((data) => {
      res.redirect(
        `http://localhost:3000/register/${btoa(JSON.stringify(data))}`
      );
    });
  }
);

router.post("/register", (req, res) => {
  registerUser(req.body).then((res) => {
    console.log(res);
  });
});

export { router };
