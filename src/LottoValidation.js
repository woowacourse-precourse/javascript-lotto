class LottoValidation {
  static checkLottoRange(numbers) {
    numbers.forEach((number) => LottoValidation.checkNumberRange(number));
  }

  static checkNumberRange(number) {
    const regExp = /^[1-9]{1}$|^[1-3]{1}[0-9]{1}$|^4{1}[0-5]{1}$/;
    if (!regExp.test(number)) {
      throw new Error('[ERROR] 로또 번호는 1~45범위의 숫자여야 합니다.');
    }
  }

  static checkLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static checkDuplicate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  static checkBonusNumberDuplicate(number, winningNumbers) {
    if (winningNumbers.includes(number)) {
      throw new Error('[ERROR] 보너스 번호가 당첨 번호에 중복되는 값입니다.');
    }
  }

  static checkInputIsNumber(input) {
    const regExp = /^[0-9]+/g;
    if (!regExp.test(input)) {
      throw new Error('[ERROR] 입력값이 숫자가 아닙니다.');
    }
    if (parseInt(input, 10) !== Number(input)) {
      throw new Error('[ERROR] 입력값을 입력하지 않았거나 문자, 특수기호가 포함되어 있습니다.');
    }
  }

  static checkInputIsZero(input) {
    if (input === '0') {
      throw new Error('[ERROR] 구입금액은 0원보다 커야 합니다.');
    }
  }

  static checkInputDivisible(input, divisor) {
    if (Number(input) % divisor !== 0) {
      throw new Error('[ERROR] 구입금액의 단위는 1000원입니다.');
    }
  }
}

module.exports = LottoValidation;
