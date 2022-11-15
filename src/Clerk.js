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

  findPlace(lottoNumArr) {
    let lottoCnt = 0;
    let bonusCnt = 0;
    for (let i = 0; i < 6; i++) {
      if (this.#lottoNum.includes(lottoNumArr[i])) lottoCnt++;
      if (this.#bonusNum === lottoNumArr[i]) bonusCnt++;
    }
    return [lottoCnt, bonusCnt];
  }
}

module.exports = Clerk;
