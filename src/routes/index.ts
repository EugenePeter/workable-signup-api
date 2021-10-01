import { defaultCipherList } from "constants";
import express from "express";
import { registerCompany, login } from "../controller";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome");
});

router.post("/registerCompany", registerCompany);
// router.get("/registerCompany", (req, res) => {
//   console.log("IAM BEING CALLED FROM REGISTER COMPANY");
//   res.send("hi");
// });

router.post("/login", login);

export default router;
