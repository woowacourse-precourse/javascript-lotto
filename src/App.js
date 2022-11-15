const { Console } = require('@woowacourse/mission-utils');
const LottoDrawer = require('./LottoDrawer');
const LottoSeller = require('./LottoSeller');
const WinnerSelector = require('./WinnerSelector');
const { WINNER_RULE, PRICE, NUMBER_COUNT } = require('./lottoOptions');

class App {
  constructor(
    lottoNumberCount = NUMBER_COUNT,
    winnerRule = WINNER_RULE,
    lottoPrice = PRICE,
  ) {
    this.lottoNumberCount = lottoNumberCount;
    this.winnerRule = winnerRule;
    this.lottoPrice = lottoPrice;
  }

  play() {
    const lottoSeller = new LottoSeller(this.lottoPrice);
    const winnerSelector = new WinnerSelector(this.lottoPrice, this.winnerRule);
    const lottoDrawer = new LottoDrawer(this.lottoNumberCount, winnerSelector);

    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      lottoSeller.run(money);
      lottoDrawer.run(lottoSeller.lottos);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
