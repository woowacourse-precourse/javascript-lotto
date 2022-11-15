const MissionUtils = require("@woowacourse/mission-utils");

class GenerateLottoNum {
  createLottoNum() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return numbers;
  }

   lottoDetail(lottoCost) {
    const lottoArr = []
    const lottoCount = lottoCost / 1000
    for(let i=0; i<lottoCount;i++) lottoArr.push(this.createLottoNum())
    return [lottoCount, lottoArr]
  }
}

module.exports = GenerateLottoNum;
