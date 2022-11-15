const AWARDDATA = require("./AWARDDATA");
class Award {
  #correctArr = [];
  #bonusBoolean = false;
  #price = 0;
  constructor(correctArr = [], bonusBoolean) {
    this.#correctArr = correctArr;
    this.#bonusBoolean = bonusBoolean;
  }
  haveAward() {
    this.#correctArr.forEach((element) => {
      switch (element) {
        case 3:
          this.#price += Number(AWARDDATA[element].split(",").join(""));
          break;
        case 4:
          this.#price += Number(AWARDDATA[element].split(",").join(""));
          break;
        case 5:
          if (this.#bonusBoolean)
            this.#price += Number(AWARDDATA[5.5].split(",").join(""));
          else this.#price += Number(AWARDDATA[element].split(",").join(""));
          break;
        case 6:
          this.#price += Number(AWARDDATA[element].split(",").join(""));
          break;
        default:
          break;
      }
    });
    return this.#price;
  }
}
module.exports = Award;
