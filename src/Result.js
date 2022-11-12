const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
const {
  MESSAGE_INPUT_WINNING_NUMBERS,
  MESSAGE_INPUT_BONUS_NUMBER,
  FIRST_PRIZE,
  SECOND_BONUS_PRIZE,
  SECOND_PRIZE,
  THIRD_PRIZE,
  FOURTH_PRIZE,
  MESSAGE_OUTPUT_WINNING_STATISTICS,
  UNIT,
} = require("./Constants");
const Lotto = require("./Lotto");

class Result {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lotto = null;
    this.resultStatics = [0, 0, 0, 0, 0];
    this.prizes = [
      FOURTH_PRIZE,
      THIRD_PRIZE,
      SECOND_PRIZE,
      FIRST_PRIZE,
      SECOND_BONUS_PRIZE,
    ];
    this.userProfit = 0;
  }

  setWinningNumbers(userLottoesNumbers) {
    Console.readLine(MESSAGE_INPUT_WINNING_NUMBERS, (winningNumbers) => {
      let numbersArray = winningNumbers.split(",").map(Number);
      this.lotto = new Lotto(numbersArray);
      this.winningNumbers = numbersArray;
      this.setBonusNumber(winningNumbers, userLottoesNumbers);
    });
  }

  setBonusNumber(winningNumbers, userLottoesNumbers) {
    Console.readLine(MESSAGE_INPUT_BONUS_NUMBER, (bonusNumber) => {
      this.lotto.bonusValidate(winningNumbers, bonusNumber);
      this.bonusNumber = bonusNumber;
      this.winStatisticsOutput(userLottoesNumbers);
    });
  }

  winStatisticsOutput(userLottoes) {
    userLottoes.map((userLotto) => {
      let userLottoNumbers = userLotto.getNumbers();
      let compareResult = this.numberComparison(userLottoNumbers);
      this.setWinLottoes(compareResult);
    });
    this.showResult(userLottoes.length);
  }

  numberComparison(userLottoNumbers) {
    let bonus = false;
    let winningNums = userLottoNumbers.reduce((winningNums, number) => {
      if (this.winningNumbers.includes(number)) {
        winningNums.push(number);
      } else if (parseInt(this.bonusNumber) === number) {
        bonus = true;
      }
      return winningNums;
    }, []);
    return [winningNums.length, bonus];
  }

  setWinLottoes(compareResult) {
    let [winCount, bonus] = compareResult;
    if (winCount < 3) return;
    if (winCount === 5 && bonus) {
      return (this.resultStatics[4] += 1);
    }
    return (this.resultStatics[winCount - 3] += 1);
  }

  showResult(userLottoCount) {
    this.yieldCalculation(userLottoCount);
    this.matchingResult();
    this.profitResult();
    Console.close();
  }

  yieldCalculation(userLottoCount) {
    let totalAmount = this.profitCalculation();
    let spending = userLottoCount * UNIT;
    let profit = totalAmount;
    let result = profit / spending;
    this.userProfit = Math.round(result * 1000) / 10;
  }

  matchingResult() {
    Console.print(MESSAGE_OUTPUT_WINNING_STATISTICS);
    this.resultStatics.map((number, index) => {
      if (index === 4) return;
      if (index === 3) {
        Console.print(this.resultTemplate(true, index + 1, number));
        Console.print(this.resultTemplate(false, index, number));
        return;
      }
      Console.print(this.resultTemplate(false, index, number));
    });
  }

  resultTemplate(bonus, index, number) {
    const PRIZE = this.prizes[index]
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    const NOT_BONUS = `${index + 3}개 일치 (${PRIZE})원 - ${number}개`;
    const BONUS = `${
      index + 2
    }개 일치, 보너스볼 일치 (${PRIZE})원 - ${number}개`;
    return bonus ? BONUS : NOT_BONUS;
  }

  profitResult() {
    Console.print(`총 수익률은 ${this.userProfit}%입니다.`);
  }

  profitCalculation() {
    return this.resultStatics.reduce((amount, prize, index) => {
      return (amount += prize * this.prizes[index]);
    }, 0);
  }
}

module.exports = Result;
