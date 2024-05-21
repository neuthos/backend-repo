import ApiError from "../entities/ApiError";

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const {success, statusCode, message, error} = err;
    res.status(statusCode).json({success, message, code: statusCode, error});
  } else {
    res.status(500).json({success: false, message: "Internal Server Error"});
  }
};

export default errorHandler;
