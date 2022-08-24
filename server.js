import express from "express";
import "express-async-errors";
import session from "express-session";
import dotenv from "dotenv";
import cors from "cors";

import notFoundMiddleware from "./middleware/not-found.js";
import { dbConnect } from "./db/connect.js";
import { router as userRouter } from "./routes/user/user.js";
import passport from "passport";
const app = express();
dotenv.config();
app.use(cors());
app.use(
  session({
    secret: "Bookmyshowsecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
const port = process.env.PORT;

app.use("/", userRouter);
dbConnect(process.env.DB_NAME, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});
app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
