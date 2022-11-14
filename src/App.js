const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  static priceInput() {
    Console.readLine('구입금액을 입력해 주세요.\n', (answer) => {
      Console.print(answer);
    });
  }

  static lottoCountGetter(inputPrice) {
    return inputPrice / 1000;
  }

  static lottoPublisher(purchaseCount) {
    const purchaseLottoNumbers = [];
    for (let lottoCount = 0; lottoCount < purchaseCount; lottoCount += 1) {
      purchaseLottoNumbers.push(Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    Console.print(purchaseLottoNumbers);
    return purchaseLottoNumbers;
  }

  play() {
    App.lottoPublisher(6);
  }
}

const app = new App();
app.play();

module.exports = App;
