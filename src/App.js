const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  static lottoPurchaser() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      const purchaseLottoCount = this.lottoCountGetter(purchaseAmount);
      Console.print(`\n${purchaseLottoCount}개를 구매했습니다.`);
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
    return purchaseLottoNumbers;
  }

  play() {
    App.lottoPurchaser();
  }
}
const app = new App();
app.play();

module.exports = App;
