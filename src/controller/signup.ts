// const Employer = require("../model/EmployerModel");
// const jwt = require("jsonwebtoken");

import { request } from "http";
import { User } from "../models";

export const registerCompany = async (req: any, res: any) => {
  let user = new User(req.body);
  try {
    const result = await user.register();
    console.log("RESULTS", result);
    res.json({
      registerSuccess: true,
      message: "Company registered",
      result,
    });
  } catch (error: any) {
    console.log("CONTROLLER SIGN UP ERROR:", error);
    res.status(400).send({
      registerSuccess: false,
      errorMessage: error,
    });
  }
};
