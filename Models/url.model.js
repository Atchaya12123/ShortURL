import mongoose from "mongoose"

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        
    },
    redirId: {
        type: String,
        required:true,
    },

    visitedHistory: [{timestamp:{type: Date}}],
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
    
},{timestamps: true})

const URL = mongoose.model("URL", urlSchema);

export default URL;