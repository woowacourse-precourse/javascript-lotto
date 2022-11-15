const MissionUtils = require("@woowacourse/mission-utils");

class Clerk {
  #lottoArr;
  #lottoNum;
  #bonusNum;
  #place;

  constructor() {}

  setData(lottoArr, lottoNum) {
    this.#lottoArr = lottoArr;
    this.#lottoNum = lottoNum[0].map((data) => Number(data));
    this.#bonusNum = lottoNum[1];
    this.#place = new Array(5).fill(0);
  }
}

module.exports = Clerk;
