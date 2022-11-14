const { Console } = require('@woowacourse/mission-utils');
const LottoGenerator = require('./LottoGenerator');
const Lotto = require('./Lotto');
const WinNums = require('./WinNums');
const BonusNum = require('./BonusNum');
const LottoMatching = require('./LottoMatching');

class LottoGame {
  constructor() {
    this.lottoGenerator = new LottoGenerator();
    this.lottoMatching = new LottoMatching(); 
  }

  buyLotto() {
    Console.readLine('구입금액을 입력해 주세요.\n', (lottoCost) => {
      const [lottoCount, lottoArr] = this.lottoGenerator.publishLotto(lottoCost);
      this.validateLottoNums(lottoArr);
      this.viewLottos(lottoCount, lottoArr);
      this.inputWinNums(lottoArr);
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

  validateLottoNums(lottoArr) {
    lottoArr.map((lotto) => {
      new Lotto(lotto);
    });
  }

  inputWinNums(lottoArr) {
    Console.readLine('당첨 번호를 입력해 주세요.\n', (winNums) => {
      new WinNums(winNums);
      this.inputBonusNum(lottoArr, winNums);
    });
  }
  
  inputBonusNum(lottoArr, winNums, lottoCost) {
    Console.print('');
    Console.readLine('보너스 번호를 입력해 주세요.\n', (bonusNum) => {
      new BonusNum(winNums, bonusNum);
      const lottoResultObj = this.lottoMatching.getResultObj(lottoArr, winNums, bonusNum);
      const rateOfReturn = this.lottoMatching.getRateOfReturn(lottoResultObj, lottoCost);
    });
  }
}

module.exports = LottoGame;
