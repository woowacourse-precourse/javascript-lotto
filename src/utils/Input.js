const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('../constant/gameMessage');
const LottoGenerator = require('../LottoGenerator');
const Lotto = require('../Lotto');
const WinNums = require('../WinNums');
const BonusNum = require('../BonusNum');
const LottoMatching = require('../LottoMatching');
const View = require('./View');

class Input {  
  static lottoCost() {
    Console.readLine(GAME_MESSAGE.LOTTO_COST_INPUT_MESSAGE, (lottoCost) => {
      const [lottoCount, lottoArr] = LottoGenerator.publishLotto(lottoCost);
      lottoArr.map((lotto) => {
        new Lotto(lotto);
      });
      View.lottos(lottoCount, lottoArr);
      this.winNums(lottoArr, lottoCost);
    });
  }

  static winNums(lottoArr, lottoCost) {
    Console.readLine(GAME_MESSAGE.WIN_NUM_INPUT_MESSAGE, (winNums) => {
      new WinNums(winNums);
      this.bonusNum(lottoArr, winNums, lottoCost);
    });
  }

  static bonusNum(lottoArr, winNums, lottoCost) {
    Console.readLine(GAME_MESSAGE.BONUS_NUM_INPUT_MESSAGE, (bonusNum) => {
      new BonusNum(winNums, bonusNum);
      const lottoResultObj = LottoMatching.getResultObj(lottoArr, winNums, bonusNum);
      const rateOfReturn = LottoMatching.getRateOfReturn(lottoResultObj, lottoCost);
      View.winStatistics(lottoResultObj, rateOfReturn);
    });
  }
}

module.exports = Input;
