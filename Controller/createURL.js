import { nanoid } from 'nanoid'
import URL from "../Models/url.model.js"

async function handleCreateUrl(req,res){
   const body = req.body;
   if(!body.url) return res.status(400).send("failed")
   const shortId = nanoid(5);

   await URL.create({
    shortId: shortId,
    redirId: body.url,
    visitedHistory: [],
    createdBy: req.user._id,
});

return res.render("Home",{
    id: shortId
});
}

async function handleRedir(req,res){
    const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
        shortId,
    },
     {
        $push:{
            visitedHistory: {
                timestamp : Date.now(),
            },
        },
     },
     {new:true}
    );
    res.redirect(entry.redirId);
    console.log(entry.visitedHistory.length +" ");
}



async function handleAnalytics(req,res){
    const shortId = req.params.shortId;
    const result= await URL.findOne({ shortId });
    return res.json({totalClicks : result.visitedHistory.length,
                    analytics: result.visitedHistory,
    });
}

export {handleCreateUrl,handleRedir, handleAnalytics}

//localhost:Port/:iu86h