const { Console, Random } = require('@woowacourse/mission-utils');
const { INPUT } = require('./Constants');
const Lotto = require('./Lotto');

class Lottery {
  #lotto;

  progress() {
    this.inputWinningNumber();

  }
  
  inputWinningNumber() {
    Console.readLine(INPUT.LOTTO_NUMBER, (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
    });
  }

}

new Lottery().progress();

module.exports = Lottery;
