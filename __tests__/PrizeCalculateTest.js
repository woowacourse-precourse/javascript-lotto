const Calculate = require('../src/lotto-make-and-calculate/Calculate');

describe('수익률 계산 테스트', () => {
  test('소수점 둘째자리수에서 반올림 (첫번째 자리까지만 나오도록 함)', () => {
    const calculate = new Calculate();
    calculate.ranking = [0,1,0,0,0];
    calculate.prizeCalculate(3000);
    expect(calculate.earnPercentage).toBe('1666.7');
  });
});
