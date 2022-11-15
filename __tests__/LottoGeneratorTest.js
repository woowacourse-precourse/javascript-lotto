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
});
