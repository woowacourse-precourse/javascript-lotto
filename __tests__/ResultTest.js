const Result = require('../src/controllers/Result');
const Lotto = require('../src/Lotto');

describe('결과 클래스 테스트', () => {
  const testArray = [
    [1, 2, 3, 4, 5, 6],
    [2, 3, 4, 5, 6, 7],
    [3, 4, 5, 6, 7, 8],
  ];
  const testLottoArray = [];
  testArray.forEach((item) => {
    testLottoArray.push(new Lotto(item));
  });

  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;
  const money = 3000;

  const result = new Result(testLottoArray, winningNumbers, bonusNumber, money);

  test('로또 결과 계산 테스트', () => {
    expect(result.score).toEqual({
      three: 0,
      four: 1,
      five: 0,
      fivePlusBonus: 1,
      six: 1,
    });
  });
    
    test('수익률 계산 테스트', () => {
        expect(result.revenue).toEqual('67668333.3')
    })
});
