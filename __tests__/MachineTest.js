const Machine = require('../src/Machine');
const Lotto = require('../src/Lotto');

const { PRIZE } = require('../src/constants/prize');

describe('Machine 클래스 테스트', () => {
  test('로또를 정상적으로 발행한다.', () => {
    const lotto = Machine.publishLotto();

    expect(lotto).toBeInstanceOf(Lotto);
  });

  test('2등을 판별한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 45]);
    const winCount = 5;
    const winBonus = 45;

    expect(Machine.judgePrize(lotto, winCount, winBonus)).toBe(PRIZE.SECOND);
  });

  test('3등을 판별한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winCount = 5;
    const winBonus = 45;

    expect(Machine.judgePrize(lotto, winCount, winBonus)).toBe(PRIZE.THIRD);
  });

  test('나머지 등수를 판별한다.', () => {
    const { FIRST, FOURTH, FIFTH, LOST } = PRIZE;

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winBonus = 1;

    const winCounts = [6, 4, 3, 2, 1, 0];
    const prizes = [FIRST, FOURTH, FIFTH, LOST, LOST, LOST];

    winCounts.forEach((winCount, i) => {
      expect(Machine.judgePrize(lotto, winCount, winBonus)).toBe(prizes[i]);
    });
  });
});
