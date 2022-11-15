const MissionUtils = require("@woowacourse/mission-utils");
class AnswerLotto {
  #answer;
  #bonus;
  // 당첨번호
  haveAnswer() {
    MissionUtils.Console.readLine(
      "당첨 번호를 입력해 주세요.",
      (answer) => (this.#answer = answer)
    );
    //종료
    MissionUtils.Console.close();
    return this.#answer;
  }
  //보너스 번호
  bonusAnswer() {
    MissionUtils.Console.readLine(
      "보너스 번호를 입력해 주세요.",
      (bonus) => (this.#bonus = bonus)
    );
    //종료
    MissionUtils.Console.close();
    return this.#bonus;
  }
}
module.exports = AnswerLotto;
