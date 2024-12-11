import express from "express";
import mongoCon from "./connection.js";

import path from "path"
import cookieParser from "cookie-parser";

import staticRoute from "./Routes/staticRouter.js"
import urlRoute from "./Routes/urlRoutes.js"
import userRoute from "./Routes/userRoutes.js";

import {restrictToUser, checkAuth} from "./middleware/restrictToUser.js";


const app = express();

const PORT = 1703


mongoCon("mongodb://127.0.0.1:27017/urlStore")

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/url", restrictToUser,urlRoute)
app.use("/",checkAuth,staticRoute)
app.use("/user", userRoute)

app.listen(PORT, ()=>{
    console.log("serve listening");
    });

//res.render("Home")
