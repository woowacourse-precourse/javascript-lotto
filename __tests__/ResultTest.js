const Result = require('../src/Result');

describe('result 클래스 테스트', () => {
  test('수익률 테스트', () => {
    const r = new Result();
    const winCount = {
      sameNumberis3: 1,
      sameNumberis4: 0,
      sameNumberis5: 0,
      sameNumberis5andBonus: 1,
      sameNumberis6: 0,
    };
    const receive = r.profitCalculator(2, winCount);
    expect(receive).toEqual(15002.5);
  });
});
