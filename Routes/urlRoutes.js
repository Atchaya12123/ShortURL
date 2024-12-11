import express from "express"
import {handleCreateUrl, handleRedir, handleAnalytics} from "../Controller/createURL.js"

const urlRoute = express();

urlRoute.post("/", handleCreateUrl)

urlRoute.get("/:shortId", handleRedir)

urlRoute.get("/analytics/:shortId", handleAnalytics)

export default urlRoute;