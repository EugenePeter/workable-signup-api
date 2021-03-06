// const Employer = require("../model/EmployerModel");
// const jwt = require("jsonwebtoken");

import { request } from "http";
import { User } from "../models";

export const registerCompany = async (req: any, res: any) => {
  let user = new User(req.body);
  try {
    const result = await user.register();
    console.log("i am running inside register user controller");
    console.log("RESULTS", result);
    const { company_name, email } = result;
    res.json({
      successfuly_registered: true,
      message: "Company registered",
      company_name,
      email,
    });
  } catch (error: any) {
    console.log("ERROR FROM SIGN UP CONTROLLER:", error);
    res.status(400).json({
      successfuly_registered: false,
      errorMessage: error,
    });
  }
};
