const MissionUtils = require("@woowacourse/mission-utils");
class UserLotto {
  #number = [];
  //로또 번호 1~45까지의 서로 다른 임의의 수 6자리를 뽑는다.
  haveLotto(nTime) {
    for (let index = 0; index < nTime; index += 1) {
      this.#number.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
    }
    return this.#number;
  }
  //로또 번호 출력
  LottoPrint() {
    this.#number.forEach((arr) =>
      MissionUtils.Console.print(`[${arr.join(", ")}]`)
    );
  }
}
module.exports = UserLotto;
