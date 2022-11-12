const MissionUtils = require("@woowacourse/mission-utils");

class generateLottoNum {
  createLottoNum() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers.sort((a, b) => a - b)
  }

  lottoDetail(lottoCost) {
    if(isNaN(lottoCost)) throw new Error('[ERROR] 숫자가 아닙니다.');
    const lottoArr = []
    const lottoCount = lottoCost / 1000
    if(lottoCost % 1000 != 0) throw new Error('[ERROR] 1,000원 단위로 입력하세요.');
    for(let i=0; i<lottoCount;i++) lottoArr.push(this.createLottoNum())

    return lottoArr
  }
}

module.exports = generateLottoNum;
