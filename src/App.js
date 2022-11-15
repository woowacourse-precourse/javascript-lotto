const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

const FIRST_PRIZE = 2000000000;
const SECOND_PRIZE = 30000000;
const THIRD_PRIZE = 1500000;
const FOURTH_PRIZE = 50000;
const FIFTH_PRIZE = 5000;

class App {
  constructor() {
    this.winningNumber = [];
    this.myLottery = [];
    this.result = [0, 0, 0, 0, 0, 0];
  }

  getPlayerInput() {
    let count;

    MissionUtils.Console.readLine("구입금액을 입력해 주세요.", (input) => {
      this.validateCost(input);
      count = parseInt(input) / 1000;
      this.printMessage(`${count}개를 구매했습니다.`);
      this.buyLotto(count);
      this.getWinningNumbersInput();
    });
  }

  validateCost(input) {
    this.isNumber(input);
    let cost = parseInt(input);

    if (cost % 1000) {
      throw new Error("[ERROR] 1,000원 단위로 입력해야합니다");
    }
  }

  buyLotto(count) {
    let lotto;

    for (let index = 0; index < count; index++) {
      lotto = new Lotto(this.getRandomNumber());
      this.myLottery.push(lotto);
    }
  }

  getResult(bonusNumber) {
    let lottoResult = 0;

    for (let index = 0; index < this.myLottery.length; index++) {
      lottoResult = this.myLottery[index].isWinLottery(
        this.winningNumber,
        bonusNumber
      );
      this.result[lottoResult]++;
    }
    this.printMessage("당첨 통계\n---");
    this.printPrize();
    this.calcProfit();
  }

  printPrize() {
    this.printMessage(
      `3개 일치 (${FIFTH_PRIZE.toLocaleString()}원) - ${this.result[5]}개\n
      4개 일치 (${FOURTH_PRIZE.toLocaleString()}원) - ${this.result[4]}개\n
      5개 일치 (${THIRD_PRIZE.toLocaleString()}원) - ${this.result[3]}개\n
      5개 일치, 보너스 볼 일치 (${SECOND_PRIZE.toLocaleString()}원) - ${
        this.result[2]
      }개\n
      6개 일치 (${FIRST_PRIZE.toLocaleString()}원) - ${this.result[1]}개`
    );
  }

  calcProfit() {
    let totalPrize =
      this.result[1] * FIRST_PRIZE +
      this.result[2] * SECOND_PRIZE +
      this.result[3] * THIRD_PRIZE +
      this.result[4] * FOURTH_PRIZE +
      this.result[5] * FIFTH_PRIZE;
    let cost = this.myLottery.length * 1000;
    let profit = ((totalPrize / cost) * 100).toFixed(1);

    this.printMessage(`총 수익률은 ${profit}%입니다.`);
  }

  getWinningNumbersInput() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (input) => {
      this.validateWinningNumbers(input);
      this.getBonusNumberInput();
    });
  }

  validateWinningNumbers(input) {
    let splitInput = input.split(",");
    let checkNumber;

    this.validateLength(splitInput, 6);
    for (let index = 0; index < splitInput.length; index++) {
      this.isNumber(splitInput[index]);
      checkNumber = parseInt(splitInput[index]);
      this.validateNumberRange(checkNumber);
      this.winningNumber.push(checkNumber);
    }
  }

  getBonusNumberInput() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (input) => {
      this.validateBonusNumber(input);
      this.getResult(parseInt(input));
    });
  }

  validateBonusNumber(input) {
    this.isNumber(input);
    this.validateNumberRange(parseInt(input));
    this.validateNumberOvelap(parseInt(input));
  }

  validateNumberOvelap(number) {
    if (this.winningNumber.includes(number)) {
      throw new Error("[ERROR] 로또 번호는 중복되어서는 안됩니다.");
    }
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

  isNumber(number) {
    const regExp = /\D/g;

    if (regExp.test(number)) {
      throw new Error("[ERROR] 숫자만 입력할 수 있습니다.");
    }
  }

  validateLength(numbers, length) {
    if (numbers.length !== length) {
      throw new Error(`[ERROR] 로또 번호는 ${length}개여야 합니다.`);
    }
  }

  validateNumberRange(number) {
    if (number < 1 || number > 45) {
      throw new Error("[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.");
    }
  }

  play() {
    this.getPlayerInput();
  }
}

module.exports = App;
