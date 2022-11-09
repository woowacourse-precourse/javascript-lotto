const { Console, Random } = require("@woowacourse/mission-utils");

class LottoGame {
  getUserMoney() {
    Console.readLine("구매금액을 입력해 주세요", (money) => {});
  }
}
module.exports = LottoGame;
