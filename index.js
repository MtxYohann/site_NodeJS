import Express from "express";
import productRouter from "./routes/product.js";


const app = Express();

app.use(Express.static("public"));

// Configure mon application pour qu'elle utlise ejs comme moteur de templating
// l'outil qui va generer de l'html
app.set("view engine", "ejs");

app.set("views", "views");

app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/product-list", productRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
