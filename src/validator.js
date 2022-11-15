const SETTING = require("./constants/setting");

const ERROR_MESSAGE = {
  WRONG_TYPE: "[ERROR] 숫자만 입력하셔야 합니다.",
  DUPLICATE: "[ERROR] 중복되지 않은 숫자만 입력하셔야 합니다.",
  COMMA: "[ERROR] 숫자를 쉼표로 구분해서 입력하셔야 합니다.",
  WRONG_RANGE: `[ERROR] ${SETTING.MIN_NUMBER}~${SETTING.MAX_NUMBER}사이의 숫자만 입력하셔야 합니다.`,
  LENGTH: `[ERROR] 숫자 ${SETTING.LOTTO_NUMBER_LENGTH}개만 입력하셔야 합니다.`,

  BONUS_NUMBER: {
    LENGTH: "[ERROR] 숫자 하나만 입력하셔야 합니다.",
    DUPLICATE: "[ERROR] 당첨번호와 중복되지 않는 숫자만 입력하셔야 합니다.",
  },
};

const BONUS_NUMBER_LENGTH = 1;

const validator = {
  checkBonusNumber(bonusNumber, winNumber) {
    if (bonusNumber.length !== BONUS_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER.LENGTH);
    }

    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.WRONG_TYPE);
    }

    const winNumbers = winNumber.split("");

    if (winNumbers.includes(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUMBER.DUPLICATE);
    }

    if (bonusNumber < SETTING.MIN_NUMBER && bonusNumber > SETTING.MAX_NUMBER) {
      throw new Error(ERROR_MESSAGE.WRONG_RANGE);
    }
  },

  checkWinNumber(winNumber) {
    const winNumbers = winNumber.split(",").map((el) => Number(el));

    const isAllNumber = winNumbers.every((number) => {
      return !isNaN(number) ? true : false;
    });

    const isWinNumberInRange = winNumbers.every((number) => {
      return number >= SETTING.MIN_NUMBER && number <= SETTING.MAX_NUMBER ? true : false;
    });

    if (winNumbers.length !== SETTING.LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.COMMA);
    }

    if (!isAllNumber) {
      throw new Error(ERROR_MESSAGE.WRONG_TYPE);
    }

    if (!isWinNumberInRange) {
      throw new Error(ERROR_MESSAGE.WRONG_RANGE);
    }

    if (new Set(winNumbers).size !== SETTING.LOTTO_NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.DUPLICATE);
    }
  },
};

module.exports = validator;
