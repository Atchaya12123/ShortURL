import express from "express"
import {handleUserSignup, handleUserLogin } from "../Controller/userAuth.js";

const userRoute = express.Router();

userRoute.post("/", handleUserSignup);
userRoute.post("/login", handleUserLogin);

export default userRoute