const MissionUtils = require("@woowacourse/mission-utils");

const { ERROR, TEXT, MATCHES } = require("./constant");
const Lotto = require("./Lotto");

class LottoGame {
  constructor(lottos) {
    this.lottos = lottos;
  }

  isNumber(number) {
    return !isNaN(number);
  }

  isThousandUnit(number) {
    if (this.isNumber(number)) {
      return !!(number % 1000 === 0);
    }
  }

  validatePurchaseLotto(number) {
    if (!this.isNumber(number)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (!this.isThousandUnit(number)) {
      throw new Error(ERROR.THOUSAND_UNIT);
    }
  }

  validateLottoNumber(number) {
    if (!this.isNumber(number)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (!(number >= 1 && number <= 45)) {
      throw new Error(ERROR.BETWEEN_NUMBER);
    }
  }

  printTheNumberOfLotto(lottos, payment) {
    lottos.setTheNumberOfLotto(payment / 1000);
    MissionUtils.Console.print(
      `${lottos.getTheNumberOfLotto()}${TEXT.PURCHASE}`
    );
  }

  createLotto(lottos) {
    lottos.setLottos();
    lottos.getLottos().forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });
  }

  compareNumber(lottos, lottoNumbers, bonusNumber) {
    lottoNumbers.forEach((number) => {
      lottos.getLottos().forEach((lotto, index) => {
        lotto.getNumbers().includes(number) && lottos.matchingNumber[index]++;
      });
    });

    lottos.matchingNumber.forEach((number, index) => {
      if (number === 5) {
        if (lottos.lottos[index].numbers.includes(Number(bonusNumber))) {
          lottos.matchingNumber[index] = "5+1";
        }
      }
    });
  }

  printWinningResult(result) {
    MissionUtils.Console.print(`${MATCHES.THREE.TEXT} - ${result[3] || 0}개`);
    MissionUtils.Console.print(`${MATCHES.FOUR.TEXT} - ${result[4] || 0}개`);
    MissionUtils.Console.print(`${MATCHES.FIVE.TEXT} - ${result[5] || 0}개`);
    MissionUtils.Console.print(
      `${MATCHES.FIVE_WITH_BONUS.TEXT} - ${result["5+1"] || 0}개`
    );
    MissionUtils.Console.print(`${MATCHES.SIX.TEXT} - ${result[6] || 0}개`);
  }

  printProfitRate(payment, result) {
    const profit =
      (result[3] || 0) * MATCHES.THREE.PRICE +
      (result[4] || 0) * MATCHES.FOUR.PRICE +
      (result[5] || 0) * MATCHES.FIVE.PRICE +
      (result["5+1"] || 0) * MATCHES.FIVE_WITH_BONUS.PRICE +
      (result[6] || 0) * MATCHES.SIX.PRICE;
    const profitRate = (profit * 100) / payment;

    MissionUtils.Console.print(`총 수익률은 ${profitRate.toFixed(1)}%입니다.`);
  }

  printResult(lottos, payment) {
    const result = {};
    lottos.matchingNumber.forEach((x) => {
      result[x] = (result[x] || 0) + 1;
    });

    this.printWinningResult(result);
    this.printProfitRate(payment, result);

    MissionUtils.Console.close();
  }

  winLotto(lottos, numbers, bonusNumber) {
    const winningLotto = new Lotto(numbers.split(",").map(Number), bonusNumber);
    const winningNumbers = winningLotto.getNumbers();
    const winningBonusNumber = winningLotto.getBonusNumber();

    lottos.setMatchingNumber();

    this.compareNumber(lottos, winningNumbers, winningBonusNumber);
  }

  purchaseLotto(lottos, payment) {
    this.validatePurchaseLotto(payment);
    this.printTheNumberOfLotto(lottos, payment);
    this.createLotto(lottos);
  }

  startGame(lottos, payment) {
    MissionUtils.Console.readLine(TEXT.WINNING_NUMBER, (numbers) => {
      numbers.split(",").forEach((number) => this.validateLottoNumber(number));

      MissionUtils.Console.readLine(TEXT.BONUS_NUMBER, (bonusNumber) => {
        this.validateLottoNumber(bonusNumber);
        this.winLotto(lottos, numbers, bonusNumber);
        this.printResult(lottos, payment);
      });
    });
  }

  game() {
    const lottos = this.lottos;

    MissionUtils.Console.readLine(TEXT.PAYMENT, (payment) => {
      this.purchaseLotto(lottos, payment);
      this.startGame(lottos, payment);
    });
  }
}

module.exports = LottoGame;
