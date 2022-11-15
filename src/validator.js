const validator = {
  checkBonusNumber(bonusNumber, winNumber) {
    if (bonusNumber.length !== 1) {
      throw new Error("[ERROR] 숫자 하나만 입력하셔야 합니다.");
    }

    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자만 입력하셔야 합니다.");
    }

    const winNumbers = winNumber.split("");
    if (winNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 당첨번호와 중복되지 않은 숫자만 입력하셔야 합니다.");
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
      throw new Error("[ERROR] 숫자를 쉼표로 구분해서 입력하셔야 합니다.");
    }

    if (!isAllNumber) {
      throw new Error("[ERROR] 숫자만 입력하셔야 합니다.");
    }

    if (!isWinNumberInRange) {
      throw new Error("[ERROR] 1~45사이의 숫자만 입력하셔야 합니다.");
    }

    if (new Set(winNumbers).size !== 6) {
      throw new Error("[ERROR] 중복되지 않은 숫자만 입력하셔야 합니다.");
    }
  },
};

module.exports = validator;
