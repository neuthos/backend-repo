import {Router} from "express";
const router = Router();
import userRouter from "./userRoutes";
/**
 * USERS ROUTER
 */
router.use("/users", userRouter);

export default router;
