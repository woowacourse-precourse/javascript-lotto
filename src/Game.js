const { Console } = require("@woowacourse/mission-utils");

class Game {

  gameStart() {
    this.getPriceInput();
  }

  constructor() {
    this.price = 0;
  }

  getPriceInput() {
    return Console.readLine('구입금액을 입력해 주세요.', (inputPrice) => {
      this.price = inputPrice;
      console.log(this.price);
    });
  }




}

module.exports = Game;