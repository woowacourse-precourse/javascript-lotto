class App {
  #myLottoNumbers;
  #winNumbers;
  #bonusNumber;
  #equalNumber = [0, 0, 0, 0, 0, 0, 0];
  #winMoney = [0, 0, 0, 5000, 50000, 1500000, 2000000000];
  #winBonus = 0;
  #profitPercent;
  #BONUS_PROFIT = 30000000;

  play() {
    this.buyLotto();
  }

  buyLotto() {
    MissionUtils.Console.readLine('구입 금액을 입력해 주세요.\n', (money) => {
      if(!money || money % 1000) {
        throw new Error("[ERROR] 구입 금액이 잘못되었습니다.");
      }
      
      if(isNaN(money)) {
        throw new Error("[ERROR] 숫자가 아닙니다.");
      }
      const count = money / 1000;
      MissionUtils.Console.print(`${count}개를 구매했습니다.`);
      this.getLottoNumbers(count);
      this.getWinNumbers();
    });
  }

  getLottoNumbers(count) {
    const numbers = [];
    for(let i = 0; i < count; i++) {
      const number = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(number);
      numbers.push(lotto.getNumbers());
    }
    numbers.forEach(lotto => {
      MissionUtils.Console.print(lotto);
    });
    
    this.#myLottoNumbers = numbers;
  }

  getWinNumbers() {
    MissionUtils.Console.readLine('당첨 번호를 입력해 주세요.\n', (numbers) => {
      const inputStrArray = numbers.split(',');
      const lotto = new Lotto(inputStrArray);
      this.#winNumbers = lotto.getNumbers().map((x) => parseInt(x));
      this.getBonusNumber();
    });
  }

  getBonusNumber(){
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.\n', (bonus) => {
      bonus = parseInt(bonus);
      if(this.#winNumbers.includes(bonus)) {
        throw new Error("[ERROR] 당첨 번호와 보너스 번호가 중복됩니다.");
      }
      this.#bonusNumber = bonus;
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
        this.#equalNumber[myWinNumbers.length]++;
      }
    }
    this.calculateProfit();
  }

  calculateProfit() {
    let profit = 0;
    for(let i = 3; i < 7; i++) {
      profit += this.#winMoney[i]*this.#equalNumber[i];
    }
    if(this.#winBonus) {
      profit += this.#winBonus * this.#BONUS_PROFIT;
    }
    // 당첨금액 / 구입금액
    profit = (profit / (this.#myLottoNumbers.length*1000)) * 100;
    this.#profitPercent = profit.toFixed(1);
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
    MissionUtils.Console.print(`총 수익률은 - ${this.#profitPercent}%입니다.`);
  }
}


const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");
const app = new App();
app.play();


module.exports = App;
