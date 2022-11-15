const MissionUtils = require("@woowacourse/mission-utils");
const { INGAME_INFORM, INGAME_INPUT, INGAME_RESULT } = require("./constants");
const purchased = require("./utils/listPurchased");
// const Player = require("./Player");
const Validation = require("./Validation");
const stringToArray = require("./utils/stringToArray");
const makeStat = require("./utils/makeStat");
const makeResult = require("./utils/makeResult");
const makeProfit = require("./utils/makeProfit");

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
    const result = makeStat(lottos, win, bonusWin);

    const hitResult = makeResult(result).hitResult;
    const profitResult = makeProfit(hitResult, lottos).profit;
    this.showResult(hitResult, profitResult);
  }

  showResult(hitResult, profitResult) {
    MissionUtils.Console.print(
      INGAME_RESULT.STATS(
        hitResult[0],
        hitResult[1],
        hitResult[2],
        hitResult[3],
        hitResult[4],
        profitResult
      )
    );
  }

  // 그다음 총 test 되어야하고, #numbers 활용 하도록 리팩토링
}

module.exports = Lotto;
