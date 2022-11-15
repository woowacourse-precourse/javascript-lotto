const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.userAmount;
  }

  play() {}

  printStartGame() {
    MissionUtils.Console.readLine("구입금액을 입력해주세요: ", (amount) => {
      this.userAmount = amount;
      this.howManyBuyLotto(amount);
    });
  }

  howManyBuyLotto(amount) {
    const count = parseInt(amount / 1000);
    MissionUtils.Console.print(`${Number(count)}개를 구매했습니다.`);

    this.printLottoList(count);
  }
}

module.exports = App;
