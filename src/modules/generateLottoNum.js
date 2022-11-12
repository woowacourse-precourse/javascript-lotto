const MissionUtils = require("@woowacourse/mission-utils");

class generateLottoNum {
  createLottoNum() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b)
  }

  lottoDetail(lottoCost) {
    const lottoArr = []
    const lottoCount = lottoCost / 1000
    for(let i=0; i<lottoCount;i++) lottoArr.push(this.createLottoNum())
    
    return lottoArr
  }
}

module.exports = generateLottoNum;
