const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 구입금액을 입력받음
  getMoney() {
    MissionUtils.Console.readLine("구입금액을 입력해 주세요.\n", (answer) => {
      return this.getLottoNumber(answer);
    });
  }

  // 로또의 개수를 구함
  getLottoNumber(money) {
    if (money % 1000 === 0) {
      const num = parseInt(money/1000);
      MissionUtils.Console.print(`${num}개를 구매했습니다.`);
      return this.makeLotto(num);
    } 
    throw new Error("[ERROR] 1,000원으로 나누어 떨어지지 않습니다.");
  }

  // 로또 발행
  makeLotto(num) {
    let totalLottoArray = [];
    for (let index = 0; index < num; index++) {
      const newLottoArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      newLottoArray.sort(function compare(a, b) {return a-b;});
      totalLottoArray.push(newLottoArray);
      // console.log(`newLottoArray:`);
      // console.log(newLottoArray);
      // console.log(`totalLottoArray:`);
      // console.log(totalLottoArray);
    }
  }

  play() {
    this.getMoney();
  }
}

const app = new App();
app.play();

module.exports = App;
