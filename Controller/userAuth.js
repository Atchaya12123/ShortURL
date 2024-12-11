import User from "../Models/user.model.js"
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../service/auth.js";

async function handleUserSignup(req,res){
    const {name, email, password} = req.body
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/login")
}

async function handleUserLogin(req,res){
    const {email, password} = req.body
    const user = await User.findOne({
        email,
        password,
    });

    if(!user)
        return res.render("login", {
             error: "Invalid Username or Password"
    });

    const sesId = uuidv4();
    setUser(sesId, user);
    res.cookie("uid",sesId)
    return res.redirect("/");
}


// async function signup(req,res){
//     const user = req.body; // req.body.namgtm, email, pasw
//     if(!user) res.status(400).json({error:"invalid user"})
//     await User.create({
//         name: user.name,
//         email: user.email,
//         password: user.password,
//     })
//     res.redirect("/login")
// }

// async function login(req,res){
    
//     const user = await User.findOne({
//         email: req.body.email, 
//         password: req.body.password
//     });
    
//     if(!user) res.status(401).json({msg:"Invalid Credentils"})

//         const sesId = uuidv4();

// }

export { handleUserSignup, handleUserLogin}