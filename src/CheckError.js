class CheckError {
  static check(numbers) {
    const setNumbers = new Set(numbers);

    if (numbers.length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

    if (setNumbers.size !== 6)
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');

    numbers.map((number) => {
      if (isNaN(number))
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');

      if (number < 1 || number > 45)
        throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
    });
  }

  static bonusNumberCheck(bonusNumber, lottoWinnerNumber) {
    if (lottoWinnerNumber.includes(bonusNumber))
      throw new Error('[ERROR] 로또 번호와 보너스 번호가 중복될 수 없습니다.');

    if (isNaN(bonusNumber))
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');

    if (bonusNumber < 1 || bonusNumber > 45)
      throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
  }
}

module.exports = CheckError;
