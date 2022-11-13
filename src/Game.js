const { Console } = require('@woowacourse/mission-utils');
const LottoGenerator = require('./domain/LottoGenerator');
const LottoCalculator = require('./domain/LottoCalculator');
const WinningLotto = require('./Lotto');

class Game {
  constructor() {
    this.winningLotto = new WinningLotto();
    this.lottoGenerator = new LottoGenerator();
  }

  play() {
    this.buyLotto().then(() => {
      this.generateLuckyLotto().then(() => {
        this.getResultOfLotto(
          this.lottoGenerator.lottos,
          this.winningLotto.lotto,
          this.winningLotto.bonusNum
        );
      });
    });
  }

  buyLotto() {
    return new Promise((resolve) => {
      Console.readLine('구입금액을 입력해 주세요.\n', (money) => {
        const generatedLottos = this.lottoGenerator.generateLottos(money);
        resolve(generatedLottos.forEach((lotto) => Console.print(lotto)));
      });
    });
  }

  async generateLuckyLotto() {
    return new Promise((resolve) => {
      Console.readLine('\n당첨 번호를 입력해 주세요.\n', (lotto) => {
        lotto = lotto.split(',').map((num) => {
          return parseInt(num);
        });
        resolve(this.winningLotto.setLotto(lotto));
      });
    }).then(() => {
      return new Promise((resolve) => {
        Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNum) => {
          resolve(this.winningLotto.setBonusNum(bonusNum));
        });
      });
    });
  }

  getResultOfLotto(lottos, winningLotto, bonusNum) {
    return new Promise((resolve) => {
      const lottoCalculator = new LottoCalculator(
        lottos,
        winningLotto,
        bonusNum
      );

      const YIELD = lottoCalculator.calculateYield();
      resolve(
        Console.print('\n당첨 통계\n---'),
        Console.print(`3개 일치 (5,000원) - ${lottoCalculator.score['3']}개`),
        Console.print(`4개 일치 (50,000원) - ${lottoCalculator.score['4']}개`),
        Console.print(
          `5개 일치 (1,500,000원) - ${lottoCalculator.score['5']}개`
        ),
        Console.print(
          `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoCalculator.score['bonus']}개`
        ),
        Console.print(
          `6개 일치 (2,000,000,000원) - ${lottoCalculator.score['6']}개`
        ),
        Console.print(`총 수익률은 ${YIELD}%입니다.`),
        Console.close()
      );
    });
  }
}

module.exports = Game;
const game = new Game();
game.play();
