const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('./constant/gameMessage');
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
    Console.readLine(GAME_MESSAGE.LOTTO_COST_INPUT_MESSAGE, (lottoCost) => {
      const [lottoCount, lottoArr] = this.lottoGenerator.publishLotto(lottoCost);
      this.validateLottoNums(lottoArr);
      this.viewLottos(lottoCount, lottoArr);
      this.inputWinNums(lottoArr, lottoCost);
    });
  }
  
  validateLottoNums(lottoArr) {
    lottoArr.map((lotto) => {
      new Lotto(lotto);
    });
  }

  viewLottos(lottoCount, lottoArr) {
    Console.print(GAME_MESSAGE.HOW_MANY_BUY_LOTTO_MESSAGE(lottoCount));
    lottoArr.map((lotto) => {
      const lottoString = this.changeLottoToString(lotto); 
      Console.print(GAME_MESSAGE.LOTTO_PRINT(lottoString));
    });
  }

  changeLottoToString(lotto) {
    return lotto
      .toString()
      .split('')
      .map(el => {
        if (el === ',') return ', ' ;
        return el;
      })
      .join('');
  }
  
  inputWinNums(lottoArr, lottoCost) {
    Console.readLine(GAME_MESSAGE.WIN_NUM_INPUT_MESSAGE, (winNums) => {
      new WinNums(winNums);
      this.inputBonusNum(lottoArr, winNums, lottoCost);
    });
  }
  
  inputBonusNum(lottoArr, winNums, lottoCost) {
    Console.readLine(GAME_MESSAGE.BONUS_NUM_INPUT_MESSAGE, (bonusNum) => {
      new BonusNum(winNums, bonusNum);
      const lottoResultObj = this.lottoMatching.getResultObj(lottoArr, winNums, bonusNum);
      const rateOfReturn = this.lottoMatching.getRateOfReturn(lottoResultObj, lottoCost);
      this.viewWinStatistics(lottoResultObj, rateOfReturn);
    });
  }

  viewWinStatistics(lottoResultObj, rateOfReturn) {
    Console.print(GAME_MESSAGE.WIN_STATISTICS_MESSAGE(lottoResultObj, rateOfReturn));
    Console.close();
  }
}

module.exports = LottoGame;
