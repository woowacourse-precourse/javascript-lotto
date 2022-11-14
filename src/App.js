const { NUMBER_OF_LOTTO_PURCHASED } = require("./Console");
const Console = require("./Console");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.money = null;
    this.winNumber = [];
    this.bonusNumber = null;
    this.lottos = [];
  }

  setResult() {
    const winningArray = this.lottos.map((lotto) => {
      return lotto.rank(this.winNumber, this.bonusNumber);
    });
  }

  setBonusNumber() {
    Console.askUserInput(`\n${Console.ASK_BONUS_NUMBER}`, (input) => {
      if (/[^0-9]/g.test(input))
        throw new Error("[Error] 입력된 형식이 올바르지 않습니다.");
      const BOUNS_NUMBER = Number(input);
      if (BOUNS_NUMBER < 1 || 45 < BOUNS_NUMBER)
        throw new Error(
          "[ERROR] 보너스 번호는 1부터 45사이의 숫자여야 합니다."
        );
      if (this.winNumber.includes(BOUNS_NUMBER))
        throw new Error("[ERROR] 당첨 번호에 포함되어 있는 번호입니다.");
      this.bonusNumber = BOUNS_NUMBER;
      this.setResult();
    });
  }

  setWinNumber() {
    Console.askUserInput(`\n${Console.ASK_WIN_NUMBER}`, (winningNumber) => {
      if (!/^(\d{1,2}[,]){5}\d{1,2}$/.test(winningNumber))
        throw new Error("[ERROR] 입력된 형식이 올바르지 않습니다.");
      const NUMBER = winningNumber.split(",").map((number) => {
        if (number < 1 || 45 < number)
          throw new Error(
            "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
          );

        return Number(number);
      });
      if (new Set(NUMBER).size !== 6)
        throw new Error("[ERROR] 번호는 중복되지 않아야 합니다.");

      this.winNumber = NUMBER;

      this.setBonusNumber();
    });
  }

  printRandomLotto() {
    const LOTTO_COUNT = this.money / 1000;
    Console.printMessage(`\n${LOTTO_COUNT}${NUMBER_OF_LOTTO_PURCHASED}`);
    Lotto.generateRandomLottoNumber(LOTTO_COUNT).map((lotto) => {
      this.lottos.push(new Lotto(lotto));
      Console.printMessage(lotto);
    });

    this.setWinNumber();
  }

  setUserQuantityOfLotto() {
    Console.askUserInput(Console.ASK_BUY_LOTTO_AMOUNT, (input) => {
      if (/[^0-9]/g.test(input))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      const MONEY = input;
      if (Number(MONEY) % 1000 !== 0)
        throw new Error("[ERROR] 1000원 단위의 금액을 입력하세요.");
      if (Number(MONEY) <= 0)
        throw new Error("[ERROR] 구입급액이 0보다 커야 합니다.");

      this.money = MONEY;
      this.printRandomLotto();
    });
  }

  play() {
    this.setUserQuantityOfLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
