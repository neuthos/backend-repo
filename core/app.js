require("dotenv").config();
import express, {urlencoded, json} from "express";
import errorHandler from "../middleware/errorHandler.js";
import router from "../routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({extended: true}));
app.use(json());

app.use("/v1/api/update-firebase-doc", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
