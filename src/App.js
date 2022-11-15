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

      this.inputBonusNumber();
    })
  }

  inputBonusNumber() {
    Console.readLine(GET_BONUS_NUMBER_SENTENCE, (bonusNumber) => {
      this.bonusNumber = parseInt(bonusNumber);

      const lotto = new Lotto(this.lottos);
      const stats = lotto.calculateStats(this.winningNumber, this.bonusNumber);
      
      Console.print(stats);
    })
  }

  play() {
    this.inputCost(); 
  }
}

const app = new App();
app.play();


module.exports = App;
