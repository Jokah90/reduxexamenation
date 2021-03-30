import express from "express";
const { urlencoded, json } = express;
import cors from "cors";
import postRoutes from "./routes/posts.js";
//const CONNECTION_URL = 'mongodb+srv://exam:exam@cluster0.lot0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = 5000;
const app = express();
app.use(cors());
app.use("/posts", postRoutes);
app.use(urlencoded({ extended: true })); //berättar för express att det ska använda urlencoded och json-moduler
app.use(json());
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server is running on http://localhost:5000/posts");
});
