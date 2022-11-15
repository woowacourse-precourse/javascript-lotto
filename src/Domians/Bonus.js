const { ERROR, MAX_NUBER, MIN_NUMBER } = require("../Utils/constant");
class Bonus {
  constructor(numbers, bonus) {
    this.validate(numbers, bonus);
  }
  validate(numbers, bonus) {
    if (numbers.includes(bonus)) {
      throw new Error(ERROR.BONUS_DUPLICATION);
    }
    if (bonus > MAX_NUBER || bonus < MIN_NUMBER) {
      throw new Error(ERROR.BONUS_RANGE);
    }
    if (isNaN(bonus)) {
      throw new Error(ERROR.BONUS_ISNAN);
    }
    return true;
  }
}
module.exports = Bonus;
