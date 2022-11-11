const { MAX_NUMBER, MIN_NUMBER } = require("./constants");

const ValidateBonus = (numbers, bonusNumber) => {
  checkBonusNotANumber(bonusNumber);
  checkBonusDuplicated(numbers, bonusNumber);
  checkBonusRange(bonusNumber);
};

const checkBonusNotANumber = (bonusNumber) => {
  if (isNaN(bonusNumber)) {
    throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
  }
};

const checkBonusDuplicated = (numbers, bonusNumber) => {
  if (numbers.includes(+bonusNumber)) {
    throw new Error(
      "[ERROR] 보너스 번호는 당첨 번호와 중복되어서는 안 됩니다."
    );
  }
};

const checkBonusRange = (bonusNumber) => {
  if (+bonusNumber < MIN_NUMBER || +bonusNumber > MAX_NUMBER) {
    throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.");
  }
};

module.exports = ValidateBonus;
