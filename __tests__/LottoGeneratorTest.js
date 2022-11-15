const MissionUtils = require('@woowacourse/mission-utils');
const LottoGenerator = require('../src/LottoGenerator');

afterAll(() => MissionUtils.Console.close());

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange
  );
};

test('로또 발행 테스트', () => {
  const count = 3;
  const randoms = [
    [6, 2, 3, 4, 5, 1],
    [11, 31, 35, 40, 22, 13],
    [41, 3, 5, 1, 17, 9],
  ];

  mockRandoms(randoms);

  expect(LottoGenerator.issueLottoAsManyAsCount(count)).toEqual([
    [1, 2, 3, 4, 5, 6],
    [11, 13, 22, 31, 35, 40],
    [1, 3, 5, 9, 17, 41],
  ]);
});
