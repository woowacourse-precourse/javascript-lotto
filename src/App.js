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
  bonus: { count: 5, prizeMoney: 3000000, message: '보너스 볼 일치' },
};
class App {
  lottos;

  constructor(lottoNumberCount = 6, winnerRule = WINNER_RULE) {
    this.lottoNumberCount = lottoNumberCount;
    this.winnerRule = winnerRule;
  }

  // TODO: 각 명령 다음 한 줄 비우기 \n
  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.lottos = new LottoSeller().purchase(money);
      // 추첨하면, 결과가 출력되어야 함
      // 콜백함수를 넘겨주기?
      const winner = new Winner(money, this.lottos, this.winnerRule);
      new LottoDrawer(this.lottoNumberCount).drawLotto(winner);
    });
  }
}

const app = new App();
app.play();

module.exports = App;
