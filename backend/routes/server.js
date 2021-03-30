import pkg from "express";
const Router = pkg;
const router = new Router();
import { createReadStream } from "fs";

router.get("/", async (req, res) => {
  const beans = await createReadStream("../assets/menu.json");
  beans.pipe(res);
});
//post to api
export default router;
