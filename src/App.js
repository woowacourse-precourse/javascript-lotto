const { Console, Random } = require("@woowacourse/mission-utils");

const INPUT_MESSAGE = {
  money: "구입금액을 입력해 주세요.",
  bonus: "보너스 번호를 입력하세요.",
  winning: "당첨 번호를 입력해 주세요.",
};

class App {
  play() {
    Console.print(INPUT_MESSAGE.money);
    Console.readLine("", (money) => {});
  }
}

module.exports = App;
