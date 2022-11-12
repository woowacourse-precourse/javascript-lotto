const MissionUtils = require("@woowacourse/mission-utils");
const { Console, Random } = MissionUtils;
const User = require('./User');
const LottoMarket = require('./LottoMarket');
const {MESSAGE_INPUT_PURCHASE_AMOUNT} =require('./constants');

class App {
  play() {
    const USER = new User();
    const LOTTO_MARKET = new LottoMarket();
    Console.readLine(MESSAGE_INPUT_PURCHASE_AMOUNT, (purchaseAmount) => {
      USER.setUserMoney(purchaseAmount);
      USER.buyLotto(LOTTO_MARKET);
    })
  }
}

const ap = new App();
ap.play();

module.exports = App;
