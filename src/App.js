const MissionUtils = require("@woowacourse/mission-utils");
const userException = require("./utils/userException");
const numberException = require('./utils/numberException');
const Lotto = require('./Lotto');

class App {

  // 로또 개수
  #lottoCount;
  #totalLotto = [];
  #userWinningNumber;
  #userBonusNumber;
  #totalScore = {
    'three': 0,
    'four': 0,
    'five': 0,
    'five_ball': 0,
    'six': 0
  };
  #yield = 0;

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
      MissionUtils.Console.print(JSON.stringify(this.#totalLotto[i]).replace(/,/gi, ", "));
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
      const parsingUserNumber = String(userNumber).trim().split(',').map(number => +number);
      this.userNumberException(parsingUserNumber);
      this.#userWinningNumber = userNumber;
      this.enterBonusNumber();
    });
  }

  enterBonusNumber() {
    MissionUtils.Console.readLine('\n보너스 번호를 입력해 주세요.\n', (bonusNumber) => {
      if(isNaN(Number(bonusNumber)) || Number(bonusNumber) > 45 || Number(bonusNumber) < 1) {
        throw new Error('[ERROR] 보너스 번호는 1~45사이의 숫자입니다.');
      }
      this.#userBonusNumber = bonusNumber;
      // 기능 4 : 당첨 내역 계산
      this.calculateRank();
    });
  }

  calculateRank() {
    const totalScore = [];
    this.#totalLotto.map((lotto) => {
      let count = 0;
      lotto.forEach(lottoNumber => {
        if(this.#userWinningNumber.includes(lottoNumber)) count++
      });
      totalScore.push(count);
    })
    this.extractScore(totalScore);
  }

  extractScore(totalScore) {
    totalScore.map((score, index) => {
      if(score === 3) {
        this.#totalScore.three += 1;
      } else if (score === 4) {
        this.#totalScore.four += 1;
      } else if (score === 5) {
        if(this.#totalLotto[index].includes(Number(this.#userBonusNumber))) {
          this.#totalScore.five_ball += 1;
        } else this.#totalScore.five += 1;
      } else if (score === 6) {
        this.#totalScore.six += 1;
      }
    })
  }

  play() {
    // 기능 1 : 사용자의 구입 금액 입력
    this.enterAmount();
  }
}

module.exports = App;
