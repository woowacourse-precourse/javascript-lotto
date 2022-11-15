const { GRADE, VALUE_NUMBER } = require("../utils/constants");

class LottoResultCheck {
  constructor() {
    this.resultArray = new Array(Object.keys(GRADE).length).fill(0);
    this.userMoney;
    this.lottoNumbersArray = [];
    this.winningNumbers;
    this.bonusNumber;
  }

  checkWinning(lottonumbers) {
    const COUNT_OF_MATCHES = lottonumbers.filter((number) => this.winningNumbers.includes(number)).length;

    if (COUNT_OF_MATCHES === VALUE_NUMBER.REQUIRED_MATCHES_1ST_PRIZE) return this.#countLottoRanking(GRADE.FIRST);
    if (COUNT_OF_MATCHES === VALUE_NUMBER.REQUIRED_MATCHES_2ND_PRIZE && lottonumbers.includes(this.bonusNumber))
      return this.#countLottoRanking(GRADE.SECOND);
    if (COUNT_OF_MATCHES === VALUE_NUMBER.REQUIRED_MATCHES_3RD_PRIZE) return this.#countLottoRanking(GRADE.THIRD);
    if (COUNT_OF_MATCHES === VALUE_NUMBER.REQUIRED_MATCHES_4TH_PRIZE) return this.#countLottoRanking(GRADE.FOURTH);
    if (COUNT_OF_MATCHES === VALUE_NUMBER.REQUIRED_MATCHES_5TH_PRIZE) return this.#countLottoRanking(GRADE.FIFTH);
  }
  #countLottoRanking(ranking) {
    this.resultArray[ranking - 1]++;
  }

  getEarningsRate() {
    const INITIAL_VALUE = 0;
    const TOTAL_WINNING_MONEY = this.resultArray.reduce(
      (accumulator, currentValue, currentIndex) => accumulator + currentValue * VALUE_NUMBER.PRIZES[currentIndex],
      INITIAL_VALUE
    );
    const earningsRate = ((TOTAL_WINNING_MONEY / this.userMoney) * 100).toFixed(1);

    return earningsRate;
  }
}

const LOTTORESULTCHECK = new LottoResultCheck();
module.exports = LOTTORESULTCHECK;
