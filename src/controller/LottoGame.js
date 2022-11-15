const MissionUtils = require("@woowacourse/mission-utils");
const { CONSOLE_MESSAGE, PRINT_RESULT, RANK_STRING, profitRateString } = require("../constants");
const LottoResult = require("./LottoResult");
const PurchasedLotto = require("../PurchasedLotto");
const { stringToNumberArray } = require("../utils");
const WinningLotto = require("../WinningLotto");

class LottoGame {
  #purchasedLotto;
  #winningLotto;
  #lottoResult;
  #money;

  constructor() {
    this.#winningLotto = new WinningLotto();
  }

  play() {
    this.inputPurchaseMoney();
  }
  
  inputPurchaseMoney() {
    MissionUtils.Console.readLine(CONSOLE_MESSAGE.INPUT_PURCHASE_MONEY,(inputMoney)=>{
      this.#purchasedLotto = new PurchasedLotto(Number(inputMoney));
      this.#money = Number(inputMoney);
      this.showPurchasedLotto();
    });
  }

  showPurchasedLotto() {
    const lottoList = this.#purchasedLotto.getLottoList();
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
    this.#lottoResult = new LottoResult(this.#winningLotto.getNumbers(), this.#winningLotto.getBonus(), this.#purchasedLotto.getLottoList());
    const rankInfo = this.#lottoResult.makeResult();
    MissionUtils.Console.print(PRINT_RESULT.TITLE);
    Object.keys(RANK_STRING).forEach((rank) => {
      MissionUtils.Console.print(`${RANK_STRING[rank]} - ${rankInfo[rank] ? 1 : 0}개`);
    })
    this.showProfitRate();
  }

  showProfitRate() {
    const profitRate = this.#lottoResult.haveProfitRate(this.#money);
    MissionUtils.Console.print(profitRateString(profitRate));
    MissionUtils.Console.close();
  }
}

module.exports = LottoGame;
