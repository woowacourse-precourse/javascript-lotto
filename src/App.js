const { Console } = require('@woowacourse/mission-utils');
const LottoDrawer = require('./LottoDrawer');
const LottoSeller = require('./LottoSeller');
const WinnerSelector = require('./WinnerSelector');

const WINNER_RULE = {
  prize: {
    3: 5000,
    4: 50000,
    5: 1500000,
    6: 2000000000,
  },
  bonus: { count: 5, prizeMoney: 30000000, message: '보너스 볼 일치' },
};

const LOTTO_NUMBER_COUNT = 6;

const LOTTO_PRICE = 1000;

class App {
  constructor(
    lottoNumberCount = LOTTO_NUMBER_COUNT,
    winnerRule = WINNER_RULE,
    lottoPrice = LOTTO_PRICE,
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
