import {Router} from "express";
const router = Router();
import userRouter from "./userRoutes";
import ApiError from "../entities/ApiError";
import successHandler from "../middleware/successHandler";
import {generateAccessToken} from "../utils/jwt";

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email !== "admin@mail.com" && password !== "admin") {
    throw new ApiError(401, "Invalid email or password");
  }
  console.log("masok");
  const accessToken = generateAccessToken({email, password});
  console.log(accessToken);
  return successHandler(res, "Login successful", 200, {accessToken, email});
});

/**
 * USERS ROUTER
 */
router.use("/users", userRouter);

export default router;
