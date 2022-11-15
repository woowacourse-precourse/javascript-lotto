const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");


class Game {


  constructor() {
    this.price = 0;
    this.publishNumbers = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
    this.countArr=[];
    this.earningPercent = 0;

    this.static = [
      {match:3, prize: 5000},
      {match:4, prize: 50000},
      {match:5, prize: 1500000},
      {match:5, prize: 30000000},
      {match:6, prize: 2000000000},
    ];
  }

  gameStart() {
    this.getPriceInput();
    this.showNumbers();
    this.getWinningNumberInput();
    this.getBonusNumberInput();
    this.lotto = new Lotto(this.winningNumber);
    this.priceEarning();
    this.printResult();
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
      Console.print(`[${String(numbers).replaceAll(",", ", ")}]`);
    }
  }

  getWinningNumberInput() {
    return Console.readLine('당첨 번호를 입력해 주세요.', (inputWinningNumber) => {
      this.winningNumber = inputWinningNumber.split(",").map(Number);
      this.checkWinningNumber(this.winningNumber);
      Console.close();
    });
  }

	checkWinningNumber(input) {
    input.forEach((e) => {
			if (isNaN(e)) throw "[ERROR] 숫자로만 입력해 주세요.";
		});

    if (input.length !== 6) throw "[ERROR] 개수를 맞게 입력해 주세요.";

    const arr = new Set(input);
		if (input.length !== [...arr].length) throw "[ERROR] 중복되지 않는 수를 입력해 주세요.";

		input.forEach((e) => {
			if (e < 1 || e > 45) throw "[ERROR] 1부터 45까지의 수만 입력해 주세요.";
		});

	}

  getBonusNumberInput() {
    return Console.readLine('보너스 번호를 입력해 주세요.', (inputBonusNumber) => {
      //console.log(inputBonusNumber);
      this.bonusNumber = Number(inputBonusNumber);
      Console.close();
    });
  }

  priceEarning() {
    this.countArr = this.lotto.compareNumbers(this.publishNumbers, this.bonusNumber);
    let total = 0;
    
    this.countArr.forEach((count, idx) => {
      total += this.static[idx].prize * count;
    });
    this.earningPercent = ((total / this.price) * 100).toFixed(1);
    console.log(this.earningPercent);
  }

  printResult() {
    Console.print('당첨 통계');
    Console.print('---');

    this.countArr.forEach((count, idx) => {
      if(idx !== 3){
        Console.print(`${this.static[idx].match}개 일치 (${this.static[idx].prize.toLocaleString()}원) - ${count}개`);
      }
      else{
        Console.print(`${this.static[idx].match}개 일치, 보너스 볼 일치 (${this.static[idx].prize.toLocaleString()}원) - ${count}개`);
      }
    });

    Console.print(`총 수익률은 ${this.earningPercent}%입니다.`);
  }


}

module.exports = Game;