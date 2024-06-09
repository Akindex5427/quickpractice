const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from node, i am inside a docker container..</h1>");
    
});

app.listen(3000, () => {
    console.log("App runnning on port 3000...");
});