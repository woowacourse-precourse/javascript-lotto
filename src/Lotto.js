const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.messages = {
      inputMoney: "구입금액을 입력해 주세요.",
      inputWinNumberPrint: "당첨 번호를 입력해 주세요.",
      inputBonusNumberPrint: "보너스 번호를 입력해 주세요.",
    };
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
        throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
      }
      for (let i = 0; i < numbers.length; i++) {
        let validationArray = numbers.splice(i, 1);
        if (validationArray.includes(numbers[i]))
          throw new Error("[ERROR] 중복된 로또 번호가 있습니다.");
      }
    }
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
    MissionUtils.Console.print(`${this.messages.inputMoney}`);
    MissionUtils.Console.readLine("", (answer) => {
      if (answer % 1000 !== 0)
        throw new Error("[ERROR] 1,000원 단위로 입력 바랍니다.");
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
    MissionUtils.Console.print(`${this.lottoCountReturn()}개를 구매했습니다.`);
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
    MissionUtils.Console.print(`${this.messages.inputWinNumberPrint}`);
    MissionUtils.Console.readLine("", (answer) => {
      this.winNumber = answer.split(",");
    });
  }

  inputBonusNumber() {
    MissionUtils.Console.print(`${this.messages.inputBonusNumberPrint}`);
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
    MissionUtils.Console.print("당첨통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.winLotto.fifth}개`);
    MissionUtils.Console.print(
      `4개 일치 (50,000원) - ${this.winLotto.fourth}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (1,500,000원) - ${this.winLotto.third}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winLotto.second}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${this.winLotto.first}개`
    );
  }

  rateOfReturnPrint() {
    const rateOfReturn =
      this.winLotto.first * 2000000000 +
      this.winLotto.second * 30000000 +
      this.winLotto.third * 1500000 +
      this.winLotto.fourth * 50000 +
      this.winLotto.fifth * 5000;
    MissionUtils.Console.print(
      `총 수익률은 ${((rateOfReturn / this.useMoney) * 100).toFixed(1)}%입니다.`
    );
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;
