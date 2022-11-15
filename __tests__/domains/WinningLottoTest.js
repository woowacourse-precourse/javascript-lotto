/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
const Reward = require('../../src/domains/Reward');
const WinningLotto = require('../../src/domains/WinningLotto');
const Lotto = require('../../src/Lotto');

describe('당첨 로또 도메인 테스트', () => {
  test(`보너스 번호와 ${Lotto.NUMBER_COUNT}개의 번호와 중복 체크가 잘 되는지 확인.`, () => {
    const numbers = Array(Lotto.NUMBER_COUNT)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());
    const bonusNumber = numbers[0];

    expect(() => {
      new WinningLotto(new Lotto(numbers), bonusNumber);
    }).toThrow('[ERROR]');
  });

  test('주어진 로또에 대해 5개 번호 일치, 보너스 번호 일치를 센다.', () => {
    const numbers = Array(Lotto.NUMBER_COUNT + 1)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());
    const bonusNumber = numbers.pop();

    const winningLotto = new WinningLotto(new Lotto(numbers), bonusNumber);
    const lotto = new Lotto([...numbers.slice(0, Lotto.NUMBER_COUNT - 1), bonusNumber]);

    expect(winningLotto.countMatchNumber(lotto)).toBe(Lotto.NUMBER_COUNT - 1);
    expect(winningLotto.isMatchBonusNumber(lotto)).toBe(true);
  });

  test('주어진 로또에 대해 0개의 번호 일치를 센다.', () => {
    const winningNumbers = Array(Lotto.NUMBER_COUNT + 1)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());
    const bonusNumber = winningNumbers.pop();
    const numbers = Array(Lotto.NUMBER_COUNT)
      .fill()
      .map((_, index) => Lotto.NUMBER_MAX - index)
      .sort(() => 0.5 - Math.random());

    const winningLotto = new WinningLotto(new Lotto(winningNumbers), bonusNumber);
    const lotto = new Lotto(numbers);

    expect(winningLotto.countMatchNumber(lotto)).toBe(0);
  });

  test('주어진 로또에 대해 4개 번호 일치에 해당되는 당첨 결과를 낸다.', () => {
    const winningNumbers = Array(Lotto.NUMBER_COUNT + 1)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());
    const bonusNumber = winningNumbers.pop();
    const numbers = [
      ...winningNumbers.slice(0, 4),
      ...Array(Lotto.NUMBER_COUNT - 4)
        .fill()
        .map((_, index) => Lotto.NUMBER_MAX - index),
    ].sort(() => 0.5 - Math.random());

    const availableRewards = [
      new Reward('5개 일치', 15_000_000, (numberCount) => numberCount === 5),
      new Reward('4개 일치', 50_000, (numberCount) => numberCount === 4),
      new Reward('3개 일치', 5_000, (numberCount) => numberCount === 3),
    ];
    const reward = availableRewards[0];

    const winningLotto = new WinningLotto(new Lotto(winningNumbers), bonusNumber, availableRewards);
    const lotto = new Lotto(numbers);

    expect(winningLotto.getRewardFor(lotto)).toEqual(reward);
  });
});
