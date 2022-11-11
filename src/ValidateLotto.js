const { MIN_NUMBER, MAX_NUMBER } = require("./constants");

const ValidateLotto = (numbers) => {
  checkLength(numbers);
  checkDuplicated(numbers);
  checkRange(numbers);
  checkNotANumber(numbers);
};

const checkLength = (numbers) => {
  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
};

checkDuplicated = (numbers) => {
  let idx = 0;
  while (idx < 5) {
    if (numbers.indexOf(numbers[idx]) != numbers.lastIndexOf(numbers[idx])) {
      throw new Error("[ERROR] 로또 번호는 중복되어서는 안 됩니다.");
    }
    idx += 1;
  }
};

checkRange = (numbers) => {
  numbers.forEach((number) => {
    if (+number < MIN_NUMBER || +number > MAX_NUMBER) {
      throw new Error("[ERROR] 1 ~ 45 사이의 숫자를 입력해주세요.");
    }
  });
};

checkNotANumber = (numbers) => {
  numbers.forEach((number) => {
    if (isNaN(number)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
  });
};

module.exports = ValidateLotto;
