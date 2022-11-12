class CustomError {
  constructor(errorMessage) {
    return Error(`[Error] : ${errorMessage}`);
  }
}
module.exports = CustomError;
