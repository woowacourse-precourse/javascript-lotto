const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

class App {
  static LENGTH_OF_LOTTO_NUMBER = 6;
  static PRIZE = [5000, 50000, 1500000, 30000000, 2000000000];

  play() {
    Console.readLine("구입금액을 입력해주세요.", (value) => {
      const isValidate = this.isValidate(value);

      if (isValidate.state === "exception") {
        Console.print(isValidate.reason);
        this.play();
        return;
      }

      const amountOfPaid = this.makePayment(value);
      const lottos = this.issueLotto(amountOfPaid / 1000);
      this.getWinner(lottos, amountOfPaid);
    });
  }

  isValidate(value) {
    if (Number.isNaN(value) || value.match(/\D+/)) {
      throw new TypeError("[ERROR] 올바른 숫자값을 입력해주세요.");
    }

    if (value % 1000 !== 0) {
      return {
        state: "exception",
        reason: "1000원 단위로 입력해주세요.",
      };
    }

    return { state: "success" };
  }

  makePayment(value) {
    const money = value;

    const numberOfLotto = money / 1000;

    Console.print(`${numberOfLotto}개를 구매했습니다.`);

    return money;
  }

  issueLotto(numberOfLotto) {
    const lottos = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const lottoNumbers = this.generateLottoNumber();
      lottos.push(new Lotto(lottoNumbers));
    }

    this.printLottos(lottos);

    return lottos;
  }

  generateLottoNumber() {
    const numbers = Random.pickUniqueNumbersInRange(
      1,
      45,
      App.LENGTH_OF_LOTTO_NUMBER
    );

    const isAscending = numbers.every(
      (value, index, array) => !index || array[index - 1] <= value
    );

    if (isAscending) return numbers;

    return numbers.sort((a, b) => a - b);
  }

  printLottos(lottos) {
    for (let i = 0; i < lottos.length; i++) {
      lottos[i].printNumbers();
    }
  }

  getWinner(lottos, amountOfPaid) {
    Console.readLine("당첨번호를 입력해주세요.", (value) => {
      const result = this.getWinnerNumber(value, lottos, amountOfPaid);
      if (result.state === "exception") {
        Console.print(result.reason);
        this.getWinner(lottos, amountOfPaid);
        return;
      }
    });
  }

  getWinnerNumber(value, lottos, amountOfPaid) {
    const winnerNumber = value.split(",").map((string) => parseInt(string, 10));

    if (winnerNumber.length !== App.LENGTH_OF_LOTTO_NUMBER) {
      return {
        state: "exception",
        reason: "6개의 번호를 입력해주세요",
      };
    }

    Console.readLine("보너스 번호를 입력해주세요.", (value) => {
      const bonusNumber = parseInt(value, 10);
      this.getBonusNumber(bonusNumber, winnerNumber, lottos, amountOfPaid);
    });

    return { state: "success" };
  }

  getBonusNumber(bonusNumber, winnerNumber, lottos, amountOfPaid) {
    const winningDetails = this.getWinningDetails(
      lottos,
      winnerNumber,
      bonusNumber,
      amountOfPaid
    );
    this.showFinalResult(winningDetails, amountOfPaid);
    this.afterEnded();
  }

  getWinningDetails(lottos, winnerNumber, bonusNumber) {
    const winningDetails = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveMatchesWithBonus: 0,
      sixMatches: 0,
    };

    for (let i = 0; i < lottos.length; i++) {
      const result = lottos[i].getComparisonResult(winnerNumber, bonusNumber);
      this.switchComparisonResult(result, winningDetails);
    }

    return winningDetails;
  }

  switchComparisonResult(comparisonResult, winningDetails) {
    if (comparisonResult.winnerCount === 3) winningDetails.threeMatches += 1;
    if (comparisonResult.winnerCount === 4) winningDetails.fourMatches += 1;
    if (comparisonResult.winnerCount === 5) winningDetails.fiveMatches += 1;
    if (comparisonResult.winnerCount === 5 && comparisonResult.bonusFlag) {
      winningDetails.fiveMatches = 0;
      winningDetails.fiveMatchesWithBonus += 1;
    }

    if (comparisonResult.winnerCount === 6) winningDetails.sixMatches += 1;
  }

  showFinalResult(winningDetails, amountOfPaid) {
    this.showWinningDetails(winningDetails);
    this.showEarningsRate(winningDetails, amountOfPaid);
  }

  showWinningDetails({
    threeMatches,
    fourMatches,
    fiveMatches,
    fiveMatchesWithBonus,
    sixMatches,
  }) {
    Console.print("당첨통계\n");
    Console.print("---\n");
    Console.print(`3개 일치 (5,000원) - ${threeMatches}개\n`);
    Console.print(`4개 일치 (50,000원) - ${fourMatches}개\n`);
    Console.print(`5개 일치 (1,500,000원) - ${fiveMatches}개\n`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveMatchesWithBonus}개\n`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${sixMatches}개\n`);
  }

  showEarningsRate(winningDetails, amountOfPaid) {
    const earningsRate = this.caculateEarningsRate(
      winningDetails,
      amountOfPaid
    );

    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
  }

  afterEnded() {
    Console.close();
    return;
  }

  caculateEarningsRate(winningDetails, amountOfPaid) {
    const totalEarnings = Object.values(winningDetails) //
      .reduce((pre, cur, i) => {
        return pre + cur * App.PRIZE[i];
      }, 0);

    const earningsRate = ((totalEarnings / amountOfPaid) * 100).toFixed(1);

    return earningsRate;
  }
}

new App().play();

module.exports = App;
