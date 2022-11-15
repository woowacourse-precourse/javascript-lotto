class App {
  #myLottoNumbers;
  #winNumbers;
  #bonusNumber;
  #equalNumber = [0, 0, 0, 0, 0, 0, 0];
  #winMoney = [0, 0, 0, 5000, 50000, 1500000, 2000000000];
  #winBonus = 0;
  #BONUS_PROFIT = 30000000;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.\n', (money) => {
      const count = Math.floor(money / 1000);
      MissionUtils.Console.print(`${count}개를 구매했습니다.`);
      this.getLottoNumbers(count);
      this.getWinNumbers();
    });
  }

  getWinNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
      numbers = numbers.split(',');
      this.#winNumbers = numbers.map((x) => parseInt(x));
      this.getBonusNumber();
    });
  }

  getBonusNumber(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
      this.#bonusNumber = parseInt(bonus);
      // this.printNumbers();
      this.compareEachNumber();
      
    });
  }

  compareEachNumber() {
    for(let i = 0; i < this.#myLottoNumbers.length; i++) {
      const myWinNumbers = this.#myLottoNumbers[i].filter(x => this.#winNumbers.includes(x));
      let bonus = 0;
      if(this.#myLottoNumbers[i].includes(this.#bonusNumber)) {
        bonus++;
      }

      if(myWinNumbers.length === 5 && bonus === 1) {
        this.#winBonus++;
      } else{
        this.#equalNumber[myWinNumbers.length+bonus]++;
      }
    }
    this.calculateProfit();
  }

  calculateProfit() {
    let profit = 0;
    for(let i = 3; i < 7; i++) {
      profit += this.#winMoney*this.#equalNumber[i];
    }
    if(this.#winBonus) {
      profit += this.#winBonus * this.#BONUS_PROFIT
    }
    
    this.printResult();
  }


  printResult() {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5000원) - ${this.#equalNumber[3]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.#equalNumber[4]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.#equalNumber[5]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#winBonus}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.#equalNumber[6]}개`);
    MissionUtils.Console.print(`총 수익률은 - ${this.#equalNumber[6]}개입니다.`);
  }




  getLottoNumbers(count) {
    const numbers = [];
    for(let i = 0; i < count; i++) {
      numbers.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    numbers.forEach(lotto => {
      MissionUtils.Console.print(lotto);
    });
    
    this.#myLottoNumbers = numbers;
  }

  printNumbers() {
    MissionUtils.Console.print(this.#myLottoNumbers);
    MissionUtils.Console.print(this.#winNumbers);
    MissionUtils.Console.print(this.#bonusNumber);
  }
}


const MissionUtils = require("@woowacourse/mission-utils");

const app = new App();
app.play();


module.exports = App;
