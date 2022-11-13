const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class LottoSet {
  #lottoSet;
  #money;

  constructor(money) {
    this.#lottoSet = [];
    this.#money = money;
  }

  validate(money) {
    const testType = /[0-9]/;
    if (!testType.test(money)) throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    if (money < 1000) throw new Error('[ERROR] 최소 금액이 1000원 입니다.');
    if (money % 1000) throw new Error('[ERROR] 로또 구입 후 잔돈이 남습니다');
    return money;
  }

  buyLottos(money) {
    const lottos = Math.floor(money / 1000);
    MissionUtils.Console.print(`${lottos}개를 구매했습니다.`);
  }
}

module.exports = LottoSet;
