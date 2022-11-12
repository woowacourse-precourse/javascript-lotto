const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 발행 테스트', () => {
  test('예외: 로또 번호의 개수가 6개 초과', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow('[ERROR]');
  });

  test('예외: 로또 번호에 중복된 숫자가 있음', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
  });

  test('정상: 자동 로또 번호 생성', () => {
    const randomLotto = [16, 26, 29, 31, 36, 8];
    const correctOutput = randomLotto.sort((a, b) => a - b).join(', ');

    mockRandoms([randomLotto]);

    let lotto = new Lotto();
    lotto = lotto.toString(', ');
    expect(lotto).toEqual(correctOutput);
  });

  test('정상: 수동 로또 번호 입력', () => {
    const myLotto = [16, 26, 29, 31, 36, 8];
    const correctOutput = myLotto.sort((a, b) => a - b).join(', ');

    let lotto = new Lotto(myLotto);
    lotto = lotto.toString(', ');
    expect(lotto).toEqual(correctOutput);
  });
});
