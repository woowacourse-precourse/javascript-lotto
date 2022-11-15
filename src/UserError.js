class UserError {
  includingCharactersError(number) {
    for (let i = 0; i < number.length; i++) {
      if (/\D/g.test(number[i])) {
        throw new Error("[ERROR] 숫자를 입력해 주세요.");
      }
    }
  }

  numbersFormError(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error("[ERROR] 쉼표로 구분해서 입력해 주세요.");
      }
    });
  }

  validateMoney(money) {
    const MONEY_MIN = 1000;
    if (money % MONEY_MIN !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해 주세요.");
    }
  }

  validateWinningNumbers(numbers) {
    const LOTTO_LENGTH = 6;
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateOverlapNumber(numbers) {
    const LOTTO_LENGTH = 6;
    const set = new Set(numbers);
    numbers = [...set];
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error("[ERROR] 중복되는 번호가 있습니다.");
    }
  }

  validateNumberRange(numbers) {
    const RANGE_START = 1;
    const RANGE_END = 45;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < RANGE_START || numbers[i] > RANGE_END) {
        throw new Error("[ERROR] 1~45 사이의 번호를 입력해 주세요.");
      }
    }
  }

  validateBonusNumber(winning, bonus) {
    if (winning.includes(+bonus)) {
      throw new Error(
        "[ERROR] 당첨 번호와 중복되지 않는 보너스 번호를 입력해 주세요."
      );
    }
  }
}

module.exports = UserError;
