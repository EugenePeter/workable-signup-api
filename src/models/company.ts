// import mongoose from "mongoose";

// // An interface that describes the properties that are required to create a new company
// interface CompanyAtrtibutes {
//   company_name: string;
//   email: string;
//   password: string;
// }

// // An interface that describes the properties that a company model has
// interface CompanyModel extends mongoose.Model<CompanyDocument> {
//   build(attrs: CompanyAtrtibutes): CompanyDocument;
// }

// // An interface that describes the properties that a company document has
// interface CompanyDocument extends mongoose.Document {
//   company_name: string;
//   email: string;
//   password: string;
// }

// const companySchema = new mongoose.Schema({
//   company_name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// companySchema.statics.build = (attrs: CompanyAtrtibutes) => {
//   return new Company(attrs);
// };

// export const Company = mongoose.model<CompanyDocument, CompanyModel>(
//   "Companies",
//   companySchema
// );

// // const company = Company.build({
// //   company_name: "workable",
// //   email: "test@gmail.com",
// //   password: "123",
// // });

export {};
