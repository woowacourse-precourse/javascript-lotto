const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.messages = {
      inputMoney: "구입금액을 입력해 주세요.",
      inputWinNumber: "당첨 번호를 입력해 주세요.",
      inputBonusNumber: "보너스 번호를 입력해 주세요.",
    };
    this.myLotto = [];
    this.useMoney = 0;
    this.winNumber = 0;
    this.bonusNumber = 0;
    this.validate(numbers);
    this.#numbers = numbers;
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
    this.inputNumberAndBonusNumber();
    this.lottoResult();
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

  inputNumberAndBonusNumber() {
    MissionUtils.Console.print(`${this.messages.inputWinNumber}`);
    MissionUtils.Console.readLine("", (answer) => {
      this.winNumber = answer.split(",");
    });
    MissionUtils.Console.print(`${this.messages.inputBonusNumber}`);
    MissionUtils.Console.readLine("", (answer) => {
      this.bonusNumber = parseInt(answer);
    });
  }

  lottoResult() {
    this.myLottoAndWinNumber();
  }

  myLottoAndWinNumber() {
    for (let i = 0; i < this.myLotto.length; i++) {
      const matchNumber = this.winNumber.filter((item) =>
        this.myLotto[i].includes(parseInt(item))
      );
      if (matchNumber.length >= 3) this.winLottoCount(matchNumber, i);
    }
  }

  winLottoCount(matchNumber, i) {
    let winLotto = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    this.winLottoCountIf(matchNumber, i, winLotto);
    this.lottoResultPrint(winLotto);
    this.rateOfReturnPrint(winLotto);
  }

  winLottoCountIf(matchNumber, i, winLotto) {
    if (matchNumber.length == 3) winLotto.fifth++;
    if (matchNumber.length == 4) winLotto.fourth++;
    if (
      matchNumber.length == 5 &&
      this.myLotto[i].includes(this.bonusNumber) === false
    )
      winLotto.third++;
    if (matchNumber.length == 5 && myLotto[i].includes(this.bonusNumber))
      winLotto.second++;
    if (matchNumber.length == 6) winLotto.first++;
  }

  lottoResultPrint(winLotto) {
    MissionUtils.Console.print("당첨통계\n---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winLotto.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winLotto.fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winLotto.third}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winLotto.second}개`
    );
    MissionUtils.Console.print(
      `6개 일치 (2,000,000,000원) - ${winLotto.first}개`
    );
  }

  rateOfReturnPrint(winLotto) {
    const rateOfReturn =
      winLotto.first * 2000000000 +
      winLotto.second * 30000000 +
      winLotto.third * 1500000 +
      winLotto.fourth * 50000 +
      winLotto.fifth * 5000;
    MissionUtils.Console.print(
      `총 수익률은 ${((rateOfReturn / this.useMoney) * 100).toFixed(1)}%입니다.`
    );
    MissionUtils.Console.close();
  }
}

module.exports = Lotto;
