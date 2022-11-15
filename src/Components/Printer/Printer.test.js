const Printer = require('./Printer');

describe('Printer 클래스 테스트', () => {
  test('일치하는 번호 개수, 상금, 당첨 개수를 출력한다.', () => {
    const printString = `6개 일치 (2,000,000,000원) - 0개`;
    const result = new Printer()
      .setLottoNumberCount('6')
      .setWinningMoney('2,000,000,000')
      .setMatchedLottoCount('0')
      .print();

    expect(result).toBe(printString);
  });
});
