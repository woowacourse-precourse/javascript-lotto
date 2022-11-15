const JudgeLotto = require('../src/components/JudgeLotto');
const Lotto = require('../src/Lotto');

describe('로또 판단 클래스 테스트', () => {
  test('발행한 로또와 당첨 로또를 비교하는 기능을 확인한다.', () => {
    const lottos = [
      new Lotto([1, 2, 3, 9, 12, 33]),
      new Lotto([1, 2, 3, 9, 12, 27]),
      new Lotto([1, 2, 3, 9, 12, 45]),
      new Lotto([3, 5, 9, 12, 21, 33]),
      new Lotto([7, 9, 11, 12, 33, 39]),
    ];
    const wins = [1, 2, 3, 9, 12, 33];
    const bonus = 27;

    expect(JudgeLotto.compareLotto({ lottos, wins, bonus })).toEqual([
      { win: 6, bonus: false },
      { win: 5, bonus: true },
      { win: 5, bonus: false },
      { win: 4, bonus: false },
      { win: 3, bonus: false },
    ]);
  });
});
