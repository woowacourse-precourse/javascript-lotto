const { ERROR_MSG } = require('./Constant');

class IO {
  static validate(input) {
    if (/^\D|[^\d{1,2}]|,{2,}|\D[,]|,$/g.test(input.trim()))
      throw new Error(ERROR_MSG.prefix + ERROR_MSG.notNumber);
  }
}

module.exports = IO;
