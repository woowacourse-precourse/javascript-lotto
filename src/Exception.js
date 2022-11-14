function validateMoney(money) {
  if (money % 1000 !== 0) {
    throw Error("[ERROR] 금액은 1000의 배수만 입력 가능합니다.");
  }
}

function validateLottoLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  }
}

function validateNumbersRange(numbers) {
  numbers.forEach(function (number) {
    checkRangeOfNumber(number);
  });
}

function checkRangeOfNumber(number) {
  if (number < 1 || number > 45) {
    throw new Error("[ERROR] 유효하지 않은 로또 번호입니다.");
  }
}

function validateDuplicateNumbers(numbers) {
  const list = [];
  number.forEach(function (number) {
    checkExistNumber(list, number);
    list.push(number);
  });
}

function checkExistNumber(list, number) {
  if (list.includes(number) === true) {
    throw new Error("[ERROR] 중복된 숫자가 존재합니다.");
  }
}

function validateOnlyNumber(numbers) {
  numbers.forEach(function (number) {
    checkNumberType(number);
  });
}

function checkNumberType(number) {
  if (typeof number !== "number") {
    throw new Error("[ERROR] 올바르지 않은 문자가 포함되어 있습니다.");
  }
}
module.exports = {
  validateMoney,
  validateLottoLength,
  validateNumbersRange,
  validateDuplicateNumbers,
  validateOnlyNumber,
};
