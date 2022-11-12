const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const User = require('./User');
const LottoMarket = require('./LottoMarket');
const Result = require('./Result');
const {MESSAGE_INPUT_PURCHASE_AMOUNT} =require('./Constants');

class App {
  play() {
    Console.readLine(MESSAGE_INPUT_PURCHASE_AMOUNT, (purchaseAmount) => {
      const [USER, LOTTO_MARKET, RESULT] = this.init()
      USER.setUserMoney(purchaseAmount);
      USER.buyLotto(LOTTO_MARKET);
      RESULT.setWinningNumbers(USER.lottoNums);
    })
  }

  init(){
    const USER = new User();
    const LOTTO_MARKET = new LottoMarket();
    const RESULT = new Result();
    return [USER, LOTTO_MARKET, RESULT];
  }
}

const ap = new App();
ap.play();

module.exports = App;
