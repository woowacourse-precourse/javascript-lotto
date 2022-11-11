const MissionUtils = require("@woowacourse/mission-utils");

class LottoResultCheck {
  constructor() {
    this.resultArray = new Array(5).fill(0);
    this.userMoney = 0;
    this.lottoNumbersArray = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  getWinningNumber() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.", (userInput) => {
        this.winningNumbers = userInput.split(",").map((arrayElement) => parseInt(arrayElement));
        resolve(userInput);
      });
    });
  }

  getBonusNumber() {
    return new Promise((resolve, reject) => {
      MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.", (userInput) => {
        this.bonusNumber = userInput;
        resolve(userInput);
      });
    });
  }

  winningCheck(lottonumbers) {
    //상수화 필요
    const COUNT_OF_CORRECT_NUMBERS = lottonumbers.filter((number) => this.winningNumbers.includes(number)).length;
    if (COUNT_OF_CORRECT_NUMBERS === 3) return this.lottoRankingsCount(5);
    if (COUNT_OF_CORRECT_NUMBERS === 4) return this.lottoRankingsCount(4);
    if (COUNT_OF_CORRECT_NUMBERS === 5) return this.lottoRankingsCount(3);
    if (COUNT_OF_CORRECT_NUMBERS === 5 && lottonumbers.includes(this.bonusNumber)) return this.lottoRankingsCount(2);
    if (COUNT_OF_CORRECT_NUMBERS === 6) return this.lottoRankingsCount(1);
  }

  lottoRankingsCount(ranking) {
    //상수화 필요.
    if (ranking === 1) this.resultArray[0]++;
    if (ranking === 2) this.resultArray[1]++;
    if (ranking === 3) this.resultArray[2]++;
    if (ranking === 4) this.resultArray[3]++;
    if (ranking === 5) this.resultArray[4]++;
  }

  getTotalWinningMoney() {
    const PRIZE_LIST = [2000000000, 30000000, 1500000, 50000, 5000];
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
    MissionUtils.Console.print(earningsRate);
  }
}

const LOTTORESULTCHECK = new LottoResultCheck();
module.exports = LOTTORESULTCHECK;
