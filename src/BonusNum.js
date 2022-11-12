const STATIC = require("./Static");
class BonusNum {
  bonusNum;
  constructor(number, lottoNumbers) {
    this.validateIsNum(number);
    this.validateIsRange(number);
    this.validateIsDuplicate(number, lottoNumbers);
    this.bonusNum = number;
  }

  validateIsNum(number) {
    if (isNaN(number)) {
      throw new Error(STATIC.MESSAGE.ERR_INPUT);
    }
  }

  validateIsRange = (number) => {
    if (number >= 45 || number < 1) {
      throw new Error(STATIC.MESSAGE.ERR_INPUT);
    }
  };

  validateIsDuplicate = (number, lottoNumbers) => {
    if (lottoNumbers.includes(number)) {
      throw new Error(STATIC.MESSAGE.ERR_DUPLICATE);
    }
  };
}
const a = new BonusNum(11, [1, 2, 3, 4, 5, 6]);

module.exports = BonusNum;
