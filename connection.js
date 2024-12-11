import mongoose from "mongoose"

function mongoCon(url){
    mongoose.connect(url)
    .then(()=>{
        console.log("DB Connected");
    })
    .catch((err)=>{
        console.error("DB Error",err);
    })
}

export default mongoCon;

