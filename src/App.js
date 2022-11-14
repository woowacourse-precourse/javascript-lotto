const { Console, Random } = require("@woowacourse/mission-utils");
const InputMoney = require("./InputMoney");

class App {
  constructor() {
    this.money = 0;
    this.lottoQuantity = 0;
  }

  play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (money) => {
      this.money = new InputMoney(money);

      this.printLottoQuantity(money);
    });
  }

  printLottoQuantity(money) {
    const lottoQuantity = money / 1000;
    Console.print(`${lottoQuantity}개를 구매했습니다.`);

    this.printLotto(lottoQuantity);
  }

  printLotto(lottoQuantity) {
    for (let num = 0; num < lottoQuantity; num++) {
      const MINIMUN_NUMBER = 1;
      const MAXIMUN_NUMBER = 45;
      const NUMBER_LENGTH = 6;
      const randomNumbers = Random.pickUniqueNumbersInRange(
        MINIMUN_NUMBER,
        MAXIMUN_NUMBER,
        NUMBER_LENGTH
      );
      const lottoNumbers = [...randomNumbers].sort((a, b) => a - b);
      Console.print(JSON.stringify(lottoNumbers).replace(/,/g, ", "));
    }
  }
}

module.exports = App;
