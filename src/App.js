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

  static totalWinningCounter(purchaseLottoList, winningNumber, bonusNumber) {
    let winningList = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveAndBonusMatches: 0,
      sixMatches: 0,
    };
    purchaseLottoList.map(lottoNumber => {
      const matchCount = App.winningDiscriminator(lottoNumber, winningNumber);
      const bonusCount = App.bonusDiscriminator(lottoNumber, bonusNumber);
      App.winningListModifier(winningList, matchCount, bonusCount);
    });
    return winningList;
  }

  static winningListModifier(winningList, matchCount, bonusCount) {
    const copyList = winningList;
    if (matchCount === 3) copyList.threeMatches += 1;
    if (matchCount === 4) copyList.fourMatches += 1;
    if (matchCount === 5 && !bonusCount) copyList.fiveMatches += 1;
    if (matchCount === 5 && bonusCount) copyList.fiveAndBonusMatches += 1;
    if (matchCount === 6) copyList.sixMatches += 1;
  }

  static winningDiscriminator(lottoNumber, winningNumber) {
    return lottoNumber.reduce(
      (acc, myNumber) => (winningNumber.includes(myNumber) ? acc + 1 : acc),
      0,
    );
  }

  static bonusDiscriminator(lottoNumber, bonusNumber) {
    return lottoNumber.reduce(
      (acc, myNumber) => (myNumber === Number(bonusNumber) ? acc + 1 : acc),
      0,
    );
  }

  play() {
    App.lottoPurchaser();
  }
}
console.log(
  App.totalWinningCounter(
    [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 8, 3, 4, 5, 7],
      [1, 9, 24, 4, 5, 7],
      [1, 45, 34, 3, 5, 7],
      [21, 22, 23, 24, 25, 27],
      [1, 23, 43, 24, 25, 27],
    ],
    '1,2,3,4,5,6',
    7,
  ),
);

module.exports = App;
