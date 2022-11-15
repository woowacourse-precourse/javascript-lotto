const { PRIZE, PRIZE_MONEY } = require('./Constants/number');
const { FIRST, SECOND, THIRD, FOURTH, FIFTH, NONEPRIZE } = PRIZE;
const { INPUT_MESSAGE } = require('./Constants/message');
const User = require('./User');
const IO = require('./IOControl');
const Utils = require('./Utils');

class App {
  #inputMoney = 0;
  #prizeList = {
    [FIRST]: 0,
    [SECOND]: 0,
    [THIRD]: 0,
    [FOURTH]: 0,
    [FIFTH]: 0,
  };
  #profit = 0;

  constructor() {
    this.User = new User();
    this.IO = new IO();
  }

  play() {
    this.setInputMoneny();
  }

  /**
   * @desc 돈을 넣음과 동시에 로또를 구매 시작
   */
  setInputMoneny() {
    Utils.asyncLine(INPUT_MESSAGE.MONEY, (inputs) => {
      this.#inputMoney = Utils.isMoney(inputs);
      this.User.buyLottos(this.#inputMoney);
      this.setWinNums();
    });
  }

  /**
   * @desc 당첨 번호를 입력받음
   */
  setWinNums() {
    Utils.asyncLine(INPUT_MESSAGE.WIN_NUMS, (inputs) => {
      let winNums = Utils.isWinNums(inputs);
      this.setBonusNum(winNums);
    });
  }

  /**
   * @param {Number Array} winNums
   * @desc 보너스 번호를 입력받음
   */
  setBonusNum(winNums) {
    Utils.asyncLine(INPUT_MESSAGE.BONUS_NUM, (inputs) => {
      let bonusNum = Utils.isBonus(inputs, winNums);
      this.setLottoResult(winNums, bonusNum);
    });
  }

  /**
   * @param {Number Array} winNums
   * @param {Number} bonusNum
   * @desc 로또 결과를 계산
   */
  setLottoResult(winNums, bonusNum) {
    for (let lotto of this.User.getLottoList()) {
      let prize = lotto.isPrize(winNums, bonusNum);
      if (prize !== NONEPRIZE) {
        this.#prizeList[prize]++;
        this.#profit += PRIZE_MONEY[prize].num;
      }
    }
    this.showLottoStats();
  }

  /**
   * @desc 로또 결과를 출력
   */
  showLottoStats() {
    IO.printState();
    let keys = Object.keys(this.#prizeList).sort((prev, next) => prev - next);
    keys.forEach((key) => {
      let prizeCnt = this.#prizeList[key];
      IO.printPrize(key, prizeCnt);
    });
    this.showProfit();
  }

  /**
   * @desc 수익률을 출력
   */
  showProfit() {
    let profitRate = ((this.#profit / this.#inputMoney) * 100).toFixed(1);
    IO.printProfit(profitRate);
    IO.close();
  }
}

module.exports = App;
