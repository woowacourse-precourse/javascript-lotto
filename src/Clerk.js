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

  countPlace() {
    for (let i = 0; i < this.#lottoArr.length; i++) {
      let [lottoCnt, bonusCnt] = this.findPlace(this.#lottoArr[i]);
      if (lottoCnt + bonusCnt === 3) this.#place[0]++;
      if (lottoCnt + bonusCnt === 4) this.#place[1]++;
      if (lottoCnt + bonusCnt === 5) this.#place[2]++;
      if (lottoCnt === 5 && bonusCnt === 1) this.#place[3]++;
      if (lottoCnt === 6) this.#place[4]++;
    }
  }

  countReward() {
    return (
      this.#place[0] * 5000 +
      this.#place[1] * 50000 +
      this.#place[2] * 1500000 +
      this.#place[3] * 30000000 +
      this.#place[4] * 2000000000
    );
  }

  showPlace() {
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${this.#place[0]}개
4개 일치 (50,000원) - ${this.#place[1]}개
5개 일치 (1,500,000원) - ${this.#place[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#place[3]}개
6개 일치 (2,000,000,000원) - ${this.#place[4]}개`);
  }
}

module.exports = Clerk;
