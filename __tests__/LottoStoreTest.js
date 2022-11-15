const LottoStore = require('../src/LottoStore');
const MissionUtils = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoStore 테스트', () => {
  test('createLottoNumbers는 1부터 45까지의 숫자 중 6개를 랜덤하게 뽑아서 오름차순으로 정렬한 배열을 반환한다.', () => {
    mockRandoms([[21, 8, 23, 41, 43, 42]]);
    const lottoStore = new LottoStore();
    lottoStore.rule = {
      winningNumberCount: 6,
      range: {
        min: 1,
        max: 45,
      },
    };
    const lottoNumbers = lottoStore.createLottoNumbers();
    expect(lottoNumbers).toEqual([8, 21, 23, 41, 42, 43]);
  });

  test('sellLottos는 구입 금액을 입력받아 구입 금액에 해당하는 개수만큼 로또를 반환한다.', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
    ]);
    const lottoStore = new LottoStore();
    lottoStore.rule = {
      winningNumberCount: 6,
      range: {
        min: 1,
        max: 45,
      },
    };
    const lottos = lottoStore.sellLottos(4000);
    expect(lottos.length).toBe(4);
  });
});
