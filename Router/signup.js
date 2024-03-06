import express from "express"
import signup from "../Controllers/signup.js"
import login from "../Controllers/login.js"
import verify_signup_body from "../Middlewares/signup.mv.js";

const router = express.Router();

router.post("/api/v1/auth/signup", verify_signup_body,  signup)

router.post("/api/v1/auth/login", login)

export default router;