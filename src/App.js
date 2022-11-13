const MissionUtils = require("@woowacourse/mission-utils");
const userException = require("./utils/userException");
const Lotto = require('./Lotto');
class App {

  // 로또 개수
  #lottoCount;
  #totalLotto = [];

  userEnterException(userEnterAmount) {
    userException.isInDivisible(userEnterAmount);
    userException.isNotNumber(userEnterAmount);
  }

  printLotto() {
    MissionUtils.Console.print(`${this.#lottoCount}개를 구매했습니다.`);
    this.#totalLotto.forEach((lotto) => MissionUtils.Console.print([...lotto].sort((a, b) => a - b)));
  }

  enterAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (userEnterAmount) => {
      this.userEnterException(userEnterAmount);
      this.#lottoCount = parseInt(Number(userEnterAmount) / 1000);
      // 기능 2 : 구입 금액 만큼의 로또 발행
      this.generateLotto();
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

  play() {
    // 기능 1 : 사용자의 구입 금액 입력
    this.enterAmount();
  }
}

module.exports = App;
