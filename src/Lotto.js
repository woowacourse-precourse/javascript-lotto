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
    this.myLottoAndWinNumber();
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

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
