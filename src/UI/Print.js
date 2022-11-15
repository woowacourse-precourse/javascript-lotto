const { RANK } = require("../Utils/constant");
const MissionUtils = require("@woowacourse/mission-utils");
class Print {
  result(collectCount, rate) {
    MissionUtils.Console.print(`
    ${RANK.MESSAGE}
    ${RANK.FIFTH(collectCount[0])}
    ${RANK.FOURTH(collectCount[1])}
    ${RANK.THIRD(collectCount[2])}
    ${RANK.SECOND(collectCount[3])}
    ${RANK.FIRST(collectCount[4])}
    ${RANK.RATE(rate)}
    `);
    this.close();
  }

  close() {
    MissionUtils.Console.close();
  }
}
module.exports = Print;
