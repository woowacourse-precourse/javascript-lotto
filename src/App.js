const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const { LOTTO_MESSAGE, LOTTO_SETTING } = require("./constant.js");

class App {
  lottoNumArr;
  winNum;
  bonusNum;
  order = 0;

  play() {
    MissionUtils.Console.readLine(
      LOTTO_MESSAGE.PLAYER_INPUT_MSG[this.order],
      (playerInput) => {
        if (this.order === LOTTO_SETTING.PLAYER_TOTAL_ORDER) {
          return;
        }
        if (this.order === LOTTO_SETTING.INPUT_MONEY_ORDER) {
          const money = playerInput;
          this.buyLotto(money);
        }
        if (this.order === LOTTO_SETTING.INPUT_WIN_NUM_ORDER) {
          const winNums = playerInput;
          this.inputWinNum(winNums);
        }
        if (this.order === LOTTO_SETTING.INPUT_BONUS_NUM_ORDER) {
          const bonusNum = playerInput;
          this.inputBonusNum(bonusNum);
        }
        this.order++;
        this.play();
      }
    );
  }

  buyLotto(money) {
    Lotto.checkMoney(money);
    this.lottoNumArr = Lotto.genLottoNumArr(money);
    Lotto.printLottoNumArr(this.lottoNumArr);
  }

  inputWinNum(winNums) {
    const numbers = winNums.split(",").map((number) => Number(number));
    const lotto = new Lotto(numbers);
    this.winNum = lotto.numbers;
  }

  inputBonusNum(bonusNum) {
    Lotto.checkBonusNum(bonusNum);
    this.bonusNum = bonusNum;
  }
}

module.exports = App;
