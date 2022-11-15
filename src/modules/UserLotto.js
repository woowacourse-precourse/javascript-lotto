const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../Lotto");

class UserLotto {
  #number = [];
  //로또 번호 1~45까지의 서로 다른 임의의 수 6자리를 뽑는다.
  haveLotto(nTime) {
    for (let index = 0; index < nTime; index += 1) {
      let randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const LOTTO = new Lotto(randomNumber);
      this.#number.push(randomNumber);
    }
    //종료
    MissionUtils.Console.close();

    return this.#number;
  }
  //로또 번호 출력
  LottoPrint() {
    this.LottoSort();
    this.#number.forEach((arr) =>
      MissionUtils.Console.print(`[${arr.join(", ")}]`)
    );
    //종료
    MissionUtils.Console.close();
  }
  //오름차순 정렬
  LottoSort() {
    this.#number.forEach((arr) => {
      arr.sort((a, b) => a - b);
    });
  }
}
module.exports = UserLotto;
