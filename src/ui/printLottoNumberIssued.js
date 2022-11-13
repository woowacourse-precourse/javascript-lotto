const { Console } = require('@woowacourse/mission-utils');
const LottoNumberIssuedFromComputer = require('../components/util/LottoNumberIssuedFromComputer');
const { LottoNumberData } = require('../components/lotto_data/LottoNumberData');

function printLottoNumbers(numberOfLotto) {
  Console.print(`${numberOfLotto}개를 구매했습니다.`);
  print(numberOfLotto);
}

function print(numberOfLotto) {
  const WHILE_END = 0;
  let numberOfLottoForFn = numberOfLotto;
  while (numberOfLottoForFn > WHILE_END) {
    const lottoNumberIssued = new LottoNumberIssuedFromComputer();
    const lottoNumber = lottoNumberIssued.return();
    Console.print(`[${lottoNumber.join(', ')}]`);

    saveLottoNumberIssued(lottoNumber);
    numberOfLottoForFn = subtractMinusOne(numberOfLottoForFn);
  }
}

function saveLottoNumberIssued(lottoNumber) {
  LottoNumberData.Issued = LottoNumberData.Issued.concat([lottoNumber]);
}

function subtractMinusOne(number) {
  return number - 1;
}

module.exports = printLottoNumbers;
