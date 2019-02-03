var express = require("express");

var app = express();
app.listen(8080, () => {
    console.log("Server running on port 8080");
});

app.get("/docker", (req, res, next) => {
    res.json(["Kevin", "Welter", "Docker"]);
});
