export const post=(req, res)=>{
    const data = req.body;

    console.log(data);

    res.send({Message:"Post complete hai"})
}