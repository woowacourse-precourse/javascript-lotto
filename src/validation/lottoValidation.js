function lottoValidation(numbers) {
  checkSixNumber(numbers);
  checkUsefulNumber(numbers);

  return true;
}

function checkSixNumber(numbers) {
  if (new Set(numbers).size !== 6) {
    throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
  }
}

function checkUsefulNumber(numbers) {
  if (Math.min(...numbers) < 1 || Math.max(...numbers) > 45) {
    throw new Error('[ERROR] 로또 번호는 1~45자리의 숫자여야 합니다.');
  }
}

module.exports = lottoValidation;
