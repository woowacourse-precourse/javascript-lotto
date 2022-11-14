const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const ONE_THOUSAND_WON = 1000;

const ERROR_MESSAGE = {
  NOT_THOUSAND_WON : '[ERROR] 구입 금액은 1,000원 단위 입니다'
}

class App {
  constructor() {
    this.winningLotto = [];
    this.randomNumberArr = [];
    this.bonusLotto = 0;
    this.winningRanking = { First: 0, Second: 0, Third: 0, Fourth: 0, Fifth: 0 };
    }

  play() {
    this.priceInput();
  };
  
  priceInput() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.', (price) => {
        this.priceExceptionHandling(price)
        console.log(`구입금액을 입력해 주세요.\n${price}`);
        this.totalLottoCounts(price);
      }
    );
  };

  priceExceptionHandling(price) {
    if(price % ONE_THOUSAND_WON !== 0 ) throw new Error (ERROR_MESSAGE.NOT_THOUSAND_WON)
  };

  totalLottoCounts(price) {
    const totalCounts = price / ONE_THOUSAND_WON;
    MissionUtils.Console.print(`${totalCounts}개를 구매했습니다.`);
    this.printRandomLotto(totalCounts)
  };

  printRandomLotto(totalCounts) {
    for (let i = 0; i < totalCounts; i++) {
      this.randomNumberArr.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      MissionUtils.Console.print(this.randomNumberArr[i]);
    };
    this.userRandomNumber();
  };

  userRandomNumber() {
    MissionUtils.Console.readLine('당첨번호을 입력해 주세요.', (number) => {
      this.winningLotto = number.split(",").map(Number);
      new Lotto(this.winningLotto);
      console.log(`당첨번호을 입력해 주세요.\n${this.winningLotto}`);
      this.userBonusNumber();
    });
  };

  userBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (bonusNumber) => {
      this.bonusLotto = parseInt(bonusNumber);
      console.log(`보너스 번호를 입력해 주세요.\n${this.bonusLotto}`);
      this.bonusCheck(this.bonusLotto);
    });
  };
 
  bonusCheck(bonusLotto) {
    if (bonusLotto < 1 && bonusLotto > 45) throw new Error("보너스 번호는 1부터 45 사이의 숫자여야 합니다.");

    if (this.randomNumberArr.includes(bonusLotto)) throw new Error("당첨 번호와 중복되지 않은 숫자여야 합니다.");

    if (isNaN(bonusLotto) === true) throw new Error("보너스 번호에 올바른 값이 들어가지 않았습니다.");

    this.randomNumberArr.forEach((randomNumberArr) => this.countLotto(randomNumberArr, this.winningLotto));
    
    this.printResult(this.winningRanking);
  };

  countLotto(randomNumberArr, winningLotto) {
    let count = 0;

    randomNumberArr.forEach((randomNumberArr) => {
      if (winningLotto.includes(randomNumberArr)) {
        count++;
      };
    });

    this.checkRanking(count, this.bonusLotto, winningLotto);
  }

  checkRanking(count, bonusLotto, myLotto) {
    switch (count) {
      case 3:
        this.winningRanking.Fifth++;
        break;
      case 4:
        this.winningRanking.Fourth++;
        break;
      case 5:
        myLotto.includes(bonusLotto) ? this.winningRanking.Second++ : this.winningRanking.Third++;
        break;
      case 6:
        this.winningRanking.First++;
        break;
    }
  }

  printResult(winningRanking) {
    MissionUtils.Console.print("\n당첨 통계");
    MissionUtils.Console.print("---");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winningRanking.Fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winningRanking.Fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winningRanking.Third}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningRanking.Second}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winningRanking.First}개`);
  }
};

module.exports = App;
