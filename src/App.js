const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.money = -1;
    this.totalLottoArray = [];
    this.winningLotto = [];
    this.bonusLotto = -1;
    this.checkBonus = false; // 보너스 번호가 로또 번호에 포함되었는지 확인하기 위한 변수
    this.result = [0, 0, 0, 0, 0, 0];
    this.totalProfit = 0; // 총 수익이 들어가는 변수
  }

  // 1. 구입금액을 입력받음
  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      this.money = answer;
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

  // 7. 로또 당첨 여부 확인
  checkLotto() {
    for (let index = 0; index < this.totalLottoArray.length; index++) {
      let count = 0; // 일치하는 로또 번호의 개수
      for (let num of this.totalLottoArray[index]) {
        if (this.winningLotto.includes(num)) {
          count += 1;
        }
      }
      if (this.totalLottoArray[index].includes(this.bonusLotto)) {
        this.checkBonus = true;
      }
      if (count === 6) {
        this.result[4] += 1; 
      } else if (count === 5 && this.checkBonus) {
        this.result[3] += 1;
      } else if (count === 5) {
        this.result[2] += 1;
      } else if (count === 4){
        this.result[1] += 1;
      } else if (count === 3) {
        this.result[0] += 1;
      }
    }
    return this.printLottoResult();
  }

  // 8. 로또 당첨 여부 출력
  printLottoResult() {
    MissionUtils.Console.print('당첨 통계\n---\n');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.result[0]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${this.result[1]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${this.result[2]}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result[3]}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${this.result[4]}개`);
    return this.getTotalProfit();
  }

  // 9. 총 수익률 구하고 출력하기
  getTotalProfit() {
    const MONEYARRAY = [5000, 50000, 1500000, 30000000, 2000000000]
    for (let index = 0; index < MONEYARRAY.length; index++) {
      this.totalProfit += MONEYARRAY[index] * this.result[index];
    }
    MissionUtils.Console.print(`총 수익률은 ${this.totalProfit/this.money}%입니다.`);
    MissionUtils.Console.close();
  }

  play() {
    this.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
