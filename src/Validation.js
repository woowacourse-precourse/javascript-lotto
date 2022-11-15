class Validation {
  isDuplicate(numbers) {
    const set = new Set(numbers);
    if ((numbers.length !== set.size) === true) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  length(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  numberRange(numbers) {
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 당첨 번호는 1 ~ 45 사이여야 합니다.");
      }
    });
  }
}

module.exports = Validation;
