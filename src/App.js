const Lotto = require("./Lotto");
const { GAME_MESSAGE } = require('./Constants');
const { validateMoney } = require('./InputChecker');
const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.lottoArrays = [];
    this.prize = 0;
    this.guessAllArray = [];
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
    this.generateLottos(numerOfLotto);
  }

  generateLottos(numberOfLotto) {
    for (let i = 0; i < numberOfLotto; i++) {
      const lottoArray = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArray.sort((a, b) => (a - b));
      const lotto = new Lotto(lottoArray)
      lottoArrays.push(lotto);
    }
  }

  printLottos(numberOfLotto) {
    const lottoArrays = [];
    
    for (let i = 0; i < numberOfLotto; i++) {
      const lottoArray = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoArrays.push(lottoArray);
    }
    lottoArrays.map((lottoArray) => {
      lottoArray.sort((a, b) => (a - b));
      Console.print(lottoArray);
      } 
    )
    printeLottos = lottoArray;
    this.getGuessLotto();
  }

  getGuessLotto() {
    Console.readLine(GAME_MESSAGE.guessNumbers, (guessLotto) => {
      guessLotto = guessLotto.split(',').map(string => {
        return Number(string);
      })
      this.getGuessBonusLotto(guessLotto);
    })
    ;
  }

  getGuessBonusLotto(guessLotto) {
    Console.readLine(GAME_MESSAGE.bonusNumbers, (guessBonus) => {
      if (!guessLotto.includes(guessBonus)) {
        guessBonus = Number(guessBonus);
      }
    this.getStatics(guessLotto, guessBonus);
    }
  )}


  getStatics(guessLotto) {

  }

  play() {
    this.getPurchaseAmount(GAME_MESSAGE.purchaseAmount);
  }
}

let app = new App();
app.play();

module.exports = App;
