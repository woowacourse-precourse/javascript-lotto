// variable
const {
  LottoNumberData,
  LottoRanking,
} = require('../components/lotto-data/LottoNumberData');

function resetLottoNumberData() {
  for (let lottoNumber in LottoNumberData) {
    if (IsissuedOrWinning(lottoNumber)) {
      LottoNumberData[lottoNumber] = [];
      continue;
    }
    LottoNumberData[lottoNumber] = 0;
  }
  for (let ranking in LottoRanking) {
    LottoRanking[ranking] = 0;
  }
}

function IsissuedOrWinning(lottoNumber) {
  return lottoNumber === 'Issued' || lottoNumber === 'Winning';
}

module.exports = resetLottoNumberData;
