function successHandler(res, successMsg, code = 200, successData = null) {
  return res.status(200).json({
    success: true,
    code,
    message: successMsg,
    data: successData,
  });
}

export default successHandler;
