const InputOutput = require('./InputOutput.js');
const Message = require('./Message.js');
const Score = require('./Score.js');

class Lotto {
  #numbers;

  constructor (numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate (numbers) {
    numbers.map((item) => {
      if (item < 1 || item > 45) {
        InputOutput.close();
        throw new Error(Message.LOTTO_NUMBER_BIGGER_THAN_ONE_SMALLER_THAN_FOURTY_FIVE);
      }

      if (parseInt(item) !== item) {
        InputOutput.close();
        throw new Error(Message.NOT_NUMBER);
      }
    })

    if (numbers.length !== 6) {
      InputOutput.close();
      throw new Error(Message.LOTTO_NUMBER_LENGTH_IS_SIX);
    }

    if ([...new Set(numbers)].length !== 6) {
      InputOutput.close();
      throw new Error(Message.SAME_NUMBER);
    }

  }
  
  getCorrectNumber () {
    return this.#numbers;
  }
}

module.exports = Lotto;
