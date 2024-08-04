import express from "express";
import postRoute from "./routers/post.route.js";

const app = express();


// app.get("/",(req, res)=>{
// res.send("my name is prashant");
// });

app.use(express.json());
app.use("/", postRoute);

app.listen(3300, () =>{
    console.log("Server is running on port on 3300");
});