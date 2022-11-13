const { Console, Random } = require("@woowacourse/mission-utils");

class Game {
  gameStart() {
    this.getPriceInput();
    this.showNumbers(this.price);
    this.getWinningNumberInput();
    this.getBonusNumberInput();
    this.getResult();
  }

  constructor() {
    this.price = 0;
    this.numbersArr = [];
    this.countArr = [];
  }

  getPriceInput() {
    return Console.readLine('구입금액을 입력해 주세요.', (inputPrice) => {
      this.checkPriceInput(inputPrice);
      this.price = inputPrice;
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
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  showNumbers(price){
    let count = price / 1000;
  
    Console.print(`${count}개를 구매했습니다.`);

    while(count--){
      const numbers = this.generateNumbers();
      this.numbersArr.push(numbers);
      Console.print(numbers);
    }
  }

  getWinningNumberInput() {
    return Console.readLine('당첨 번호를 입력해 주세요.', (inputWinningNumber) => {
      console.log(inputWinningNumber);
      this.addCount(inputWinningNumber);
      Console.close();
    });
  }

  getBonusNumberInput() {
    return Console.readLine('보너스 번호를 입력해 주세요.', (inputBonusNumber) => {
      console.log(inputBonusNumber);
      Console.close();
    });
  }

  addCount(winningNumber) {
    for(let i = 0 ; i<this.numbersArr.length ; i++){
      let difference = this.numbersArr[i].filter(x => !winningNumber.includes(x));
      this.countArr.push(6-difference.length);
    }
  }  

  getResult(){
    const result = this.countArr.reduce((accu, curr) => { 
      accu[curr] = (accu[curr] || 0)+1; 
      return accu;
    }, {});
        
    return result;
  }


}

module.exports = Game;