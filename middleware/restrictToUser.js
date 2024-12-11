import {getUser} from "../service/auth.js"

async function restrictToUser(req,res,next) {
    const userUid = req.cookies?.uid;
    if(!userUid) return res.redirect("/login")
        const user = getUser(userUid)
    
    //console.log(user+" "+userUid);
    if(!user) return res.redirect("/login");
    req.user = user;
    next();
}

async function checkAuth(req,res,next) {
    const userUid = req.cookies?.uid;
    const user = getUser(userUid);
    
    req.user = user;
    next();
}

export {restrictToUser, checkAuth}