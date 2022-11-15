const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");


class Game {


  constructor() {
    this.price = 0;
    this.publishNumbers = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
  }

  gameStart() {
    this.getPriceInput();
    this.showNumbers();
    this.getWinningNumberInput();
    this.getBonusNumberInput();
    this.lotto = new Lotto(this.winningNumber);
    this.getResult();
  } 

  getPriceInput() {
    return Console.readLine('구입금액을 입력해 주세요.', (inputPrice) => {
      this.checkPriceInput(inputPrice);
      this.price = Number(inputPrice);
      console.log(this.price);
      Console.close();
    });
  }

  checkPriceInput(inputPrice) {
    if(isNaN(inputPrice) === true) throw "[ERROR] 숫자를 입력해 주세요.";
    if(inputPrice % 1000 !== 0) throw "[ERROR] 로또 1장의 가격은 1,000원입니다. 1,000원 단위로 입력해 주세요.";
    if(inputPrice < 1000) throw "[ERROR] 로또 1장의 가격은 1,000원입니다. 1,000원 이상을 입력해 주세요.";

  }

  generateNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b) => a - b);
    return numbers;
  }

  showNumbers(){
    let count = this.price / 1000;
  
    Console.print(`${count}개를 구매했습니다.`);

    while(count--){
      const numbers = this.generateNumbers();
      this.publishNumbers.push(numbers);
      Console.print(numbers);
    }
  }

  getWinningNumberInput() {
    return Console.readLine('당첨 번호를 입력해 주세요.', (inputWinningNumber) => {
      const arr = new Set(inputWinningNumber);
      if (inputWinningNumber.length !== [...arr].length) throw "[ERROR] 중복되지 않는 수를 입력해 주세요.";
      console.log(inputWinningNumber);
      let splitWinningNumber = inputWinningNumber.split(',');
      new Lotto(splitWinningNumber);
      this.winningNumber = splitWinningNumber.map(Number);  
      Console.close();
    });
  }

  getBonusNumberInput() {
    return Console.readLine('보너스 번호를 입력해 주세요.', (inputBonusNumber) => {
      console.log(inputBonusNumber);
      this.bonusNumber = Number(inputBonusNumber);
      Console.close();
    });
  }



}

module.exports = Game;