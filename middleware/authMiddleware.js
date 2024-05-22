import ApiError from "../entities/ApiError";
import {verifyAccessToken} from "../utils/jwt";

const authMiddleware = (req, _res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  if (!accessToken) throw new ApiError(401, "access token required", {});

  try {
    const decodedToken = verifyAccessToken(accessToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    throw new ApiError(401, "invalid access token", {});
  }
};

export default authMiddleware;
