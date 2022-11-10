const MissionUtils = require('@woowacourse/mission-utils');

class Buy {
  #money;

  constructor() {
    this.#money = 0;
  }

  inputMoney() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      this.#money = Number(answer);
      if (this.validate(this.#money)) this.buyLotto(this.#money);
    });
  }

  validate(money) {
    const testType = /[0-9]/;
    if (!testType.test(money)) throw new Error('[ERROR] 숫자만 입력해야 합니다.');
    if (money < 1000) throw new Error('[ERROR] 최소 금액이 1000원 입니다.');
    if (money % 1000) throw new Error('[ERROR] 로또 구입 후 잔돈이 남습니다');
    return money;
  }

  buyLotto(money) {
    const lotto = Math.floor(money / 1000);
    MissionUtils.Console.print(`\n${lotto}개를 구매했습니다.`);
    return lotto;
  }
}

module.exports = Buy;
