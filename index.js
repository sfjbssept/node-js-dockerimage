// code .

const express = require('express');
const app = express()
const port = 3500

app.get("/", (req,res) => {
    res.send("This is an node js app running on docker ")
})

app.listen(port, () => {
    console.log(`This app is running on port ${port}`);
})