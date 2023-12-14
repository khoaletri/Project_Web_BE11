const express = require("express");
const loginAuth = require("../controller/user/loginAuth");
const addUser = require("../controller/user/signUp");
const chatCompletion = require("../controller/user/chatCompletion");
const userData = require("../controller/user/userData");
const checkAuth = require("../middleware/checkAuth");
const router = express.Router();

router.post("/login", loginAuth);
router.get("/data", userData); 
router.post("/signup", addUser);
router.post("/chatbox", chatCompletion);

module.exports = router;
