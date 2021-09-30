// const Employer = require("../model/EmployerModel");
// const jwt = require("jsonwebtoken");

export const login = async (req: any, res: any) => {
  // console.log("///////////////////// from controller");
  // console.log(req.body);

  // let user = new Employer(req.body);

  try {
    // const result = await user.login();
    // console.log(result);
    // console.log(result);
    // console.log(result);
    // console.log(result);
    // if (result) {
    //   res.json({
    //     token: jwt.sign(
    //       {
    //         username: user.data.username,
    //       },
    //       process.env.JWTSECRET,
    //       { expiresIn: "1d" }
    //     ),
    //     id: result.id,
    //     room: result.room,
    //     employerName: user.data.employerName,
    //     status: true,
    //     isOnline: result.isOnline,
    //     loginMessage: "You have succesfully logged in",
    //   });
    // }
  } catch (e) {
    // res.status(400).send({
    //   registerSuccess: false,
    //   errorMessage: e,
    // });
  }
};
