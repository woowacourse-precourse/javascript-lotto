const { Random, Console } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  play() {
    const [amount, money] = createUserInput();
    validateInputMoney(money);
    const userLotto = createUserLotto(amount);
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

function createUserLotto(amount) {
  const lottoArr = [];
  for (let i = 0; i < amount; i++) {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto.sort((a, b) => a - b);
    lottoArr.push(lotto);
  }
  Console.print(`${amount}개를 구매했습니다.`);
  lottoArr.forEach((i) => {
    Console.print(`[${i.join(", ")}]`);
  });
  return lottoArr;
}

module.exports = App;
