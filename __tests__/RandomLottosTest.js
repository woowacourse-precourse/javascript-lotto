const MissionUtils = require('@woowacourse/mission-utils');
const RandomLottos = require('../src/RandomLottos');
const WinningLotto = require('../src/WinningLotto');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};
describe('로또 성적 테스트', () => {
  test('case1', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
    ]);
    const randomLottos = new RandomLottos(2);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonus(45);
    const result = [0, 0, 1, 0, 1];
    expect(randomLottos.getPrizeResult(winningLotto))
      .toEqual(result);
  });
  test('case2', () => {
    mockRandoms([
      [4, 5, 6, 7, 8, 9],
      [3, 4, 5, 6, 7, 8],
      [2, 3, 4, 5, 6, 45],
    ]);
    const randomLottos = new RandomLottos(3);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonus(45);
    const result = [1, 1, 0, 1, 0];
    expect(randomLottos.getPrizeResult(winningLotto)).toEqual(result);
  });
  test('case3', () => {
    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [2, 3, 4, 5, 6, 8],
      [3, 4, 5, 6, 7, 8],
      [4, 5, 6, 7, 8, 9],
    ]);
    const randomLottos = new RandomLottos(5);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
    winningLotto.setBonus(7);
    const result = [1, 1, 1, 1, 1];
    expect(randomLottos.getPrizeResult(winningLotto)).toEqual(result);
  });
});
