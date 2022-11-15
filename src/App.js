const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    const [amount, money] = createUserInput();
    validateInputMoney(money);
  }
}

function createUserInput() {
  let money = 0;
  let amount = 0;
  Console.readLine("구입금액을 입력해 주세요.", (num) => {
    money = num;
    amount = num / 1000;
  });
  return [amount, money];
}

function validateInputMoney(money) {
  if (money % 1000 != 0) {
    throw new Error("[ERROR] 1000원으로 나누어 떨어지는 금액을 입력하세요.");
  }
  if (money < 1000) {
    throw new Error("[ERROR] 1000원이상의 금액을 입력하세요.");
  }
}

module.exports = App;
