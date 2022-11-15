function checkSixNumber(numbers) {
  if (new Set(numbers).size !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

function checkNumberRange(numbers) {
  if (Math.min(numbers) < 1 || Math.max(numbers) > 45) {
    throw new Error('[ERROR] 로또 번호는 1~45범위 안에 있어야 합니다.');
  }
}

function checkLottoValidation(numbers) {
  checkSixNumber(numbers);
  checkNumberRange(numbers);
}

module.exports = checkLottoValidation;
