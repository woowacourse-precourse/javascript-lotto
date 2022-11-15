const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

const ONE_THOUSAND_WON = 1000;

const FIRST_LOTTO_WIN = 2000000000;
const SECOND_LOTTO_WIN = 30000000;
const TRHID_LOTTO_WIN = 1500000;
const FOURTH_LOTTO_WIN = 50000;
const FIFTH_LOTTO_WIN = 5000;

const ERROR_MESSAGE = {
  NOT_THOUSAND_WON : '[ERROR] 구입 금액은 1,000원 단위 입니다',
  BONUS_NUMBER_BETWEEN : '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  BONUS_DUPLICATE_NUMBER : '[ERROR] 당첨 번호와 중복되지 않은 숫자여야 합니다.',
  BONUS_WRONG_VALUE : '[ERROR] 보너스 번호에 올바른 값이 들어가지 않았습니다.'
}

class App {
  constructor() {
    this.price = 0;
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
        this.price = parseInt(price);
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
      MissionUtils.Console.print(`[${this.randomNumberArr[i].join(', ')}]`);
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
    if (bonusLotto < 1 && bonusLotto > 45) throw new Error(ERROR_MESSAGE.BONUS_NUMBER_BETWEEN);

    if (this.randomNumberArr.includes(bonusLotto)) throw new Error(ERROR_MESSAGE.BONUS_DUPLICATE_NUMBER);

    if (isNaN(bonusLotto) === true) throw new Error(ERROR_MESSAGE.BONUS_WRONG_VALUE);

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
    this.printYield(winningRanking, this.price);
  }

  printYield(winningRanking, price) { 
    let revenue = (FIRST_LOTTO_WIN * winningRanking.First) + (SECOND_LOTTO_WIN * winningRanking.Second) + (TRHID_LOTTO_WIN * winningRanking.Third) + (FOURTH_LOTTO_WIN * winningRanking.Fourth) + (FIFTH_LOTTO_WIN * winningRanking.Fifth);
    MissionUtils.Console.print(`총 수익률은 ${((revenue / price) * 100).toFixed(1)}%입니다.`);
    MissionUtils.Console.close();
  }
};

module.exports = App;