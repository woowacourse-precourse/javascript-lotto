const MissionUtils = require('@woowacourse/mission-utils');

const LottoGenerator = require('../src/lotto/LottoGenerator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoGenerator 클래스 테스트', () => {
  test('로또 게임 랜덤 번호 생성 테스트', () => {
    mockRandoms([[1, 2, 3, 4, 6, 5]]);
    expect(LottoGenerator.generate().getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 게임을 주어진 개수만큼 랜덤으로 생성하는 테스트', () => {
    const answer = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 4, 6, 8, 10],
      [4, 5, 6, 7, 8, 9],
    ];
    mockRandoms([
      [1, 4, 3, 2, 5, 6],
      [2, 6, 4, 8, 10, 1],
      [9, 8, 7, 6, 5, 4],
    ]);

    const lottos = LottoGenerator.generatedByCount(3);
    lottos.forEach((lotto, index) => {
      expect(lotto.getNumbers()).toEqual(answer[index]);
    });
  });
});
