class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = "Internal Server Error",
    metadata = null
  ) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.metadata = metadata;
  }
}

export default ApiError;
