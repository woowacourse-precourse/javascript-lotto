const { Console } = require("@woowacourse/mission-utils");
const Machine = require('./Machine.js');
const machine = new Machine();

const GET_WINNING_NUMBER_SENTENCE = '당첨 번호를 입력해 주세요.\n';

class App {
  constructor() {
    this.lottos;
    this.winningNumber;
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
      this.winningNumber = winningNumber.split(',');
      Console.print(this.winningNumber);
    })
  }

  play() {
    this.inputCost(); 
  }
}

const app = new App();
app.play();


module.exports = App;
