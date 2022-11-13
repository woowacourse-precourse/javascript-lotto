const MissionUtils = require("@woowacourse/mission-utils");
const userException = require("./utils/userException");
const numberException = require('./utils/numberException');
const Lotto = require('./Lotto');
class App {

  // 로또 개수
  #lottoCount;
  #totalLotto = [];
  userWinningNumber;
  userBonusNumber;

  userEnterException(userEnterAmount) {
    userException.isInDivisible(userEnterAmount);
    userException.isNotNumber(userEnterAmount);
  }

  userNumberException(parsingUserNumber) {
    numberException.isNotSix(parsingUserNumber);
    numberException.includeNotNumber(parsingUserNumber);
    numberException.isDuplicated(parsingUserNumber);
  }

  printLotto() {
    MissionUtils.Console.print(`\n${this.#lottoCount}개를 구매했습니다.`);
    for(let i = 0; i<this.#totalLotto.length; i++) {
      this.#totalLotto[i].sort((a, b) => a - b)
      MissionUtils.Console.print(this.#totalLotto[i]);
    }
  }

  enterAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userEnterAmount) => {
      this.userEnterException(userEnterAmount);
      this.#lottoCount = parseInt(Number(userEnterAmount) / 1000);
      // 기능 2 : 구입 금액 만큼의 로또 발행
      this.generateLotto();
      // 기능 3 : 사용자의 당첨 번호, 보너스 번호 입력
      this.enterUserNumber();
    });
  }

  generateLotto() {
    for(let count = 0; count < this.#lottoCount; count++) {
      const randomSixLottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(randomSixLottoNumber);
      this.#totalLotto.push(lotto.getNumbers());
    }
    this.printLotto();
  }

  enterUserNumber() {
    MissionUtils.Console.readLine('\n당첨 번호를 입력해 주세요.\n', (userNumber) => {
      const parsingUserNumber = String(userNumber).split(',').map(number => +number);
      this.userNumberException(parsingUserNumber);
      this.userWinningNumber = userNumber;
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      if(isNaN(Number(bonusNumber)) || bonusNumber.length > 1) {
        throw new Error('[ERROR] 보너스 번호는 한자리 숫자입니다.');
      }
      this.userBonusNumber = bonusNumber;
    });
  }

  play() {
    // 기능 1 : 사용자의 구입 금액 입력
    this.enterAmount();
  }
}

module.exports = App;
