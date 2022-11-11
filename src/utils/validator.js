function validateCashInput(value) {
  if (value % 1000 !== 0) {
    throw new Error('[ERROR] 1,000으로 나누어떨어지는 금액을 입력해주세요.');
  }
  if (value <= 0) {
    throw new Error('[ERROR] 양수 값을 입력해주세요.');
  }
}

function validateBonus(winningNumberArr, input) {
  const regExp = /[0-9]/g;
  const matchArr = input.match(regExp);
  if (matchArr.length !== input.length) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
  let num = Number(input);
  if (num < 1 || num > 45) {
    throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 수들로 이루어져야 합니다.');
  }
  if (winningNumberArr.includes(num)) {
    throw new Error('[ERROR] 당첨번호와 중복되지 않는 수를 입력해주세요.');
  }
}

module.exports = { validateCashInput, validateBonus };
