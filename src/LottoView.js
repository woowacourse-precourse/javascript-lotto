const LottoList = require('./LottoList');
const { LottoBuilder } = require('./Lotto');
const MissionUtils = require('@woowacourse/mission-utils');
const {
  amountValidation,
  winningValidation,
  bonusValidation,
} = require('./validation/validation');
const { INPUT_TEXT, STATS_TEXT, RANK } = require('./constant/constant');

class LottoView {
  constructor() {
    this.LottoList = new LottoList();
    this.LottoBuilder = new LottoBuilder();
  }

  progress() {
    this.setPurchaseAmount();
  }

  setPurchaseAmount() {
    this.print(INPUT_TEXT.PURCHASE_AMOUNT);
    this.readLine(INPUT_TEXT.EMPTY, (input) => {
      if (amountValidation(input)) {
        const lottoList = this.LottoList.creatLottoList(input);
        this.LottoBuilder.lottoList(lottoList);
        this.showLottoList(lottoList);
        this.setWinningNumber();
      }
    });
  }

  setWinningNumber() {
    this.print(INPUT_TEXT.LINE_BREAK, INPUT_TEXT.WINNING_NUMBER);
    this.readLine(INPUT_TEXT.EMPTY, (input) => {
      if (winningValidation(input)) {
        this.LottoBuilder.winningNumber(input.split(','));
        this.setBonusNumber();
      }
    });
  }

  setBonusNumber() {
    this.print(INPUT_TEXT.LINE_BREAK, INPUT_TEXT.BONUS_NUMBER);
    this.readLine(INPUT_TEXT.EMPTY, (input) => {
      if (bonusValidation(input, this.LottoBuilder.winningNumber)) {
        this.LottoBuilder.bonusNumber(input);

        const lotto = this.setLotto();
        this.showOutputStats(lotto.stats, lotto.yield);
        this.finish();
      }
    });
  }

  setLotto() {
    const lotto = this.LottoBuilder.build();
    lotto.progress();
    return lotto;
  }

  showOutputStats(lottoRanks, lottoYield) {
    this.print(
      INPUT_TEXT.LINE_BREAK,
      STATS_TEXT.WINNING_STATS,
      STATS_TEXT.HORIZONTAL_LINE
    );
    this.showRankList(lottoRanks);
    this.showYield(lottoYield);
  }

  showLottoList(lists) {
    this.print(INPUT_TEXT.LINE_BREAK, INPUT_TEXT.BOUGHT(lists.length));
    lists.forEach((list) => {
      this.print(`[${list.join(', ')}]`);
    });
  }

  showRankList(lottoRanks) {
    this.print(
      STATS_TEXT.MATCH_THREE(lottoRanks[RANK.FIVE]),
      STATS_TEXT.MATCH_FOUR(lottoRanks[RANK.FOUR]),
      STATS_TEXT.MATCH_FIVE(lottoRanks[RANK.THREE]),
      STATS_TEXT.MATCH_FIVE_BONUS(lottoRanks[RANK.TWO]),
      STATS_TEXT.MATCH_SIX(lottoRanks[RANK.ONE])
    );
  }

  showYield(lottoYield) {
    this.print(STATS_TEXT.YIELD(lottoYield));
  }

  readLine(message, callback) {
    return MissionUtils.Console.readLine(message, callback);
  }

  print(...messages) {
    return messages.forEach((message) => MissionUtils.Console.print(message));
  }

  finish() {
    return MissionUtils.Console.close();
  }
}

module.exports = LottoView;
