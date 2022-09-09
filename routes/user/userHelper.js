import { ObjectId } from "mongodb";
import { Auth } from "two-step-auth";
import fast2sms from "fast-two-sms";
import otpGenerator from "otp-generator";
import { data } from "../../db/connect.js";
import { jwtCreate, jwtVerify } from "../../utils/Jwt.js";
import { USER_COLLECTION } from "../../db/collection.js";

import dotenv from "dotenv";
dotenv.config();

const OTP_KEY = process.env.OTP_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

let otp = 0;
let email,
  phone = null;

let userDetails = {
  firstName: null,
  lastName: null,
  email: null,
  phone: null,
  dob: null,
  gender: null,
  locality: null,
  district: null,
  state: null,
  pincode: null,
  token: null,
};
const otpLogin = (userData) => {
  return new Promise(async (resolve, reject) => {
    if (typeof userData == "number") {
      phone = userData;
      let phoneOtp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
      });

      var options = {
        authorization: OTP_KEY,
        message: "Your OTP to login into Bookmyshow-Clone is " + phoneOtp,
        numbers: [phone],
      };

      fast2sms
        .sendMessage(options)
        .then((response) => {
          otp = phoneOtp;
          resolve(response.return);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      email = userData;
      await Auth(userData, "Bookmyshow-Clone").then((data) => {
        otp = data.OTP;
        resolve(data);
      });
    }
  });
};
const otpVerify = (otpUser) => {
  otp = parseInt(otp);
  return new Promise((resolve, reject) => {
    userDetails = {
      firstName: null,
      lastName: null,
      email: email,
      phone: phone,
      dob: null,
      gender: null,
      locality: null,
      district: null,
      state: null,
      pincode: null,
      token: null,
    };
    if (otpUser === otp) {
      if (email != null) {
        data()
          .collection(USER_COLLECTION)
          .findOne({ email: userDetails.email })
          .then((res) => {
            if (res === null) {
              data()
                .collection(USER_COLLECTION)
                .insertOne(userDetails)
                .then((res) => {
                  let token = jwtCreate(res.insertedId, JWT_SECRET);
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
                          resolve({
                            msg: "Otp Verified..Registering your account...",
                            res,
                          });
                        });
                    });
                });
            } else {
              data()
                .collection(USER_COLLECTION)
                .findOne({ email: userDetails.email })
                .then((res) => {
                  resolve({ msg: "Otp Verified ", res });
                });
            }
          });
      } else {
        data()
          .collection(USER_COLLECTION)
          .findOne({ phone: userDetails.phone })
          .then((res) => {
            if (res === null) {
              data()
                .collection(USER_COLLECTION)
                .insertOne(userDetails)
                .then((res) => {
                  let token = jwtCreate(res.insertedId, JWT_SECRET);
                  data()
                    .collection(USER_COLLECTION)
                    .findOneAndUpdate(
                      { _id: ObjectId(res.insertedId) },
                      { $set: { token } }
                    )
                    .then(() => {
                      data()
                        .collection(USER_COLLECTION)
                        .findOne({ phone: userDetails.phone })
                        .then((res) => {
                          resolve({
                            msg: "Otp Verified..Registering your account...",
                            res,
                          });
                        });
                    });
                });
            } else {
              data()
                .collection(USER_COLLECTION)
                .findOne({ phone: userDetails.phone })
                .then((res) => {
                  resolve({ msg: "Otp Verified ", res });
                });
            }
          });
      }
    } else {
      resolve({ msg: "Otp verification failed !", error: true });
    }
    email = null;
    phone = null;
  });
};

const googleLogin = (profile) => {
  return new Promise((resolve, reject) => {
    userDetails = {
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
              let token = jwtCreate(res.insertedId, JWT_SECRET);
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

const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    data()
      .collection(USER_COLLECTION)
      .findOneAndUpdate(
        { email: user.email },
        {
          $set: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            dob: user.dob,
            gender: user.gender,
            locality: user.locality,
            district: user.district,
            state: user.state,
            pincode: user.pincode,
          },
        }
      )
      .then(() => {
        resolve(res);
      });
  });
};

export { otpLogin, otpVerify, googleLogin, registerUser };
