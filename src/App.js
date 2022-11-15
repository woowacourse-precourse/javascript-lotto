const { Console } = require('@woowacourse/mission-utils');
const LottoDrawer = require('./LottoDrawer');
const LottoSeller = require('./LottoSeller');
const Winner = require('./Winner');

const WINNER_RULE = {
  prize: {
    3: 5000,
    4: 50000,
    5: 1500000,
    6: 2000000000,
  },
  bonus: { count: 5, prizeMoney: 30000000, message: '보너스 볼 일치' },
};

const LOTTO_PRICE = 1000;

class App {
  constructor(lottoNumberCount = 6, winnerRule = WINNER_RULE) {
    this.lottoNumberCount = lottoNumberCount;
    this.winnerRule = winnerRule;
  }

  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      const lottoSeller = new LottoSeller(LOTTO_PRICE);

      lottoSeller.purchase(money);

      const lottoDrawer = new LottoDrawer(this.lottoNumberCount);
      const winner = new Winner(LOTTO_PRICE, lottoSeller.lottos, this.winnerRule);

      lottoDrawer.drawLotto(winner);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
