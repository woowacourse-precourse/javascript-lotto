const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto');
const User = require('./User');
const Calculator = require('./Calculator');

class App {

  #totalLotto;
  #user;
  #lotto;
  #calc;

  constructor() {
    this.#totalLotto = [];
  }

  progressLotto() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userEnterAmount) => {
      this.createUser(userEnterAmount);
      this.generateLotto();
      this.printLotto();
      this.enterUserNumber();
      this.printStatatics();
    });
  }

  createUser(userEnterAmount) {
    this.#user = new User(userEnterAmount);
    this.#user.userAmountException();
  }

  generateLotto() {
    for(let count = 0; count < this.#user.lottoCount; count++) {
      const randomSixLottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lotto = new Lotto(randomSixLottoNumber);
      this.#totalLotto.push(randomSixLottoNumber);
    }
  }

  printLotto() {
    MissionUtils.Console.print(`\n${this.#user.lottoCount}개를 구매했습니다.`);
    for(let i = 0; i<this.#totalLotto.length; i++) {
      this.#totalLotto[i].sort((a, b) => a - b);
      MissionUtils.Console.print(JSON.stringify(this.#totalLotto[i]).replace(/,/gi, ", "));
    }
  }

  enterUserNumber() {
    MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (userNumber) => {
      const parsedWinningNumber = this.#user.parsingWinningNumber(userNumber);
      this.#user.winningNumber = parsedWinningNumber;
      this.#user.userWinningNumberException();

      this.#calc = new Calculator();
      this.#calc.winningNumber = parsedWinningNumber;
      
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      this.#user.bonusNumber = Number(bonusNumber);
      this.#user.bonusNumberException();
      
      this.#calc.totalLotto = this.#totalLotto;
      this.#calc.bonusNumber = Number(bonusNumber);
      this.#calc.calculateRank();
      this.#calc.calcYield(); 
    });
  }


  printStatatics() {
    const totalScore = this.#calc.totalScore;
    MissionUtils.Console.print('\n당첨 통계\n---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${totalScore['three']}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${totalScore['four']}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${totalScore['five']}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${totalScore['five_ball']}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${totalScore['six']}개`);
    MissionUtils.Console.print(`총 수익률은 ${parseFloat((this.#calc.yield/(this.#user.lottoCount*10)).toFixed(2))}%입니다.`);
    MissionUtils.Console.close();
  }

  get totalLotto() {
    return this.#totalLotto;
  }

  play() {
    this.progressLotto();
  }
}

module.exports = App;
