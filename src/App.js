const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const {
  POOL,
  PRICE,
  PICK_NUM,
  MAX_NUM,
  MIN_NUM,
  PRIZE,
  PRIZE_MSG,
  FIRST_RANK,
  SECOND_RANK,
  THIRD_RANK,
  FOURTH_RANK,
  FIFTH_RANK,
  NOTHING_RANK,
  WINNING_SPLIT,
  INPUT_PRICE_MSG,
  LOTTO_LENGTH_NOT_SIX_ERROR,
  LOTTO_DUPLICATE_ERROR,
  LOTTO_OUT_OF_RANGE_ERROR,
  LOTTO_NAN_ERROR,
  PRICE_NAN_ERROR,
  PRICE_TOO_LOW_ERROR,
  PRICE_NOT_MULTIPLE_ERROR,
} = require('./Constants.js');

class App {
  inputWinningNumbers(lottos) {}

  printLottos(lottos) {}

  generateLotto() {
    const numbers = Random.pickUniqueNumbersInRange(MIN_NUM, MAX_NUM, PICK_NUM);

    numbers.sort((a, b) => a - b);
    return new Lotto(numbers);
  }

  buyLotto(price) {
    const amount = price / PRICE;

    return Array.from({ length: amount }, this.generateLotto);
  }

  validateBuyPrice(price) {
    if (Number.isNaN(price)) {
      throw new Error(PRICE_NAN_ERROR);
    }
    if (price < PRICE) {
      throw new Error(PRICE_TOO_LOW_ERROR);
    }
    if (price % 1000 !== 0) {
      throw new Error(PRICE_NOT_MULTIPLE_ERROR);
    }
  }

  inputPriceCallback(input) {
    const totalPrice = Number(input);

    this.validateBuyPrice(totalPrice);

    const lottos = this.buyLotto(totalPrice);

    this.printLottos(lottos);
    this.inputWinningNumbers(lottos);
  }

  play() {
    Console.readLine(INPUT_PRICE_MSG, (input) =>
      this.inputPriceCallback(input)
    );
  }
}

module.exports = App;
