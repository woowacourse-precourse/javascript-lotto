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
      this.checkPriceInput(inputPrice);
      this.price = inputPrice;
      console.log(this.price);
    });
  }

  checkPriceInput(inputPrice) {
    if(isNaN(inputPrice) === true) throw "[ERROR] 숫자를 입력해 주세요.";
    if(inputPrice % 1000 !== 0) throw "[ERROR] 로또 1장의 가격은 1,000원입니다. 1,000원 단위로 입력해 주세요.";
    if(inputPrice < 1000) throw "[ERROR] 로또 1장의 가격은 1,000원입니다. 1,000원 이상을 입력해 주세요.";
  }




}

module.exports = Game;