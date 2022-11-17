const { Console } = require('@woowacourse/mission-utils');
const LottoNumberIssuedFromComputer = require('../components/util/LottoNumberIssuedFromComputer');

const { WHILE_END } = require('../components/lotto-data/Constant');

function printLottoNumberIssuedFromComputer(numberOfLotto) {
  Console.print(`\n${numberOfLotto}개를 구매했습니다.`);
  print(numberOfLotto);
}

function print(numberOfLotto) {
  let numberOfLottoForFn = numberOfLotto;

  while (numberOfLottoForFn > WHILE_END) {
    Console.print(`[${useJoin(issueLottoNumber())}]`);
    numberOfLottoForFn -= 1;
  }
}

function issueLottoNumber() {
  const lottoNumberIssued = new LottoNumberIssuedFromComputer();
  return lottoNumberIssued.return();
}

function useJoin(lottoNumber) {
  return lottoNumber.join(', ');
}

module.exports = printLottoNumberIssuedFromComputer;
