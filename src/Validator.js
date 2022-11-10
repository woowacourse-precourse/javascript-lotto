class Validator {
  static throwErrorIfInValidMoney(money) {
    const regex = /^\d+$/;
    if (!regex.test(money)) {
      throw Error('[ERROR] 음이아닌 정수를 입력해야 합니다.');
    }
    if (money) {
      if (money % 1000) {
        throw Error('[ERROR] 1000의 배수를 입력해야 합니다.');
      }
    }
    if (money[0] === '0') {
      throw Error('[ERROR] 정수 앞에 0이 올 수 없습니다.');
    }
  }

  static throwErrorIfInValidWinningNumber(winningNumber) {
    const regex = /^(\d+,){5}\d+$/;
    const numbers = winningNumber.split(',');
    if (!regex.test(winningNumber)) {
      throw Error('[ERROR] 여섯개의 숫자를 ,로 구분해 입력해야 합니다.');
    }
    numbers.forEach((number) => {
      if (number[0] === '0') {
        throw Error('[ERROR] 정수 앞에 0이 올 수 없습니다.');
      }
    });
    numbers.forEach((number) => {
      if (number > 45 || number < 1) {
        throw Error('[ERROR] 1에서 45까지의 숫자를 입력해야 합니다.');
      }
    });
    if (new Set(numbers).size < 6) {
      throw Error('[ERROR] 중복된 숫자를 입력할 수 없습니다.');
    }
  }
}

module.exports = Validator;
