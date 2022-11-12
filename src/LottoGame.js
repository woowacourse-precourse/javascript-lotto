const { Console } = require('@woowacourse/mission-utils');
const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');

class LottoGame {
  constructor() {
    this.lottoGenerator = new LottoGenerator();
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (lottoCost) => {
      const [lottoCount, lottoArr] = this.lottoGenerator.publishLotto(lottoCost);
      this.validateLottoNumAndCost(lottoArr, lottoCost);
      this.viewLottos(lottoCount, lottoArr);
      this.inputWinNum(lottoArr);
    });
  }

  viewLottos(lottoCount, lottoArr) {
    Console.print('');
    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoArr.map((lotto) => {
      Console.print(lotto);
    });
    Console.print('');
  }

  validateLottoNumAndCost(lottoArr, lottoCost) {
    lottoArr.map((lotto) => {
      new Lotto(lotto, lottoCost);
    });
  }

  inputWinNums(lottoArr) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (winNums) => {
      this.inputBonusNum(lottoArr, winNum);
    });
  }
  
  inputBonusNum(lottoArr, winNum) {
    Console.print('');
    Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNum) => {

    });
  }
}

module.exports = LottoGame;
