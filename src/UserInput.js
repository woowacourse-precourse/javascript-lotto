const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

class UserInput {
  getUserLottos() {
    Console.readLine('당첨 번호를 입력해 주세요.', (userLottoNumber) => {
      this.isValidUserLottoNumber(userLottoNumber.replace(/\s/g, ''));
      Console.print('유효한 로또 번호입니다.');
    });
  }

  getUserBonusNumber() {
    Console.readLine('보너스 번호를 입력해 주세요.', (userBonusNumber) => {
      this.isValidBonusNumber(userBonusNumber.replace(/\s/g, ''));
      Console.print('유효한 보너스 번호입니다.');
    });
  }

  isValidUserLottoNumber(userLottoNumber) {
    if (!this.isValidType(userLottoNumber)) {
      throw new Error(
        '[ERROR] 로또 번호는 숫자만 가능합니다. 쉼표로 구분해주세요.',
      );
    }
    if (!this.isNotSixNumber(userLottoNumber)) {
      throw new Error(
        '[ERROR] 1부터 45까지의 서로 다른 6개의 숫자를 입력해주세요.',
      );
    }
    if (!this.isValidRange(userLottoNumber)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
    if (!this.isNotDuplicated(userLottoNumber)) {
      throw new Error('[ERROR] 로또 번호는 중복이 불가능합니다.');
    }
  }

  isValidBonusNumber(userBonusNumber) {
    if (!this.isValidType(userBonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 숫자만 가능합니다.');
    }
    if (!this.isValidRange(userBonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  isValidType(userLottoNumber) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(userLottoNumber.replace(/,/g, ''));
  }

  isNotSixNumber(userLottoNumber) {
    return userLottoNumber.split(',').filter((num) => num !== '').length === 6;
  }

  isValidRange(userLottoNumber) {
    return userLottoNumber.split(',').every((num) => num >= 1 && num <= 45);
  }

  isNotDuplicated(userLottoNumber) {
    return new Set(userLottoNumber.split(',')).size === 6;
  }
}

module.exports = UserInput;
