const { Console, Random } = require('@woowacourse/mission-utils');
const {
  GET_MONEY,
  SHOW_AMOUNT,
  GET_NUMBERS,
  GET_BONUS_NUMBER,
  WINNING_STASTICS,
  MATCHING_3,
  MATCHING_4,
  MATCHING_5,
  MATCHING_5_BONUS,
  MATCHING_6,
  COUNT,
  RETURN_RATE,
  RETURN_RATE_ENDING_WORD,
} = require('./Messages');

class App {
  play() {}

  printMessage(message) {
    Console.print(message);
  }

  startLotto() {}
}

module.exports = App;
