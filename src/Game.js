const { Console, Random } = require("@woowacourse/mission-utils");

class Game {
  gameStart() {
    this.getPriceInput();
    this.showNumbers(this.price);
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

  generateNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  showNumbers(price){
    let count = price / 1000;
    
    Console.print(`${count}개를 구매했습니다.`)
    while(count--){
      Console.print(this.generateNumbers());
    }
  }

  




}

module.exports = Game;