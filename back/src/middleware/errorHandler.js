const logger = require("../utils/logger");

function errorHandler(error, req, res, next) {
  logger.error(error.stack);

  res.status(400).json({ reason: error.message });
}

module.exports = { errorHandler };
