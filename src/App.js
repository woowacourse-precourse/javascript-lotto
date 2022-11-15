const Player = require("./Player");
const Lotto = require("./Lotto");
const MissionUtils = require("@woowacourse/mission-utils");

const { INGAME_INPUT } = require("./constants");

class App {
  play() {
    MissionUtils.Console.readLine(INGAME_INPUT.AMOUNT, (amount) => {
      const player = new Player();
      const lotto = new Lotto();

      const tickets = player.buyTickets(Number(amount));
      lotto.issue(tickets);
      lotto.input();

      //당첨 번호 입력 로직
      //보너스 번호 입력 로직
      //통계, 수익률 출력 로직
    });
  }
}

module.exports = App;
