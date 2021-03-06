"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_1 = require("../controller");
var router = express_1.default.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
    res.send("welcome");
});
router.post("/registerCompany", controller_1.registerCompany);
exports.default = router;
//# sourceMappingURL=index.js.map