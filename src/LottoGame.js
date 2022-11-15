const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE, PRINT_RESULT, RANK_STRING, profitRateString } = require("./constants");
const LottoMachine = require("./LottoMachine");
const LottoResult = require("./LottoResult");
const { stringToNumberArray } = require("./utils");
const WinningLotto = require("./WinningLotto");

class LottoGame {
  #result;
  #lottoMachine;
  #winningLotto;
  #money;

  constructor() {
    this.#winningLotto = new WinningLotto();
  }

  play() {
    this.inputPurchaseMoney();
  }
  
  inputPurchaseMoney() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_PURCHASE_MONEY,(inputMoney)=>{
      this.#lottoMachine = new LottoMachine(inputMoney);
      this.#money = Number(inputMoney);
      this.showPurchasedLotto();
    });
  }

  showPurchasedLotto() {
    const lottoList = this.#lottoMachine.getLottoList();
    MissionUtils.Console.print(`${lottoList.length}${CONSOLE_MESSAGE.SHOW_PURCHASED_MONEY}`);
    lottoList.forEach((lotto)=>{
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
    this.inputWinningLotto();
  }

  inputWinningLotto() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_WINNING_LOTTO,(winningNumberString)=>{
      const winningLotto = stringToNumberArray(winningNumberString);
      this.#winningLotto.setNumbers(winningLotto);
      this.inputBonusNumber();
    });
  }
  
  inputBonusNumber() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_BONUS_LOTTO,(bonusNumber)=>{
      this.#winningLotto.setBonus(Number(bonusNumber));
      this.showWinningStats();
    });
  }

  showWinningStats() {
    this.#result = new LottoResult(this.#winningLotto.getNumbers(), this.#winningLotto.getBonus(), this.#lottoMachine.getLottoList());
    this.#result.makeResult();
    MissionUtils.Console.print(PRINT_RESULT.TITLE);
    Object.keys(RANK_STRING).forEach((rank) => {
      const ranking = this.#result.getRank();
      MissionUtils.Console.print(`${RANK_STRING[rank]} - ${ranking[rank] ? 1 : 0}개`);
    })
    this.showProfitRate();
  }

  showProfitRate() {
    const profitRate = this.#result.haveProfitRate(this.#money);
    MissionUtils.Console.print(profitRateString(profitRate));
    MissionUtils.Console.close();
  }
}

module.exports = LottoGame;
