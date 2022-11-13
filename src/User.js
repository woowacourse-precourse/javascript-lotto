const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;

class User {
  getUserMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (userMoney) => {
      if (!this.isValidUserMoney(userMoney)) {
        throw new Error('유효하지 않은 입력입니다.');
      }
    });
  }

  isValidUserMoney(userMoney) {
    return (
      this.isValidType(userMoney) &&
      this.isValidRange(userMoney) &&
      this.isValidToDivide(userMoney)
    );
  }

  isValidType(userMoney) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(userMoney);
  }

  isValidRange(userMoney) {
    return userMoney >= 1000 && userMoney < Number.MAX_SAFE_INTEGER;
  }

  isValidToDivide(userMoney) {
    return Number(userMoney) % 1000 === 0;
  }
}
module.exports = User;
