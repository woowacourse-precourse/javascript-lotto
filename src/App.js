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
  RANK,
  WINNING_SPLIT,
  INPUT_PRICE_MSG,
  BUY_MSG,
  INPUT_WINNING_MSG,
  INPUT_BONUS_MSG,
  RESULT_INTRO_MSG,
  LOTTO_LENGTH_NOT_SIX_ERROR,
  LOTTO_DUPLICATE_ERROR,
  LOTTO_OUT_OF_RANGE_ERROR,
  LOTTO_NAN_ERROR,
  PRICE_NAN_ERROR,
  PRICE_TOO_LOW_ERROR,
  PRICE_NOT_MULTIPLE_ERROR,
  BONUS_DUPLICATE_ERROR,
} = require('./Constants.js');

class App {
  inputWinningNumbersCallback(lottos, winningNumbers, bonus) {}

  inputBonusNumber(winningNumbers, lottos) {
    Console.readLine(INPUT_BONUS_MSG, (input) => {
      const bonus = Number(input);

      this.inputWinningNumbersCallback(lottos, winningNumbers, bonus);
    });
  }

  validateWinningNumbers(winningNumbers) {
    if (winningNumbers.length !== PICK_NUM) {
      throw new Error(LOTTO_LENGTH_NOT_SIX_ERROR);
    }
    winningNumbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error(LOTTO_NAN_ERROR);
      }
      if (number < MIN_NUM || number > MAX_NUM) {
        throw new Error(LOTTO_OUT_OF_RANGE_ERROR);
      }
    });
  }

  inputWinningNumbers(lottos) {
    Console.readLine(INPUT_WINNING_MSG, (input) => {
      const winningNumbers = input
        .split(WINNING_SPLIT)
        .map((number) => Number(number));

      this.validateWinningNumbers(winningNumbers);
      this.inputBonusNumber(winningNumbers, lottos);
    });
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}${BUY_MSG}`);
    lottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
  }

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
