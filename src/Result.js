const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const {
  MESSAGE_INPUT_WINNING_NUMBERS,
  MESSAGE_INPUT_BONUS_NUMBER,
  MESSAGE_OUTPUT_WINNING_STATISTICS,
  FIRST_PRIZE,
  SECOND_BONUS_PRIZE,
  SECOND_PRIZE,
  THIRD_PRIZE,
  FOURTH_PRIZE,
} = require("./constants");
const Lotto = require("./Lotto");

class Result {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lotto = null;
    this.resultStatics = [0, 0, 0, 0, 0];
    this.prices = [
      FOURTH_PRIZE,
      THIRD_PRIZE,
      SECOND_PRIZE,
      FIRST_PRIZE,
      SECOND_BONUS_PRIZE,
    ];
    this.totalPrice = 0;
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
    this.showResult();
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

  showResult() {
    this.resultStatics.map((number, index) => {
      if (index === 4) return;
      if (index === 3) {
        Console.print(
          `${index + 2}개 일치, 보너스볼 일치 (${
            this.prices[index + 1]
          })원 - ${number}개`
        );
        Console.print(this.resultTemplate(index, number));
        return;
      }
      Console.print(this.resultTemplate(index, number));
    });
  }

  resultTemplate(index, number) {
    return `${index + 3}개 일치 (${this.prices[index]})원 - ${number}개`;
  }
}

module.exports = Result;
