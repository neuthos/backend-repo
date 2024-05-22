import jwt from "jsonwebtoken";

const verifyAccessToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return decoded;
  } catch (error) {
    throw new Error("Invalid access token");
  }
};

const generateAccessToken = (data) => {
  try {
    const token = jwt.sign(
      JSON.stringify(data),
      process.env.ACCESS_TOKEN_SECRET,
      {}
    );
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export {verifyAccessToken, generateAccessToken};
