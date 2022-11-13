const { Console } = require('@woowacourse/mission-utils');

const Lotto = require('../src/Lotto');

afterAll(() => Console.close());

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 1미만 45초과의 숫자가 있으면 예외가 발생한다.', () => {
    const lottos = [
      [0, 1, 2, 3, 4, 5],
      [46, 1, 2, 3, 4, 5],
    ];

    lottos.forEach((lotto) => {
      expect(() => {
        new Lotto(lotto);
      }).toThrow('[ERROR]');
    });
  });

  test('두 배열이 모두 가진 숫자 요소의 개수를 반환한다.', () => {
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 5, 8, 31, 24, 45],
      [5, 6, 7, 8, 9, 10],
    ];
    const winningNumbers = [
      [3, 4, 5, 6, 1, 2],
      [8, 1, 44, 31, 9, 10],
      [11, 12, 13, 14, 15, 16],
    ];
    const answers = [6, 3, 0];

    lottoNumbers.forEach((lotto, i) => {
      const ILotto = new Lotto(winningNumbers[i]);
      expect(ILotto.getMatchingNumCount(lotto)).toBe(answers[i]);
    });
  });

  test('하나의 로또에 대한 당첨 등수를 반환한다.', () => {
    const matchingCounts = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6];
    const matchesBonusNums = [
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
    ];
    const answers = [-1, -1, 4, 4, 3, 3, 2, 1, 0, 0];

    matchingCounts.forEach((count, i) => {
      const ILotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(ILotto.getWinningRanking(count, matchesBonusNums[i])).toBe(
        answers[i]
      );
    });
  });
});
