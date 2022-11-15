const { Console, Random } = require('@woowacourse/mission-utils');


class Lotto {
  #numbers

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  validateLotto() {
    this.validate(this.#numbers);
    Console.print('당첨 번호를 받는 것까지 성공했습니다.');
    this.getGuessBonusLotto(this.#numbers);
  }

  

  getStatics(guessLottoArray, guessBonusArr) {

  }

}

module.exports = Lotto;
