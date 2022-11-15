const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const purchaseAmountValidator = require('./purchaseAmountValidate');

class App {
  static lottoPurchaser() {
    Console.readLine('구입금액을 입력해 주세요.\n', purchaseAmount => {
      const { validatedAmount } = new purchaseAmountValidator(purchaseAmount);
      const purchaseLottoCount = this.lottoCountGetter(purchaseAmount);
      const purchaseLottoList = this.lottoPublisher(purchaseLottoCount);
      this.printer(`${purchaseLottoCount}개를 구매했습니다.`);
      this.purchaseLottoListPrinter(purchaseLottoList);
      this.winningNumberDecider(purchaseLottoList, purchaseAmount);
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
      const purchaseLottoString = `[${purchaseLottoList[lottoNumber].sort(
        (a, b) => a - b,
      )}]`.replace(/,/g, ', ');
      Console.print(purchaseLottoString);
    }
  }

  static winningNumberDecider(purchaseLottoList, purchaseAmount) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', winningNumber => {
      const lotto = new Lotto(winningNumber.split(','));
      console.log(lotto);
      Console.readLine('\n보너스 번호를 입력해 주세요.\n', bonusNumber => {
        const winningList = this.totalWinningCounter(
          purchaseLottoList,
          winningNumber,
          bonusNumber,
        );
        this.winningHistoryPrinter(winningList);
        const procdeeds = this.proceedsGetter(winningList);
        const returnRate = this.returnRateGetter(procdeeds, purchaseAmount);
        this.returnRatePrinter(returnRate);
      });
    });
  }

  static winningHistoryPrinter(winningList) {
    this.printer(
      `당첨통계 \n--- \n3개 일치 (5,000원) - ${winningList.threeMatches}개 \n4개 일치 (50,000원) - ${winningList.fourMatches}개\n5개 일치 (1,500,000원) - ${winningList.fiveMatches}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningList.fiveAndBonusMatches}개\n6개 일치 (2,000,000,000원) - ${winningList.sixMatches}개`,
    );
  }

  static totalWinningCounter(purchaseLottoList, winningNumber, bonusNumber) {
    const winningList = {
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

  static proceedsGetter(winningList) {
    let procdeeds = 0;
    procdeeds += winningList.threeMatches * 5000;
    procdeeds += winningList.fourMatches * 50000;
    procdeeds += winningList.fiveMatches * 1500000;
    procdeeds += winningList.fiveAndBonusMatches * 30000000;
    procdeeds += winningList.sixMatches * 2000000000;
    return procdeeds;
  }

  static returnRateGetter(procdeeds, purchaseAmount) {
    const returnRate = (procdeeds / purchaseAmount) * 100;
    return returnRate.toFixed(1);
  }

  static returnRatePrinter(returnRate) {
    this.printer(`총 수익률은 ${returnRate}%입니다.`);
  }

  play() {
    App.lottoPurchaser();
  }
}

const app = new App();
app.play();

module.exports = App;
