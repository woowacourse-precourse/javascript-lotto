function checkSixNumber(numbers) {
  if (new Set(numbers).size !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

function checkLottoValidation(numbers) {
  checkSixNumber(numbers);
}

module.exports = checkLottoValidation;
