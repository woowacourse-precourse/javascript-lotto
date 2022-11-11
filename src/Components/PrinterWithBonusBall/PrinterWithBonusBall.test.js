const PrinterWithBonusBall = require('./PrinterWithBonusBall');
const { getLogSpy } = require('../../testFunction');

describe('PrinPrinterWithBonusBallter 클래스 테스트', () => {
  test('일치하는 번호 개수, 보너스 볼 일치 여부, 상금, 당첨 개수를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`;
    new PrinterWithBonusBall()
      .setLottoNumberCount('5')
      .setWinningMoney('30,000,000')
      .setMatchedLottoCount('0')
      .print();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });
});
