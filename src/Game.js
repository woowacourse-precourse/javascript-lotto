const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const LottoGenerator = require('./domain/LottoGenerator');

class Game {
  constructor() {
    this.lottos;
    this.bonusNum;
  }
  play() {
    Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
      this.getGeneratedLotto(money);
      this.getLuckyLotto();
    });
  }

  getGeneratedLotto(money) {
    const lottoGenerator = new LottoGenerator(parseInt(money));
    Console.print(`\n${lottoGenerator.numOfLottos}개를 구매했습니다.`);
    this.lottos = lottoGenerator.lottos;
    return lottoGenerator.lottos.forEach((lotto) => Console.print(lotto));
  }

  getLuckyLotto() {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', (winningLotto) => {
      const lotto = new Lotto(winningLotto.split(','));
      return this.getBonusNum();
    });
  }

  getBonusNum() {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNum) => {
      this.bonusNum = bonusNum;
    });
  }
}

module.exports = Game;
const game = new Game();
game.play();
