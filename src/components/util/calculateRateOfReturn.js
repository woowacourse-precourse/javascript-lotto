const {
  LottoNumberData,
  LottoRanking,
} = require('../lotto-data/LottoNumberData');
const { MONEY, PERCENTAGE, SECOND_DECIMAL } = require('../lotto-data/Constant');

function calculateRateOfReturn() {
  saveRateOfReturn(RoundSecondDecimalPlace(calculate()));
}

function saveRateOfReturn(calculatedValue) {
  LottoNumberData.RateOfReturn = calculatedValue;
}

function calculate() {
  return (sum() / LottoNumberData.AmountPaid) * PERCENTAGE;
}

function RoundSecondDecimalPlace(value) {
  return value ? value.toFixed(SECOND_DECIMAL) : value;
}

function sum() {
  let total = 0;
  for (let ranking in LottoRanking) {
    total += LottoRanking[ranking] * MONEY[ranking];
  }
  return total;
}

module.exports = calculateRateOfReturn;
