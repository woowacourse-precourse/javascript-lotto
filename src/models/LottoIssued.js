const {makeLottoNumber,sortLottoNumberInAscendignOrder} = require("../utils/utils")

class LottoIsuued {
  lottoIssued=[];

  constructor(lottoCount) {
    this.setLottoIssued(lottoCount);
  }

  setLottoIssued(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumber = sortLottoNumberInAscendignOrder(
        makeLottoNumber()
      );
      this.lottoIssued.push(lottoNumber);
    }
  }
}

module.exports = LottoIsuued;
