const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  static lottoPurchaser() {
    Console.readLine('구입금액을 입력해 주세요.\n', purchaseAmount => {
      const purchaseLottoCount = this.lottoCountGetter(purchaseAmount);
      const purchaseLottoList = this.lottoPublisher(purchaseLottoCount);
      this.printer(`\n${purchaseLottoCount}개를 구매했습니다.`);
      this.purchaseLottoListPrinter(purchaseLottoList);
      this.winningNumberDecider(purchaseLottoList);
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

  static winningNumberDecider(purchaseLottoList) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', winningNumber => {
      Console.readLine('\n보너스 번호를 입력해 주세요.\n', bonusNumber => {
        this.printer('당첨통계 나온다 이제');
      });
    });
  }

  static winningDiscriminator(lottoNumber, winningNumber) {
    return lottoNumber.reduce(
      (acc, myNumber) => (winningNumber.includes(myNumber) ? acc + 1 : acc),
      0,
    );
  }

  play() {
    App.lottoPurchaser();
  }
}
const app = new App();
app.play();

module.exports = App;
