const Printer = require('./Printer');
const { getLogSpy } = require('../../testFunction');

describe('Printer 클래스 테스트', () => {
  test('일치하는 번호 개수, 상금, 당첨 개수를 출력한다.', () => {
    const logSpy = getLogSpy();
    const printString = `6개 일치 (2,000,000,000원) - 0개`;
    new Printer()
      .setLottoNumberCount('6')
      .setWinningMoney('2,000,000,000')
      .setMatchedLottoCount('0')
      .print();

    expect(logSpy).toHaveBeenCalledWith(printString);
  });
});
