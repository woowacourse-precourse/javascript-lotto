const MissionUtils = require("@woowacourse/mission-utils");
const CorrectLotto = require("./CorrectLotto");
const AWARDDATA = {
  3: "5000",
  4: "50000",
  5: "1,500,000",
  bonus: "30,000,000",
  6: "2,000,000,000",
};
class Award {
  #correctArr = [];
  #bonusBoolean = false;
  #price = [];
  constructor(correctArr = [], bonusBoolean = Boolean) {
    this.#correctArr = correctArr;
    this.#bonusBoolean = bonusBoolean;
  }
  haveAward() {
    this.#correctArr.forEach((element) => {
      switch (element) {
        case 3:
          this.#price.push(Number(AWARDDATA[element]));
          break;
        case 4:
          this.#price.push(Number(AWARDDATA[element].split(",").join("")));
          break;
        case 5:
          this.#bonusBoolean
            ? this.#price.push(Number(AWARDDATA[bonus].split(",").join("")))
            : this.#price.push(Number(AWARDDATA[element].split(",").join("")));
          break;
        case 6:
          this.#price.push(Number(AWARDDATA[element].split(",").join("")));
          break;
        default:
          break;
      }
    });
    return this.#price;
  }
}
module.exports = Award;
