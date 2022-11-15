const ERROR_MESSAGE = {
  WRONG_TYPE: "[ERROR] 숫자만 입력하셔야 합니다.",
  DUPLICATE: "[ERROR] 중복되지 않은 숫자만 입력하셔야 합니다.",
  WRONG_RANGE: "[ERROR] 1~45사이의 숫자만 입력하셔야 합니다.",

  BONUS_NUMBER_LENGTH: "[ERROR] 숫자 하나만 입력하셔야 합니다.",
  WIN_NUMBER_COMMA: "[ERROR] 숫자를 쉼표로 구분해서 입력하셔야 합니다.",
};

const validator = {
  checkBonusNumber(bonusNumber, winNumber) {
    if (bonusNumber.length !== 1) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER_LENGTH);
    }

    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.WRONG_TYPE);
    }

    const winNumbers = winNumber.split("");
    if (winNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  },

  checkWinNumber(winNumber) {
    const winNumbers = winNumber.split(",").map((el) => Number(el));
    const isAllNumber = winNumbers.every((number) => {
      return !isNaN(number) ? true : false;
    });
    const isWinNumberInRange = winNumbers.every((number) => {
      return number >= 0 && number <= 45 ? true : false;
    });

    if (winNumbers.length !== 6) {
      throw new Error(ERROR_MESSAGE.WIN_NUMBER_COMMA);
    }

    if (!isAllNumber) {
      throw new Error(ERROR_MESSAGE.WRONG_TYPE);
    }

    if (!isWinNumberInRange) {
      throw new Error(ERROR_MESSAGE.WRONG_RANGE);
    }

    if (new Set(winNumbers).size !== 6) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  },
};

module.exports = validator;
