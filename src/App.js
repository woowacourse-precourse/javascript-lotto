const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.winningNumber = [];
    this.myLottery = [];
  }

  getPlayerInput() {
    let count;

    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.validate(input);
      count = this.countLotto(parseInt(input));
      this.printMessage(`${count}개를 구매했습니다.`);
      this.buyLotto(count);
      this.getWinningNumbersInput();
    });
  }

  getResult() {}

  buyLotto(count) {
    let lotto;

    for (let index = 0; index < count; index++) {
      lotto = new Lotto(this.getRandomNumber());
      this.myLottery.push(lotto);
    }
  }

  getWinningNumbersInput() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.validateWinningNumbers(input);
      this.getResult();
    });
  }

  printMessage(message) {
    MissionUtils.Console.print(message);
  }

  getRandomNumber() {
    const ret = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    ret.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });

    return ret;
  }

  validate(input) {
    const regExp = /\D/g;

    if (regExp.test(input)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  validateWinningNumbers(input) {
    let splitInput = input.split(",");
    let checkNumber;
    if (splitInput.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (let index = 0; index < splitInput.length; index++) {
      this.validate(splitInput[index]);
      checkNumber = parseInt(splitInput[index]);
      if (checkNumber < 1 || checkNumber > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
      }
      this.winningNumber.push(parseInt(checkNumber));
    }
  }

  countLotto(cost) {
    if (cost % 1000) {
      throw new Error("[ERROR] 1,000원 단위로 입력해야합니다");
    }
    return cost / 1000;
  }

  play() {
    this.getPlayerInput();
  }
}

const app = new App();
app.play();

module.exports = App;
