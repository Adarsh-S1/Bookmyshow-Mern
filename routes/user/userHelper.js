import { USER_COLLECTION } from "../../db/collection.js";
import { ObjectId } from "mongodb";
import { Auth } from "two-step-auth";
import { data } from "../../db/connect.js";
import { jwtCreate, jwtVerify } from "../../utils/Jwt.js";


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
      resolve({ status: "success", email });
    } else {
      resolve({ status: "failed" });
    }
  });
};

const googleLogin = (profile, jwtsecret) => {
  return new Promise((resolve, reject) => {
    const userDetails = {
      firstName: profile.given_name,
      lastName: profile.family_name,
      email: profile.email,
      phone: null,
      dob: null,
      gender: null,
      locality: null,
      district: null,
      state: null,
      pincode: null,
      token: null,
    };
    data()
      .collection(USER_COLLECTION)
      .findOne({ email: userDetails.email })
      .then((res) => {
        if (res === null) {
          data()
            .collection(USER_COLLECTION)
            .insertOne(userDetails)
            .then((res) => {
              let token = jwtCreate(res.insertedId, jwtsecret);
              data()
                .collection(USER_COLLECTION)
                .findOneAndUpdate(
                  { _id: ObjectId(res.insertedId) },
                  { $set: { token } }
                )
                .then(() => {
                  data()
                    .collection(USER_COLLECTION)
                    .findOne({ email: userDetails.email })
                    .then((res) => {
                      resolve(res);
                    });
                });
            });
        } else {
          data()
            .collection(USER_COLLECTION)
            .findOne({ email: userDetails.email })
            .then((res) => {
              resolve(res);
            });
        }
      });
  });
};

export { emailOtp, otpVerify, googleLogin };
