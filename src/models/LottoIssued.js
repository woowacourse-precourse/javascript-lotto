const Utils = require("../utils/Utils");

class LottoIsuued {
  lottoIssued = [];

  constructor(lottoCount) {
    this.setLottoIssued(lottoCount);
  }

  setLottoIssued(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      const lottoNumber = Utils.sortLottoNumberInAscendignOrder(
        Utils.makeLottoNumber()
      );
      this.lottoIssued.push(lottoNumber);
    }
  }
}

module.exports = LottoIsuued;
