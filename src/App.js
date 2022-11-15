class App {
  #myLottoNumbers;
  #winNumbers;
  #bonusNumber;
  #winRank = [0, 0, 0, 0, 0, 0];

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
      this.#bonusNumber = bonus;
      // this.printNumbers();
      this.compareEachNumber();
      
    });
  }

  compareEachNumber() {
    for(let i = 0; i < this.#myLottoNumbers.length; i++) {
      console.log(this.#myLottoNumbers[i].filter(x => this.#winNumbers.includes(x)));
    }
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
