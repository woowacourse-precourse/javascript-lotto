const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class App {
  lottoArr = [];
  randomNumberArr = [];
  bonusLotto = 0;

  play() {
    this.priceInput();
    this.userRandomNumber();
    this.userBonusNumber();
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
    if(price % 1000 !== 0 ) throw '[ERROR] 구입 금액은 1,000원 단위 입니다';
  };

  totalLottoCounts(price) {
    const totalCounts = price / 1000;
    MissionUtils.Console.print(`${totalCounts}개를 구매했습니다.`);
    this.printRandomLotto(totalCounts)
  };

  printRandomLotto(totalCounts) {
    for (let i = 0; i < totalCounts; i++) {
      this.lottoArr.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
      MissionUtils.Console.print(this.lottoArr[i]);
    };
  };

  userRandomNumber() {
    MissionUtils.Console.readLine('당첨번호을 입력해 주세요.', (number) => {
      this.randomNumberArr = number.split(",").map(Number);
      new Lotto(this.randomNumberArr);
      console.log(`당첨번호을 입력해 주세요.\n${this.randomNumberArr}`);
    });
  };

  userBonusNumber() {
    MissionUtils.Console.readLine('보너스 번호를 입력해 주세요.', (bonusNumber) => {
      this.bonusLotto = parseInt(bonusNumber);
      this.bonusCheck(this.bonusLotto);
      console.log(`보너스 번호를 입력해 주세요.\n${this.bonusLotto}`);
    });
  };
 
  bonusCheck(bonusLotto) {
    if (bonusLotto < 1 && bonusLotto > 45) throw new Error("보너스 번호는 1부터 45 사이의 숫자여야 합니다.");

    if (this.randomNumberArr.includes(bonusLotto)) throw new Error("당첨 번호와 중복되지 않은 숫자여야 합니다.");

    if (isNaN(bonusLotto) === true) throw new Error("보너스 번호에 올바른 값이 들어가지 않았습니다.");
  };
};

module.exports = App;
