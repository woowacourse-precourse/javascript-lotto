class CustomError {
  constructor(errorMessage) {
    return Error(`[ERROR] : ${errorMessage}`);
  }
}
module.exports = CustomError;
