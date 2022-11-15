const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const User = require('./User');
const Calculator = require('./Calculator');
const { PROGRESS_TEXT } = require('../src/const/text');
const { SCORE_LIST } = require('../src/const/lotto');

class App {
  #totalLotto;
  #user;
  #lotto;
  #calc;

  constructor() {
    this.#totalLotto = [];
  }

  play() {
    MissionUtils.Console.readLine(PROGRESS_TEXT.REQUIRE_AMOUNT, (userEnterAmount) => {
      this.createUser(userEnterAmount);
      this.generateLotto();
      this.printLotto();
      this.enterUserNumber();
    });
  }

  createUser(userEnterAmount) {
    this.#user = new User(userEnterAmount);
    this.#user.amountException();
  }

  generateLotto() {
    for(let count = 0; count < this.#user.lottoCount; count++) {
      const randomSixLottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#lotto = new Lotto(randomSixLottoNumber);
      this.#totalLotto.push(randomSixLottoNumber);
    }
  }

  printLotto() {
    MissionUtils.Console.print(`\n${this.#user.lottoCount}`+PROGRESS_TEXT.PRINT_COUNT);
    for(let i = 0; i<this.#totalLotto.length; i++) {
      this.#totalLotto[i].sort((a, b) => a - b);
      MissionUtils.Console.print(JSON.stringify(this.#totalLotto[i]).replace(/,/gi, ', '));
    }
  }

  enterUserNumber() {
    MissionUtils.Console.readLine(PROGRESS_TEXT.REQUIRE_WINNING, (userNumber) => {
      const parsedWinningNumber = this.#user.parsingWinningNumber(userNumber);
      this.#user.winningNumber = parsedWinningNumber;
      this.#user.winningNumberException();

      this.#calc = new Calculator();
      this.#calc.winningNumber = parsedWinningNumber;
      
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    MissionUtils.Console.readLine(PROGRESS_TEXT.REQUIRE_BONUS, (bonusNumber) => {
      this.#user.bonusNumber = Number(bonusNumber);
      this.#user.bonusNumberException();
      
      this.#calc.totalLotto = this.#totalLotto;
      this.#calc.bonusNumber = Number(bonusNumber);
      this.#calc.calculateRank();
      this.#calc.calcYield(); 

      this.printStatatics();
    });
  }

  printStatatics() {
    const totalScore = this.#calc.totalScore;
    MissionUtils.Console.print(PROGRESS_TEXT.PRINT_STATITICS);

    SCORE_LIST.forEach((scoreInfo) => {
      MissionUtils.Console.print(`${scoreInfo[0]} (${scoreInfo[1]}원) - ${totalScore[scoreInfo[2]]}개`);
    })
    const rateOfReturn = parseFloat((this.#calc.yield/(this.#user.lottoCount*10)).toFixed(2));
    MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
    MissionUtils.Console.close();
  }

  get totalLotto() {
    return this.#totalLotto;
  }
}

module.exports = App;
