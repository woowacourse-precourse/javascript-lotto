const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const {
  MESSAGE_INPUT_WINNING_NUMBERS,
  MESSAGE_INPUT_BONUS_NUMBER,
} = require("./constants");
const Lotto = require("./Lotto");

class Result {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = null;
    this.lotto = null;
    this.resultStatics = [0, 0, 0, 0, 0, 0, 0];
  }

  setWinningNumbers(userLottoesNumbers) {
    Console.readLine(MESSAGE_INPUT_WINNING_NUMBERS, (winningNumbers) => {
      let numbersArray = winningNumbers.split(",").map(Number);
      console.log(numbersArray);
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

  winStatisticsOutput(userLottoes){
    userLottoes.map((userLotto) => {
      let userLottoNumbers = userLotto.getNumbers();
      let compareResult = this.numberComparison(userLottoNumbers);
      console.log(compareResult)
    })
  }

  numberComparison(userLottoNumbers){
    let bonus = false;
    let winningNums = userLottoNumbers.reduce((winningNums, number) => {
      if(this.winningNumbers.includes(number)){
        winningNums.push(number);
      } else if(this.bonusNumber === number){
        bonus = true;
      } return winningNums;
    }, []);
    return [winningNums.length, bonus];
  }
}

module.exports = Result;
