/**
 * 
 * @param {Object} res 
 * @param {Object} response 
 */
const handleSuccess = (res, response) => {
  res.status(200).json({
    success: true,
    data: response
  });
};
/**
 * 
 * @param {Object} res 
 * @param {Object} error 
 */
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
