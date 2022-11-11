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

  static throwErrorIfInValidFormOfWinningNumber(inputValue) {
    const regex = /^(\d+,){5}\d+$/;
    if (!regex.test(inputValue)) {
      throw Error('[ERROR] 여섯개의 숫자를 ,로 구분해 입력해야 합니다.');
    }
    inputValue.split(',').forEach((number) => {
      if (number[0] === '0') {
        throw Error('[ERROR] 정수 앞에 0이 올 수 없습니다.');
      }
    });
  }

  static throwErrorIfInValidWinningNumber(winningNumber) {
    winningNumber.forEach((number) => {
      if (number > 45 || number < 1) {
        throw Error('[ERROR] 1에서 45까지의 숫자를 입력해야 합니다.');
      }
    });
    if (new Set(winningNumber).size < 6) {
      throw Error('[ERROR] 중복된 숫자를 입력할 수 없습니다.');
    }
  }

  static throwErrorIfInValidBonusNumber(winningNumber, bonusNumber) {
    const regex = /^\d+$/;
    if (!regex.test(bonusNumber) || bonusNumber > 45 || bonusNumber < 1) {
      throw Error('[ERROR] 1에서 45까지의 숫자를 입력해야 합니다.');
    }
    if (winningNumber.includes(Number(bonusNumber))) {
      throw Error('[ERROR] 이미 당첨 번호에 포함된 번호를 입력할 수 없습니다.');
    }
  }
}

module.exports = Validator;
