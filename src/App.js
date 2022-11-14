const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const {
  isPurchasePriceToNumber,
  getTotalProfit,
} = require("./util/validate/purchase");
const {
  LOTTO_PURCHASE_PRICE,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  RESULT_MESSAGE,
  STATISTIC,
  PRIZE_KEY,
  PRIZE_REWARD,
  PRIZE_RESULT,
} = require("./util/constants");
class App {
  #lotto;

  price;
  winNumberList = [];
  lottoList = [];
  bonusNumber;

  constructor() {}
  play() {}
}

const game = new App();
game.play();

module.exports = App;
