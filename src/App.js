const { LottoBuilder } = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const { amountValidation } = require('./validation/amountValidation');
const { winningValidation } = require('./validation/winningValidation');
const { bonusValidation } = require('./validation/bonusValidation');
const { INPUT_TEXT, STATS_TEXT, RANK } = require('./constant/constant');
class App {
  constructor() {
    this.LottoBuilder = new LottoBuilder();
  }

  play() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print(INPUT_TEXT.PURCHASE_AMOUNT);
    this.readLine('', (input) => {
      if (amountValidation(input)) {
        const lottoList = this.LottoBuilder.creatLottoList(input);
        this.showLottoList(lottoList);
        this.setWinningNumber();
      }
    });
  }

  setWinningNumber() {
    this.print(INPUT_TEXT.WINNING_NUMBER);
    this.readLine('', (input) => {
      if (winningValidation(input)) {
        this.LottoBuilder.WinningNumber = input.split(',');
        this.setBonusNumber();
      }
    });
  }

  setBonusNumber() {
    this.print(INPUT_TEXT.BONUS_NUMBER);
    this.readLine('', (input) => {
      if (bonusValidation(input, this.LottoBuilder.WinningNumber)) {
        this.LottoBuilder.bonusNumber = input;
        this.setLotto();
        this.finish();
      }
    });
  }

  setLotto() {
    const lotto = this.LottoBuilder.build();
    lotto.progress();
    this.setOutputStats(lotto.stats, lotto.yield);
  }

  setOutputStats(lottoRanks, lottoYield) {
    this.print(STATS_TEXT.WINNING_STATS);
    this.print(STATS_TEXT.HORIZONTAL_LINE);
    this.showRankList(lottoRanks);
    this.showYield(lottoYield);
  }

  showLottoList(lists) {
    this.print(`${lists.length}${INPUT_TEXT.BOUGHT}`);
    lists.forEach((list) => {
      this.print(`[${list.join(', ')}]`);
    });
  }

  showRankList(lottoRanks) {
    this.print(`${STATS_TEXT.MATCH_THREE}${lottoRanks[RANK.FIVE]}개`);
    this.print(`${STATS_TEXT.MATCH_FOUR}${lottoRanks[RANK.FOUR]}개`);
    this.print(`${STATS_TEXT.MATCH_FIVE}${lottoRanks[RANK.THREE]}개`);
    this.print(`${STATS_TEXT.MATCH_FIVE_BONUS}${lottoRanks[RANK.TWO]}개`);
    this.print(`${STATS_TEXT.MATCH_SIX}${lottoRanks[RANK.ONE]}개`);
  }

  showYield(lottoYield) {
    this.print(`${STATS_TEXT.YIELD}${lottoYield}${STATS_TEXT.YIELD_ENDING}`);
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  print(message) {
    return MissionUtils.Console.print(message);
  }

  finish() {
    return MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
