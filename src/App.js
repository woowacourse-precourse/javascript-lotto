const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  static lottoPurchaser() {
    Console.readLine('구입금액을 입력해 주세요.\n', (purchaseAmount) => {
      const purchaseLottoCount = this.lottoCountGetter(purchaseAmount);
      const purchaseLottoList = this.lottoPublisher(purchaseLottoCount);
      this.printer(`\n${purchaseLottoCount}개를 구매했습니다.`);
      this.purchaseLottoListPrinter(purchaseLottoList);
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

  static printer(inputText) {
    Console.print(inputText);
  }

  static purchaseLottoListPrinter(purchaseLottoList) {
    for (
      let lottoNumber = 0;
      lottoNumber < purchaseLottoList.length;
      lottoNumber += 1
    ) {
      Console.print(purchaseLottoList[lottoNumber].sort((a, b) => a - b));
    }
  }

  play() {
    App.lottoPurchaser();
  }
}
const app = new App();
app.play();

module.exports = App;
