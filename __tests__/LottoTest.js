const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
  });

  test('자동 로또 번호 생성 성공', () => {
    const randomLotto = [16, 26, 29, 31, 36, 8];
    const correctOutput = randomLotto.sort((a, b) => a - b).join(', ');

    mockRandoms([randomLotto]);

    let lotto = new Lotto();
    lotto = lotto.toString(', ');
    expect(lotto).toEqual(correctOutput);
  });

  test('수동 로또 번호 입력 성공', () => {
    const myLotto = [16, 26, 29, 31, 36, 8];
    const correctOutput = myLotto.sort((a, b) => a - b).join(', ');

    let lotto = new Lotto(myLotto);
    lotto = lotto.toString(', ');
    expect(lotto).toEqual(correctOutput);
  });
});
