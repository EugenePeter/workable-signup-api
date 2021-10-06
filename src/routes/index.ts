import { defaultCipherList } from "constants";
import express from "express";
import { registerCompany } from "../controller";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome");
});

router.post("/registerCompany", registerCompany);

export default router;
