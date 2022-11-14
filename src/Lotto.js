const App = require("./App");
const MissionUtils = require("@woowacourse/mission-utils");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const LENGTH = new Set(numbers).size;

    for (let i = 0; i < LENGTH; i++) {
      if (isNaN(numbers[i])) {
        throw new Error("[ERROR] 숫자가 아닙니다!");
      }
      if (numbers[i] <= 0 || numbers[i] > 45) {
        throw new Error("[ERROR] 1 ~ 45 숫자가 아닙니다!");
      }
    }
    if (LENGTH !== 6) {
      throw new Error("[ERROR] 로또 번호는 서로 다른 6개여야 합니다!");
    }
  }

  inputBonusNumbers(boughtLottos) {
    const WORD_TO_PRINT = "\n보너스 번호를 입력해 주세요.\n";
    let bonusNumber;
    MissionUtils.Console.readLine(WORD_TO_PRINT, (number) => {
      bonusNumber = Number(number);
      this.validateBonusNumber(bonusNumber);
      this.winningStatistics(bonusNumber, boughtLottos);
    });
  }

  validateBonusNumber(bonusNumber) {
    for (let i = 0; i < this.#numbers.length; i++) {
      if (this.#numbers[i] === bonusNumber) {
        throw new Error("[ERROR] 로또 번호와 중복된 숫자입니다!");
      }

      if (bonusNumber <= 0 || bonusNumber > 45) {
        throw new Error("[ERROR] 1 ~ 45 숫자가 아닙니다!");
      }

      if (isNaN(bonusNumber)) {
        throw new Error("[ERROR] 숫자가 아닙니다!");
      }
    }
  }

  winningStatistics(bonusNumber, boughtLottos) {
    let totalLottoNumberStatistics = [];
    let totalLottoBonusNumberStatistics = [];
    for (let i = 0; i < boughtLottos.length; i++) {
      totalLottoNumberStatistics.push(
        this.compareBoughtLottoAndWinningNumbers(boughtLottos[i])
      );
      totalLottoBonusNumberStatistics.push(
        this.compareBoughtLottoAndBonusNumber(boughtLottos[i], bonusNumber)
      );
    }
    this.countWinningLotto(
      totalLottoNumberStatistics,
      totalLottoBonusNumberStatistics,
      boughtLottos.length
    );
    return [totalLottoNumberStatistics, totalLottoBonusNumberStatistics];
  }

  countWinningLotto(
    totalLottoNumberStatistics,
    totalLottoBonusNumberStatistics,
    lengthOfBoughtLottos
  ) {
    let numbersOfWinningLotto = Array.from({ length: 8 }, () => 0);
    for (let i = 0; i < totalLottoNumberStatistics.length; i++) {
      if (
        totalLottoNumberStatistics[i] === 5 &&
        totalLottoBonusNumberStatistics[i] === 1
      ) {
        numbersOfWinningLotto[6] += 1;
      } else {
        numbersOfWinningLotto[totalLottoNumberStatistics[i]] += 1;
      }
    }
    this.calculateRateOfReturn(numbersOfWinningLotto, lengthOfBoughtLottos);
    return numbersOfWinningLotto;
  }

  calculateRateOfReturn(numbersOfWinningLotto, lengthOfBoughtLottos) {
    const MONEY_TO_GET_ARRAY = [5000, 500000, 1500000, 30000000, 2000000000];
    let totalWinningMoney = 0;
    let rateOfReturn;

    numbersOfWinningLotto = numbersOfWinningLotto.slice(3, 8);
    for (let i = 0; i < 5; i++) {
      totalWinningMoney += MONEY_TO_GET_ARRAY[i] * numbersOfWinningLotto[i];
    }
    rateOfReturn = (totalWinningMoney / (lengthOfBoughtLottos * 1000)) * 100;
    rateOfReturn = rateOfReturn.toFixed(1);
    this.printWinningStatistics(rateOfReturn, numbersOfWinningLotto);
  }

  printWinningStatistics(rateOfReturn, numbersOfWinningLotto) {
    const LOTTO_WINNING_STATISTICS_TABLE_TO_PRINT =
      this.organizationWordToPrintWinningStatistics();

    const RATE_OF_RETURN_WORD_TO_PRINT = `총 수익률은 ${rateOfReturn}%입니다.`;

    MissionUtils.Console.print("\n당첨 통계\n---");
    for (let i = 0; i < 5; i++) {
      MissionUtils.Console.print(
        `${LOTTO_WINNING_STATISTICS_TABLE_TO_PRINT[i]}${numbersOfWinningLotto[i]}개`
      );
    }
    MissionUtils.Console.print(RATE_OF_RETURN_WORD_TO_PRINT);
    MissionUtils.Console.close();
  }

  organizationWordToPrintWinningStatistics() {
    const LOTTO_WINNING_STATISTICS_TABLE = [
      "3개 일치 (5,000원) - ",
      "4개 일치 (50,000원) - ",
      "5개 일치 (1,500,000원) - ",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - ",
      "6개 일치 (2,000,000,000원) - ",
    ];
    return LOTTO_WINNING_STATISTICS_TABLE;
  }

  compareBoughtLottoAndWinningNumbers(boughtLotto) {
    let countSameLottoNumbers = 0;
    for (let i = 0; i < boughtLotto.length; i++) {
      if (this.#numbers.includes(boughtLotto[i])) {
        countSameLottoNumbers += 1;
      }
    }
    return countSameLottoNumbers;
  }
  compareBoughtLottoAndBonusNumber(boughtLotto, bonusNumber) {
    let isSameWithBonusNumbers = 0;
    for (let i = 0; i < boughtLotto.length; i++) {
      if (boughtLotto[i] === bonusNumber) {
        isSameWithBonusNumbers = 1;
      }
    }
    return isSameWithBonusNumbers;
  }
  // TO DO -
  // 일치 개수 비교 및 통계.
}
module.exports = Lotto;
