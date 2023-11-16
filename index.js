const express = require("express");
const app = express();
const port = 4000 || ProcessingInstruction.env.PORT;
const expressHbs = require('express-handlebars');

// Cau hinh tra ve thu muc web tinh
app.use(express.static(__dirname + "/html"));

// Cau hinh su dung ViewTemplate
app.engine(
    'hbs',
    expressHbs.engine({
        layoutDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout",
    })
);
app.set ("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index");
});

app.use('/task1.htm', require('./routers/task1Route'));
app.use('/task2.htm', require('./routers/task2Route'));
app.use('/task3.htm', require('./routers/task3Route'));
app.use('/task4.htm', require('./routers/task4Route'));


app.get("/admin", (req, res) => {
    res.render("index", {layout: "admin"});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));