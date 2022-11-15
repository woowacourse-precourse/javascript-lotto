const MissionUtils = require("@woowacourse/mission-utils");

class Coin {
  userInputMoney = 0;
  constructor() {
      this.insertCoin();
  }

  insertCoin() {
      let inputCoin = 0;
      MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
          inputCoin = answer;
          this.userInputMoney = parseInt(inputCoin / 1000);
      })
  }
}

module.exports = Coin;