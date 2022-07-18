import express from 'express'
import dotenv from "dotenv";
import notFoundMiddleware from './middleware/not-found.js'
import { dbConnect } from "./db/connect.js";
const app = express()
dotenv.config();
const port = process.env.PORT;

app.get('/', (req, res) => {
res.send("Welcome")
})

app.use(notFoundMiddleware);

dbConnect(process.env.DB_NAME, process.env.DB_URL, (err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server listening to ${port}`);
});
 