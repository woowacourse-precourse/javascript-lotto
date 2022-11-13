const { readLine, print, close } = require("@woowacourse/mission-utils").Console;
const Generator = require('./Generator');
const Lotto = require("./Lotto");

class App {
  #lotto;

  constructor() {
    this.Generator = new Generator();
  }

  printNumberOfRandomNumbers(numberOfRandoms) {
    print(`${numberOfRandoms}개를 구매했습니다.`);
  }

  printRandomNumbers(randomNumbers) {
    randomNumbers.forEach((numbers) => {
      print(numbers);
    })
  }

  getLottoNumber() {
    print('\n당첨 번호를 입력해 주세요.');
    readLine('', (numbers) => {
      this.#lotto = new Lotto(numbers.split(','));
      this.getBonusNumber();
    })
  }

  getBonusNumber() {
    print('\n보너스 번호를 입력해 주세요.');
    readLine('', (number) => {
      this.#lotto.setBonusNumber(number);
    })
  }

  play() {
    print('구입금액을 입력해 주세요.');
    readLine('', (purchaseAmount) =>  {
      this.Generator.generateRandomNumbers(purchaseAmount);
      print();
      this.printNumberOfRandomNumbers(this.Generator.getNumberOfRandomNumbers());
      this.printRandomNumbers(this.Generator.getRandomNumbers());
      this.getLottoNumber();
    });
  }
}
new App().play();
module.exports = App;
