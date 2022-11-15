const { Console } = require("@woowacourse/mission-utils");
const Lotto = require('./Lotto.js');
const Machine = require('./Machine.js');
const machine = new Machine();

const GET_WINNING_NUMBER_SENTENCE = '당첨 번호를 입력해 주세요.\n';
const GET_BONUS_NUMBER_SENTENCE = '\n보너스 번호를 입력해 주세요.\n';

class App {
  constructor() {
    this.lottos;
    this.winningNumber;
    this.bonusNumber;
    this.stats = [];
  }

  inputCost() {
    machine.getCost();
    
    Console.readLine('', (cost) => {
      machine.calculateCount(cost);
      this.lottos = machine.issueLottos();

      this.inputWinningNumber();
    })
  }

  inputWinningNumber() {
    Console.readLine(GET_WINNING_NUMBER_SENTENCE, (winningNumber) => {
      this.winningNumber = winningNumber.split(',').map(Number);

      this.winningNumberVaildate();

      this.inputBonusNumber();
    })
  }

  winningNumberVaildate() {
    if (this.winningNumber.length !== 6) {
      throw new Error("[ERROR] 당첨 번호가 6개가 아닙니다.")
    }

    this.winningNumber.map((v) => {
      if (Number.isNaN(v)) {
        throw new Error('[ERROR] 당첨 번호가 올바르지 않습니다.');
      }

      if (1 > v || 45 < v) {
        throw new Error('[ERROR] 당첨 번호는 1에서 45사이의 숫자여야 합니다.');
      }
    });

    for (let i = 0; i < 5; i++) {
      if (this.winningNumber.slice(i+1).includes(this.winningNumber[i])) {
        throw new Error('[ERROR] 중복되는 당첨 번호가 있습니다.');
      }
    }
  }

  inputBonusNumber() {
    Console.readLine(GET_BONUS_NUMBER_SENTENCE, (bonusNumber) => {
      this.bonusNumber = parseInt(bonusNumber);

      this.bonusNumberValidate();

      const lotto = new Lotto(this.lottos);
      const counts = lotto.calculateStats(this.winningNumber, this.bonusNumber);
      
      lotto.printStats(counts);
      lotto.printRate(counts);

      Console.close();
    })
  }

  bonusNumberValidate() {
    if(Number.isNaN(this.bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호가 올바르지 않습니다.');
    }

    if(this.winningNumber.includes(this.bonusNumber)) {
      throw new Error('[ERROR] 당첨 번호내에 보너스 번호와 중복되는 숫자가 있습니다.');
    }

    if(1 > this.winningNumber || 45 < this.winningNumber) {
      throw new Error('[ERROR] 보너스 번호는 1에서 45사이의 숫자여야 합니다.')
    }
  }

  play() {
    this.inputCost(); 
  }
}

const app = new App();
app.play();

module.exports = App;
