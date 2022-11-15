const MissionUtils = require("@woowacourse/mission-utils");
const Data = require("./Data");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.myPay = 0;
    this.myLottoNumbers = [];
    this.winNumbers = 0;
    this.bonusNumber = 0;
    this.validate(numbers);
    this.#numbers = numbers;
    this.rewardLotto = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }

  validate(numbers) {
    if (Array.isArray(numbers)) {
      if (numbers.length !== 6) {
        throw new Error(Data.ERROR_MESSAGES.errSixNumber);
      }
      for (let i = 0; i < numbers.length; i++) {
        let validationArray = numbers.splice(i, 1);
        this.checkDuplication(numbers, validationArray, i);
      }
    }
  }
  checkDuplication(numbers, validationArray, index) {
    if (validationArray.includes(numbers[index]))
      throw new Error(Data.ERROR_MESSAGES.errDuplication);
  }
  run() {
    this.inputPay();
    this.lotto();
    this.inputWinNumbers();
    this.inputBonusNumbers();
    this.checkReward();
    this.printMatchResult();
    this.printProfitRate();
  }
  inputPay() {
    MissionUtils.Console.print(`${Data.INPUT_MESSAGES.inputPay}`);
    MissionUtils.Console.readLine("", (answer) => {
      if (answer % 1000 !== 0) throw new Error(Data.ERROR_MESSAGES.inputMoney);
      this.myPay = answer;
    });
  }
  lotto() {
    this.printLottoAmount();
    for (let i = 0; i < this.getLottoAmount(); i++) {
      this.sortLotto(this.pickLottoNumbers());
      this.printLotto(i);
    }
  }

  printLottoAmount() {
    MissionUtils.Console.print(
      `${Data.RESULT_MESSAGES.printLottoAmount(this.lottoCountReturn())}`
    );
  }

  getLottoAmount() {
    return this.myPay / 1000;
  }

  pickLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  sortLotto(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    this.myLottoNumbers.push(numbers);
  }

  printLotto(number) {
    MissionUtils.Console.print(`[${this.myLottoNumbers[number].join(", ")}]`);
  }
  inputWinNumbers() {
    MissionUtils.Console.print(`${Data.INPUT_MESSAGES.inputWinNumbers}`);
    MissionUtils.Console.readLine("", (answer) => {
      this.winNumbers = answer.split(",");
    });
  }
  inputBonusNumber() {
    MissionUtils.Console.print(`${Data.INPUT_MESSAGES.inputBonusNumbers}`);
    MissionUtils.Console.readLine("", (answer) => {
      this.bonusNumber = parseInt(answer);
    });
  }
  checkReward() {
    for (let i = 0; i < this.myLottoNumbers.length; i++) {
      const matchNumber = this.winNumbers.filter((item) =>
        this.myLottoNumbers[i].includes(parseInt(item))
      );
      if (matchNumber.length >= 3) {
        this.selectReward(matchNumber, i);
      }
    }
  }
  selectReward(matchNumber, i) {
    if (matchNumber.length == 3) this.rewardLotto.fifth++;
    if (matchNumber.length == 4) this.rewardLotto.fourth++;
    if (
      matchNumber.length == 5 &&
      this.myLottoNumbers[i].includes(this.bonusNumber) === false
    )
      this.rewardLotto.third++;
    if (
      matchNumber.length == 5 &&
      this.myLottoNumbers[i].includes(this.bonusNumber)
    )
      this.rewardLotto.second++;
    if (matchNumber.length == 6) this.rewardLotto.first++;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
