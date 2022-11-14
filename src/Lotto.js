const MissionUtils = require("@woowacourse/mission-utils");
const Constant = require("./Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.myLotto = [];
    this.useMoney = 0;
    this.winNumber = 0;
    this.bonusNumber = 0;
    this.validate(numbers);
    this.#numbers = numbers;
    this.winLotto = {
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
        throw new Error(Constant.ERROR_MESSAGES.sixLength);
      }
      for (let i = 0; i < numbers.length; i++) {
        let validationArray = numbers.splice(i, 1);
        this.overlap(numbers, validationArray, i);
      }
    }
  }

  overlap(numbers, validationArray, index) {
    if (validationArray.includes(numbers[index]))
      throw new Error(Constant.ERROR_MESSAGES.overlapNumber);
  }

  process() {
    this.inputMoney();
    this.lotto();
    this.inputWinNumber();
    this.inputBonusNumber();
    this.myLottoAndWinNumber();
    this.lottoResultPrint();
    this.rateOfReturnPrint();
  }

  inputMoney() {
    MissionUtils.Console.print(`${Constant.INPUT_MESSAGES.money}`);
    MissionUtils.Console.readLine("", (answer) => {
      if (answer % 1000 !== 0) throw new Error(Constant.ERROR_MESSAGES.money);
      this.useMoney = answer;
    });
  }

  lotto() {
    this.lottoCountPrint();
    for (let i = 0; i < this.lottoCountReturn(); i++) {
      this.lottoSort(this.lottoNumber());
      this.lottoPrint(i);
    }
  }

  lottoCountPrint() {
    MissionUtils.Console.print(
      `${Constant.MESSAGES_SNIPPETS.lottoCountPrint(this.lottoCountReturn())}`
    );
  }

  lottoCountReturn() {
    return this.useMoney / 1000;
  }

  lottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  lottoSort(numbers) {
    numbers.sort((a, b) => {
      return a - b;
    });
    this.myLotto.push(numbers);
  }

  lottoPrint(number) {
    MissionUtils.Console.print(`[${this.myLotto[number].join(", ")}]`);
  }

  inputWinNumber() {
    MissionUtils.Console.print(`${Constant.INPUT_MESSAGES.winNumberPrint}`);
    MissionUtils.Console.readLine("", (answer) => {
      this.winNumber = answer.split(",");
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.print(`${Constant.INPUT_MESSAGES.bonusNumberPrint}`);
    MissionUtils.Console.readLine("", (answer) => {
      this.bonusNumber = parseInt(answer);
    });
  }

  myLottoAndWinNumber() {
    for (let i = 0; i < this.myLotto.length; i++) {
      const matchNumber = this.winNumber.filter((item) =>
        this.myLotto[i].includes(parseInt(item))
      );
      if (matchNumber.length >= 3) {
        this.winLottoCountIf(matchNumber, i);
      }
    }
  }

  winLottoCountIf(matchNumber, i) {
    if (matchNumber.length == 3) this.winLotto.fifth++;
    if (matchNumber.length == 4) this.winLotto.fourth++;
    if (
      matchNumber.length == 5 &&
      this.myLotto[i].includes(this.bonusNumber) === false
    )
      this.winLotto.third++;
    if (matchNumber.length == 5 && this.myLotto[i].includes(this.bonusNumber))
      this.winLotto.second++;
    if (matchNumber.length == 6) this.winLotto.first++;
  }

  lottoResultPrint() {
    MissionUtils.Console.print(Constant.MESSAGES_SNIPPETS.winnig);
    MissionUtils.Console.print(
      `${Constant.MESSAGES_SNIPPETS.threeMatch(this.winLotto.fifth)}`
    );
    MissionUtils.Console.print(
      `${Constant.MESSAGES_SNIPPETS.fourMatch(this.winLotto.fourth)}`
    );
    MissionUtils.Console.print(
      `${Constant.MESSAGES_SNIPPETS.fiveMatch(this.winLotto.third)}`
    );
    MissionUtils.Console.print(
      `${Constant.MESSAGES_SNIPPETS.fiveBonusMatch(this.winLotto.second)}`
    );
    MissionUtils.Console.print(
      `${Constant.MESSAGES_SNIPPETS.sixMatch(this.winLotto.first)}`
    );
  }

  rateOfReturnPrint() {
    const rateOfReturn =
      this.winLotto.first * Constant.NUMBER.first +
      this.winLotto.second * Constant.NUMBER.second +
      this.winLotto.third * Constant.NUMBER.third +
      this.winLotto.fourth * Constant.NUMBER.fourth +
      this.winLotto.fifth * Constant.NUMBER.fifth;
    MissionUtils.Console.print(
      `${Constant.MESSAGES_SNIPPETS.rateOfReturn(
        ((rateOfReturn / this.useMoney) * 100).toFixed(1)
      )}`
    );
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;
