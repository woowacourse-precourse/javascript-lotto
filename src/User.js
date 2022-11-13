const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const { Console } = MissionUtils;

class User {
  #lottoList;

  getUserMoney() {
    Console.readLine('구입금액을 입력해 주세요.', (userMoney) => {
      this.isValidUserMoney(userMoney.replace(/\s/g, ''));
      this.#lottoList = this.genLottoAsMoney(userMoney.replace(/\s/g, ''));
      Console.print('유효한 입력입니다.');
    });
  }

  isValidUserMoney(userMoney) {
    if (!this.isValidType(userMoney)) {
      throw new Error('[ERROR] 숫자 이외의 값은 입력할 수 없습니다.');
    }
    if (!this.isValidMinRange(userMoney)) {
      throw new Error('[ERROR] 1000원 이상의 금액을 입력해주세요.');
    }
    if (!this.isValidMaxRange(userMoney)) {
      throw new Error('[ERROR] 금액이 너무 큽니다.');
    }
    if (!this.isValidToDivide(userMoney)) {
      throw new Error('[ERROR] 금액은 1000원으로 나누어 떨어져야 합니다.');
    }
  }

  isValidType(userMoney) {
    const typeRegex = /^[0-9]+$/;
    return typeRegex.test(userMoney);
  }

  isValidMinRange(userMoney) {
    return Number(userMoney) >= 1000;
  }

  isValidMaxRange(userMoney) {
    return Number(userMoney) < Number.MAX_SAFE_INTEGER;
  }

  isValidToDivide(userMoney) {
    return Number(userMoney) % 1000 === 0;
  }

  genLottoAsMoney(userMoney) {
    const lottoList = Array.from(
      { length: Number(userMoney / 1000) },
      () => [],
    );

    return lottoList.map(() => {
      const lotto = new Lotto();
      return [...lotto.genLotto];
    });
  }

  get lottoList() {
    return this.#lottoList;
  }
}
module.exports = User;
