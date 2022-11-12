const MissionUtils = require("@woowacourse/mission-utils");
const { GET_INPUT, GRADE, VALUE_NUMBER } = require("./constants");
const { resultMessage } = require("./view");
const MessageViewer = require("./view");
const viewer = new MessageViewer();

class LottoResultCheck {
  constructor() {
    this.resultArray = new Array(Object.keys(GRADE).length).fill(0);
    this.userMoney = 0;
    this.lottoNumbersArray = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  getWinningNumber() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(GET_INPUT.WINNING_NUMBER, (userInput) => {
        this.winningNumbers = userInput.split(",").map((arrayElement) => parseInt(arrayElement));
        resolve(userInput);
      });
    });
  }

  getBonusNumber() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine(GET_INPUT.BONUS_NUMBER, (userInput) => {
        this.bonusNumber = userInput;
        resolve(userInput);
      });
    });
  }

  winningCheck(lottonumbers) {
    const COUNT_OF_CORRECT_NUMBERS = lottonumbers.filter((number) => this.winningNumbers.includes(number)).length;
    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_FIFTH_PRIZE)
      return this.lottoRankingsCount(GRADE.FIFTH_GRADE);
    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_FOURTH_PRIZE)
      return this.lottoRankingsCount(GRADE.FOURTH_GRADE);
    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_THIRD_PRIZE)
      return this.lottoRankingsCount(GRADE.THIRD_GRADE);
    if (
      COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_SECOND_PRIZE &&
      lottonumbers.includes(this.bonusNumber)
    )
      return this.lottoRankingsCount(GRADE.SECOND_GRADE);
    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_FIRST_PRIZE)
      return this.lottoRankingsCount(GRADE.FIRST_GRADE);
  }

  lottoRankingsCount(ranking) {
    if (ranking === GRADE.FIRST_GRADE) this.resultArray[GRADE.FIRST_GRADE - 1]++;
    if (ranking === GRADE.SECOND_GRADE) this.resultArray[GRADE.SECOND_GRADE - 1]++;
    if (ranking === GRADE.THIRD_GRADE) this.resultArray[GRADE.THIRD_GRADE - 1]++;
    if (ranking === GRADE.FOURTH_GRADE) this.resultArray[GRADE.FOURTH_GRADE - 1]++;
    if (ranking === GRADE.FIFTH_GRADE) this.resultArray[GRADE.FIFTH_GRADE - 1]++;
  }

  getTotalWinningMoney() {
    const PRIZE_LIST = [
      VALUE_NUMBER.FIRST_PRIZE,
      VALUE_NUMBER.SECOND_PRIZE,
      VALUE_NUMBER.THIRD_PRIZE,
      VALUE_NUMBER.FOURTH_PRIZE,
      VALUE_NUMBER.FIFTH_PRIZE,
    ];
    const INITIAL_VALUE = 0;
    const TOTAL_WINNING_MONEY = this.resultArray.reduce(
      (accumulator, currentValue, currentIndex) => accumulator + currentValue * PRIZE_LIST[currentIndex],
      INITIAL_VALUE
    );
    this.getEarningsRate(TOTAL_WINNING_MONEY);
  }

  getEarningsRate(totalWinningMoney) {
    //%로 맞추기 위한 100도 상수화 해야하나?
    const earningsRate = ((totalWinningMoney / this.userMoney) * 100).toFixed(2);
    viewer.resultMessage(this.resultArray, earningsRate);
  }
}

const LOTTORESULTCHECK = new LottoResultCheck();
module.exports = LOTTORESULTCHECK;
