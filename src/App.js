const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.priceInput();
  };
  
  priceInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
        this.priceExceptionHandling(price)
        console.log(`구입금액을 입력해 주세요.\n ${price}`);
        this.totalLottoCounts(price);
      }
    );
  };

  priceExceptionHandling(price) {
    if(price % 1000 !== 0 ) throw '[ERROR] 구입 금액은 1,000원 단위 입니다';
  };

  totalLottoCounts(price) {
    const totalCounts = price / 1000;
    MissionUtils.Console.print(`${totalCounts}개를 구매했습니다.`);
    this.printRandomLotto(totalCounts)
  };

  printRandomLotto(totalCounts) {
    for (let i = 0; i < totalCounts; i++) {
      const LottoArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      MissionUtils.Console.print(LottoArr);
    }
  }
}

module.exports = App;
