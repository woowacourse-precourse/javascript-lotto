const Lotto = require("./Lotto");
const { GAME_MESSAGE } = require('./Constants');
const { validateMoney } = require('./InputChecker');
const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.lottos = [];
    this.prize = 0;
  }

  getPurchaseAmount(message) {
    Console.readLine(message, (inputMoney) => {
      validateMoney(inputMoney);
      this.printNumberOfLottos(inputMoney);
    })
  }

  printNumberOfLottos(inputMoney) {
    const numberOfLotto = Math.floor(inputMoney / 1000);
    Console.print('\n' + numberOfLotto + '개를 구매했습니다.');
    this.printLottos(numberOfLotto);
  }

  printLottos(numberOfLotto) {
    const lottoArrays = [];
    
    for (let i = 0; i < numberOfLotto; i++) {
      const lottoArray = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArrays.push(lottoArray);
    }
    lottoArrays.forEach((lottoArray) => {
      Console.print(lottoArray);
      } 
    )
    this.getGuessLotto();
  }

  getGuessLotto() {
    Console.readLine(GAME_MESSAGE.guessNumbers, (guessLotto) => {
      guessLotto = guessLotto.split(',').map(string => Number(string))
      let lotto = new Lotto(guessLotto);
      lotto.validateLotto();
      this.lottos.push(lotto);
    })
  }

  play() {
    this.getPurchaseAmount(GAME_MESSAGE.purchaseAmount);
    
  }
}

let app = new App();
app.play();

module.exports = App;
