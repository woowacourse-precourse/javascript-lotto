const { NUMBER_OF_LOTTO_PURCHASED } = require("./Console");
const Console = require("./Console");
const Lotto = require("./Lotto");
// 구입 금액에 맞는 로또 수를 생성한다. (구입금액 / 1000)
// 위에서 나온 결과를 가지고 1~45 사이에 랜덤한 숫자 6개를 뽑아서 배열로 만들어준다. 오름차순으로 정렬하여 리턴한다.

class App {
  constructor() {
    this.money = null;
    this.winNumbers = [];
    this.bonusNumber = null;
    this.lottos = [];
  }

  printRandomLotto() {
    const LOTTO_COUNT = this.money / 1000;
    Console.printMessage(`\n${LOTTO_COUNT}${NUMBER_OF_LOTTO_PURCHASED}`);
    Lotto.generateRandomLottoNumber(LOTTO_COUNT).map((lotto) => {
      this.lottos.push(lotto);
      Console.printMessage(lotto);
    });
  }

  getUserQuantityOfLotto() {
    Console.askUserInput(Console.ASK_BUY_LOTTO_AMOUNT, (input) => {
      if (/[^0-9]/g.test(input))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      if (Number(input) % 1000 !== 0)
        throw new Error("[ERROR] 1000원 단위의 금액을 입력하세요.");
      if (Number(input) <= 0)
        throw new Error("[ERROR] 구입급액이 0보다 커야 합니다.");

      this.money = input;
      this.printRandomLotto();
    });
  }

  play() {
    this.getUserQuantityOfLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
