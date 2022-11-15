const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.totalLottoArray = [];
    this.winningLotto = [];
    this.bonusLotto = -1;
  }

  // 1. 구입금액을 입력받음
  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      return this.getLottoNumber(answer);
    });
  }

  // 2. 로또의 개수를 구함
  getLottoNumber(money) {
    if (money % 1000 === 0) {
      const num = parseInt(money/1000);
      MissionUtils.Console.print(`${num}개를 구매했습니다.`);
      return this.makeLotto(num);
    } 
    throw new Error("[ERROR] 1,000원으로 나누어 떨어지지 않습니다.");
  }

  // 3. 로또 발행
  makeLotto(num) {
    for (let index = 0; index < num; index++) {
      const newLottoArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      newLottoArray.sort(function compare(a, b) {return a-b;});
      this.totalLottoArray.push(newLottoArray);
      console.log(`newLottoArray:`);
      console.log(newLottoArray);
      console.log(`totalLottoArray:`);
      console.log(this.totalLottoArray);
    }
    return this.getWinningLotto();
  }

  // 6. 로또 번호 validation
  validateNumbers(winningLotto, bonusLotto) {
    if (winningLotto.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개 여야 합니다.");
    }
    let totalLotto = winningLotto.slice();
    totalLotto.push(bonusLotto);
    if (winningLotto.length !== new Set(winningLotto).size) {
      throw new Error("[ERROR] 로또 번호는 중복되면 안 됩니다.");
    }
    for(const num of totalLotto) {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
    return true;
  }

  // 4. 당첨 번호를 받음
  getWinningLotto() {
    MissionUtils.Console.readLine("당첨 번호를 입력해 주세요.\n", (answer) => {
      this.winningLotto = answer.split(",").map(Number);
      console.log(this.winningLotto);
      return this.getBonusLotto();
    });
  }

  // 5. 보너스 번호를 받음
  getBonusLotto() {
    MissionUtils.Console.readLine("보너스 번호를 입력해 주세요.\n", (answer) => {
      this.bonusLotto = parseInt(answer);
      console.log(this.bonusLotto);
      if(this.validateNumbers(this.winningLotto, this.bonusLotto)){
        return this.checkLotto();
      };
    });
  }

  play() {
    this.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
