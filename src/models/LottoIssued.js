const Lotto = require("./Lotto")
const {makeLottoNumber,sortLottoNumberInAscendignOrder} = require("..utils")

class LottoIsuued {
  lottoIssued=[];

  constructor(lottoCount) {
    this.lottoCount = lottoCount;
  }

  setLottoIssued(lottoCount) {
    for (let i = 0; i < lottoCount; i++) {
      let lottoNumber = sortLottoNumberInAscendignOrder(
        makeLottoNumber()
      );
      this.lottoIssued.push(new Lotto(lottoNumber));
    }
  }

}

module.exports = LottoIsuued;
