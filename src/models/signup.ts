import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import { Company } from "../utils";
import { EventEmitter } from "stream";
import { register } from "ts-node";

interface IData {
  company_name: string;
  email: string;
  password: string;
  created_date: any;
}

interface Event {
  data: IData;
  errors: string[];
}

export class User<T extends Event> {
  data: T["data"];
  errors: T["errors"];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
    console.log("DATA", this.data);
  }

  cleanUp() {
    // get rid of any bogus properties
    if (typeof this.data.company_name != "string") this.data.company_name = "";
    if (typeof this.data.email != "string") this.data.email = "";
    if (typeof this.data.password != "string") this.data.password = "";
    this.data = {
      company_name: this.data.company_name.trim().toLowerCase(),
      email: this.data.email.trim().toLowerCase(),
      password: this.data.password.trim(),
      created_date: new Date(),
    };
  }
  validate() {
    return new Promise(async (resolve, reject) => {
      this.data.company_name == "" && this.errors.push("You must provide a company name.");

      this.data.email == "" && this.errors.push("You must provide an email address.");
      this.data.email !== "" &&
        !validator.isEmail(this.data.email) &&
        this.errors.push("You must provide an valid email.");

      this.data.password == "" && this.errors.push("You must provide a password.");
      this.data.password.length < 6 && this.errors.push("Password must be at least 6 characters.");

      // Only if username is valid then check to see if it's already taken
      const email_to_check = this.data.email;
      if (validator.isEmail(this.data.email)) {
        let emailExists = await Company.findOne({ email: email_to_check });
        //@ts-ignore
        emailExists && emailExists?.email && console.log("doesEmailExist result:", emailExists.email);
        if (emailExists && emailExists?.email) {
          this.errors.push("That email is already being used.");
        }
      }
      resolve("test");
    });
  }
  async register() {
    try {
      // Step #1: Validate user data
      // this.cleanUp();
      // await this.validate();
      // Step #2: Only if there are no validation errors
      // then save the user data into a database
      // if (this.errors.length > 0) throw this.errors;

      // hash user password
      let salt = bcrypt.genSaltSync(10);
      this.data.password = bcrypt.hashSync(this.data.password, salt);
      console.log("THIS DATA:", this.data);
      const company = Company.build({
        ...this.data,
      });
      await company.save();
      console.log("COMPANY:", company);
      console.log("DOES IT HAVE ERRORS: ", this.errors);
      console.log("i am running inside register user model >>");
      return company;
      return {
        message: "yes",
      };
    } catch (e) {
      console.log("REGISTER ERROR:", e);
      throw this.errors;
    }
  }
}
