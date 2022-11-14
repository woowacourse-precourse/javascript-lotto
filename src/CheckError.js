class CheckError {
  static check(numbers) {
    if (numbers.length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

    numbers.map((number) => {
      if (isNaN(number))
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');

      if (number < 1 || number > 45)
        throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
    });
  }
}

module.exports = CheckError;
