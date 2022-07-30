import express from "express";
var router = express.Router();
import { recommendedMovie } from "./userHelper.js";
router.get("/", (req, res) => {
  recommendedMovie().then((response) => {
   res.json(response[0]);
  });
});
export { router };
