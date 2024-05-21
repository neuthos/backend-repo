import {verify} from "jsonwebtoken";

const verifyAccessToken = (token) => {
  try {
    const decoded = verify(token, process.env.ACCESS_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid access token");
  }
};

export default {verifyAccessToken};
