class UserError {
  includingCharactersError(money) {
    if (/\D/g.test(money)) {
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
  }

  validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해 주세요.");
    }
  }

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateOverlapNumber(numbers) {
    const set = new Set(numbers);
    numbers = [...set];
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 중복되는 번호가 있습니다.");
    }
  }

  validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 1~45 사이의 번호를 입력해 주세요.");
      }
    });
  }
}

module.exports = UserError;
