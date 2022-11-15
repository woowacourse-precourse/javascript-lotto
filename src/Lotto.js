const MissionUtils = require("@woowacourse/mission-utils");
const { INGAME_INFORM, INGAME_INPUT } = require("./constants");
const purchased = require("./utils/listPurchased");
// const Player = require("./Player");
const Validation = require("./Validation");
const stringToArray = require("./utils/stringToArray");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  issue(tickets) {
    MissionUtils.Console.print(tickets + INGAME_INFORM.PURCHASED);
    const lottos = purchased(tickets);
    lottos.map((el) => MissionUtils.Console.print(el));
    return lottos;
  }

  insertNumbers(lottos) {
    MissionUtils.Console.readLine(
      INGAME_INPUT.WINNING_NUMBERS,
      (numberArray) => {
        new Validation().checkSixString(numberArray);
        MissionUtils.Console.print(numberArray);

        this.insertBonusNumber(numberArray, lottos);
      }
    );
  }

  insertBonusNumber(numberArray, lottos) {
    MissionUtils.Console.readLine(INGAME_INPUT.WINNING_BONUS, (bonus) => {
      new Validation().checkOneString(bonus);
      new Validation().bonusDuplication(numberArray, bonus);
      MissionUtils.Console.print(bonus);

      this.checkWinning(numberArray, bonus, lottos);
    });
  }

  checkWinning(numberArray, bonus, lottos) {
    const win = stringToArray(numberArray);
    const bonusWin = stringToArray(bonus);

    const stats = [];

    for (let i = 0; i < lottos.length; i++) {
      stats.push(lottos[i].filter((x) => win.includes(x)).length);
    }
    console.log(stats);
  }
  //numbers, bonus : 겹치지 않는 로직과 테스트 로직

  makeStats() {
    // 출력시키도록
    //그다음 수익률
    // 그다음 총 test 되어야하고, #numbers 활용 하도록 리팩토링
  }
}

module.exports = Lotto;
