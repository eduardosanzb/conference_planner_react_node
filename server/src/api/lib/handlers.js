const handleSuccess = (res, response) => {
  res.status(200).json({
    success: true,
    data: response
  });
};
const handleError = async (res, error) => {
  res.status(500).json({
    success: false,
    message: error.message,
    errors: Object.keys(error.errors)
  });
};

module.exports = {
  handleSuccess,
  handleError
};
