import { USER_COLLECTION } from "../../db/collection.js";
import { ObjectId } from "mongodb";
import bcrpyt from "bcrypt";
import { Auth } from "two-step-auth";
import { data } from "../../db/connect.js";
let otp = 0;
let email = "";
const emailOtp = (emailId) => {
  return new Promise(async (resolve, reject) => {
    email = emailId;
    await Auth(emailId, "Bookmyshow-Clone").then((data) => {
      otp = data.OTP;
      resolve(data);
    });
  });
};
const otpVerify = (otpUser) => {
  return new Promise((resolve, reject) => {
    if (otpUser === otp) {
      resolve({ status: "success",email });
    } else {
      resolve({ status: "failed" });
    }
  });
};

export { emailOtp, otpVerify };
