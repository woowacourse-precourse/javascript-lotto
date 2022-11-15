const { Console } = require('@woowacourse/mission-utils');
const LottoNumberIssuedFromComputer = require('../components/util/LottoNumberIssuedFromComputer');
const { LottoNumberData } = require('../components/lotto-data/LottoNumberData');
const { WHILE_END } = require('../components/lotto-data/Constant');

function printLottoNumberIssuedFromComputer(numberOfLotto) {
  Console.print(`\n${numberOfLotto}개를 구매했습니다.`);
  print(numberOfLotto);
}

function print(numberOfLotto) {
  let numberOfLottoForFn = numberOfLotto;
  const lottoNumberIssued = new LottoNumberIssuedFromComputer();

  while (numberOfLottoForFn > WHILE_END) {
    const lottoNumber = lottoNumberIssued.return();
    Console.print(`[${useJoin(lottoNumber)}]`);
    numberOfLottoForFn = subtractMinusOne(numberOfLottoForFn);
  }
}

function useJoin(lottoNumber) {
  saveLottoNumberIssued(lottoNumber);
  return lottoNumber.join(', ');
}

function saveLottoNumberIssued(lottoNumber) {
  LottoNumberData.Issued = LottoNumberData.Issued.concat([lottoNumber]);
}

function subtractMinusOne(number) {
  return number - 1;
}

module.exports = printLottoNumberIssuedFromComputer;
