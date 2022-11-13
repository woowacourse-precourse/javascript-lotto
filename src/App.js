const { readLine, print, close } = require("@woowacourse/mission-utils").Console;
const Generator = require('./Generator');

class App {
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

  play() {
    print('구입금액을 입력해 주세요.');
    readLine('', (purchaseAmount) =>  {
      close();
      this.Generator.generateRandomNumbers(purchaseAmount);
      this.printNumberOfRandomNumbers(this.Generator.getNumberOfRandomNumbers());
      this.printRandomNumbers(this.Generator.getRandomNumbers());
    });
  }
}

module.exports = App;
