const { Console, Random } = require('@woowacourse/mission-utils');

class Shop {
  #numberOfLotto;

  pay() {
    Console.readLine('구입금액을 입력해 주세요.\n', (input) => {
      this.#numberOfLotto = Number(input) / 1000;
    });
  }
}


module.exports = Shop;