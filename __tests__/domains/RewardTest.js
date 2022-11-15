/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
const Reward = require('../../src/domains/Reward');
const WinningLotto = require('../../src/domains/WinningLotto');
const Lotto = require('../../src/Lotto');

describe('당첨 결과 도메인 테스트', () => {
  test('당첨 로또와 로또가 주어졌을 때 당첨 결과에 대한 자격이 동작하는지 테스트', () => {
    const numbers = Array(Lotto.NUMBER_COUNT + 1)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());
    const bonusNumber = numbers.pop();

    const winningLotto = new WinningLotto(new Lotto(numbers), bonusNumber);
    const lotto = new Lotto([...numbers.slice(0, Lotto.NUMBER_COUNT - 1), bonusNumber]);

    const reward = new Reward(
      '테스트',
      1_000_000,
      (numberCount, isBonusNumber) => numberCount === 5 && isBonusNumber,
    );

    expect(reward.isEligible(winningLotto, lotto)).toBe(true);
  });
});
