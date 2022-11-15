const Validation = require("./Validation");
const {
  ERROR_INPUT_MESSAGE,
  ERROR_LOGIC_MESSAGE,
  INGAME_INPUT,
} = require("./constants");
const MissionUtils = require("@woowacourse/mission-utils");

class Player {
  buyTickets(amount) {
    const validation = new Validation();

    if (isNaN(amount)) {
      throw new Error(ERROR_INPUT_MESSAGE.TYPE);
    }

    if (!validation.amountUnit(amount)) {
      throw new Error(ERROR_INPUT_MESSAGE.UNIT);
    }

    return amount / 1000;
  }

  checkTickets(amount, purchased) {
    if (this.buyTickets(amount) !== purchased.length) {
      throw new Error(ERROR_LOGIC_MESSAGE.ISSUE);
    }
  }

  insertNumbers() {
    MissionUtils.Console.readLine(INGAME_INPUT.WINNING_NUMBERS, (string) => {
      new Validation().checkSixString(string);
      MissionUtils.Console.print(string);
    });
  }

  insertBonusNumber() {
    MissionUtils.Console.readLine(INGAME_INPUT.WINNING_BONUS, (string) => {
      new Validation().checkOneString(string);
      MissionUtils.Console.print(string);
    });
  }
  //결과 로직은 [1,2,3,4,5,6].includes 갯수 체크
  //[7] 따로 체크해서 로직에 넣고, 출력시키도록
  //그다음 수익률
  // 그다음 총 test 되어야하고, #numbers 활용 하도록 리팩토링
}

module.exports = Player;
