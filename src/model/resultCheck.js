const { GRADE, VALUE_NUMBER } = require("../utils/constants");

class LottoResultCheck {
  constructor() {
    this.resultArray = new Array(Object.keys(GRADE).length).fill(0);
    this.userMoney = 0;
    this.lottoNumbersArray = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  checkWinning(lottonumbers) {
    const COUNT_OF_CORRECT_NUMBERS = lottonumbers.filter((number) => this.winningNumbers.includes(number)).length;

    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_FIFTH_PRIZE)
      return this.countLottoRanking(GRADE.FIFTH);
    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_FOURTH_PRIZE)
      return this.countLottoRanking(GRADE.FOURTH);
    if (
      COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_SECOND_PRIZE &&
      lottonumbers.includes(this.bonusNumber)
    )
      return this.countLottoRanking(GRADE.SECOND);
    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_THIRD_PRIZE)
      return this.countLottoRanking(GRADE.THIRD);
    if (COUNT_OF_CORRECT_NUMBERS === VALUE_NUMBER.NUMBERS_OF_WIN_FIRST_PRIZE)
      return this.countLottoRanking(GRADE.FIRST);
  }

  countLottoRanking(ranking) {
    if (ranking === GRADE.FIRST) this.resultArray[GRADE.FIRST - 1]++;
    if (ranking === GRADE.SECOND) this.resultArray[GRADE.SECOND - 1]++;
    if (ranking === GRADE.THIRD) this.resultArray[GRADE.THIRD - 1]++;
    if (ranking === GRADE.FOURTH) this.resultArray[GRADE.FOURTH - 1]++;
    if (ranking === GRADE.FIFTH) this.resultArray[GRADE.FIFTH - 1]++;
  }

  getEarningsRate() {
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
    //%로 맞추기 위한 100도 상수화 해야하나?
    const earningsRate = ((TOTAL_WINNING_MONEY / this.userMoney) * 100).toFixed(1);
    return earningsRate;
  }
}

const LOTTORESULTCHECK = new LottoResultCheck();
module.exports = LOTTORESULTCHECK;
