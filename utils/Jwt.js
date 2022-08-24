import jwt from "jsonwebtoken";

export const jwtCreate = (userId, jwtSecret) => {
  try {
    return jwt.sign({ userId }, jwtSecret, { expiresIn: "2 days" });
  } catch (err) {
    return err;
  }
};

export const jwtVerify = (token, orgToken) => {
  try {
    return jwt.verify(token, orgToken);
  } catch (err) {
    return err;
  }
};
