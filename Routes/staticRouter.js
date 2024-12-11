import express from "express"
import URL from "../Models/url.model.js"

const staticRoute = express.Router();

staticRoute.get("/", async(req,res) => {

    if(!req.user) return res.redirect("/login")
    const allurls = await URL.find({ createdBy: req.user._id})
    return res.render("Home",{
        urls: allurls
    });
})

staticRoute.get("/signup", (req,res)=>{
    return res.render("Signup");
})

staticRoute.get("/login", (req,res)=>{
    return res.render("Login");
})

export default staticRoute;
