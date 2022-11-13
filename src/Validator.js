class Validator {
  static checkNumber(number) {
    if (isNaN(number)) throw new Error('[ERROR] 숫자를 입력해야 합니다.');
    if (Number.isInteger(number) === false) throw new Error('[ERROR] 정수를 입력해야 합니다.');
  }

  static checkLottoNumber(number) {
    this.checkNumber(number);
    if (number < 1 || number > 45) throw new Error('[ERROR] 1~45 범위의 숫자를 입력해야 합니다.');
  }

  static checkLottoNumbers(numbers) {
    if (numbers.length !== 6) throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    const set = new Set(numbers);
    if (set.size !== 6) throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');

    numbers.forEach((number) => {
      this.checkLottoNumber(number);
    });
  }
}

module.exports = Validator;
