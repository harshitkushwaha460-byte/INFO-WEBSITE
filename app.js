const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.engine(
    "handlebars",
    engine({
        defaultLayout: "main",
        partialsDir: path.join(__dirname, "views/partials"),
    })
);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/home"));

app.listen(PORT, () => {
    console.log("Server Running...");
});