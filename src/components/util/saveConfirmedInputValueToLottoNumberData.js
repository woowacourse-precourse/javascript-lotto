//예제테스트
const { LottoNumberData } = require('../lotto-data/LottoNumberData');

const MONEY = 1000;
const OBJECT = 'object';
const BONUS = 45;

function saveConfirmedInputValueToLottoNumberData(value) {
  if (isMoney(value)) {
    LottoNumberData.AmountPaid = value;
    return;
  }
  if (isWinningNumber(value)) {
    LottoNumberData.Winning = value;
    return;
  }
  if (isBonusNumber(value)) {
    LottoNumberData.Bonus = value;
    return;
  }
}

function isMoney(value) {
  return value >= MONEY;
}

function isWinningNumber(value) {
  return typeof value === OBJECT;
}

function isBonusNumber(value) {
  return value <= BONUS;
}

module.exports = saveConfirmedInputValueToLottoNumberData;
