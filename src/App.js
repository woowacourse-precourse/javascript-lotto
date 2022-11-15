const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {}
  play() {
    this.getPurchaseAmount();
  }

  getPurchaseAmount() {
    Console.print('구매금액을 입력해 주세요.');
    Console.readLine('', (userInput) => {
      this.checkPurchaseAmount(userInput);
    })
  }

  checkPurchaseAmount(userInput) {
    if(userInput % 1000 !== 0) {
      throw '[ERROR] 1000원 단위로 금액을 입력하지 않았습니다.'
    }
    console.log('통과');
  }
}
const app = new App();
app.play();

module.exports = App;