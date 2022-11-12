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

  test('예외: 입력 번호가 숫자가 아님', () => {
    expect(() => new Lotto([1, 3, 5, 7, '사랑해요', 11])).toThrow('[ERROR]');
  });

  test('예외: 입력 번호가 숫자 형태지만 숫자는 아님', () => {
    expect(() => new Lotto(['1', '3', '5', '7', '9', '11'])).toThrow('[ERROR]');
  });

  test('예외: 입력 번호가 범위를 벗어남', () => {
    expect(() => new Lotto([0, 1, 2, 3, 4, 5])).toThrow('[ERROR]');
  });

  test('예외: 입력 번호가 범위를 벗어남', () => {
    expect(() => new Lotto([41, 42, 43, 44, 45, 46])).toThrow('[ERROR]');
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

describe('로또 당첨&보너스 번호 검사', () => {
  test('정상', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;

    expect(() => Lotto.validateWinningNumbers(winningNumbers, bonusNumber)).not.toThrow();
  });

  test('예외: 보너스 번호가 숫자가 아닐 경우', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = '11';

    expect(() => Lotto.validateWinningNumbers(winningNumbers, bonusNumber)).toThrow('[ERROR]');
  });

  test('예외: 보너스 번호가 1개가 아닐 경우', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = [11, 22];

    expect(() => Lotto.validateWinningNumbers(winningNumbers, bonusNumber)).toThrow('[ERROR]');
  });

  test('예외: 보너스 번호가 당첨 번호와 중복될 경우', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 36;

    expect(() => Lotto.validateWinningNumbers(winningNumbers, bonusNumber)).toThrow('[ERROR]');
  });

  test('예외: 보너스 번호가 정해진 범위 밖일 경우', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 121687;

    expect(() => Lotto.validateWinningNumbers(winningNumbers, bonusNumber)).toThrow('[ERROR]');
  });
});

describe('로또 번호 맞추기 기능 검사', () => {
  test('0개 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [1, 2, 3, 4, 5, 6];

    const lotto = new Lotto(myNumbers);
    const { matchCount } = lotto.match(winningNumbers, bonusNumber);
    expect(matchCount).toEqual(0);
  });

  test('1개 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [1, 2, 3, 4, 5, 8];

    const lotto = new Lotto(myNumbers);
    const { matchCount } = lotto.match(winningNumbers, bonusNumber);
    expect(matchCount).toEqual(1);
  });

  test('2개 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [1, 2, 3, 4, 36, 8];

    const lotto = new Lotto(myNumbers);
    const { matchCount } = lotto.match(winningNumbers, bonusNumber);
    expect(matchCount).toEqual(2);
  });

  test('3개 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [1, 2, 3, 8, 36, 31];

    const lotto = new Lotto(myNumbers);
    const { matchCount } = lotto.match(winningNumbers, bonusNumber);
    expect(matchCount).toEqual(3);
  });

  test('4개 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [1, 2, 29, 8, 36, 31];

    const lotto = new Lotto(myNumbers);
    const { matchCount } = lotto.match(winningNumbers, bonusNumber);
    expect(matchCount).toEqual(4);
  });

  test('5개 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [1, 26, 29, 31, 36, 8];

    const lotto = new Lotto(myNumbers);
    const { matchCount } = lotto.match(winningNumbers, bonusNumber);
    expect(matchCount).toEqual(5);
  });

  test('6개 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [8, 16, 26, 29, 31, 36];

    const lotto = new Lotto(myNumbers);
    const { matchCount } = lotto.match(winningNumbers, bonusNumber);
    expect(matchCount).toEqual(6);
  });

  test('보너스 번호 틀림', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [8, 16, 26, 29, 31, 36];

    const lotto = new Lotto(myNumbers);
    const { bonusMatchBool } = lotto.match(winningNumbers, bonusNumber);
    expect(bonusMatchBool).toEqual(false);
  });

  test('보너스 번호 맞음', () => {
    const winningNumbers = [16, 26, 29, 31, 36, 8];
    const bonusNumber = 11;
    const myNumbers = [11, 16, 26, 29, 31, 36];

    const lotto = new Lotto(myNumbers);
    const { bonusMatchBool } = lotto.match(winningNumbers, bonusNumber);
    expect(bonusMatchBool).toEqual(true);
  });
});
