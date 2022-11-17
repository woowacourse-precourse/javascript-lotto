const Lotto = require('../src/Lotto');

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

  test('로또 번호가 1부터 45 사이의 수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 10, 40, 50, 60]);
    }).toThrow('[ERROR]');
  });

  test('getMatchCount 테스트 / 당첨 번호와 비교하여 맞춘 개수를 반환한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const answer = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
      [1, 2, 7, 8, 9, 10],
      [1, 7, 8, 9, 10, 11],
      [7, 8, 9, 10, 11, 12],
    ];
    const result = [6, 5, 4, 3, 2, 1, 0];

    answer.forEach((arr, index) => expect(lotto.getMatchCount(arr)).toBe(result[index]));
  });

  test('hasBonusNumber 테스트 / 보너스 번호를 가지고 있는지 검사한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const answer = [1, 2, 3, 4, 5, 6];
    const result = [true, true, true, true, true, true, false, false, false, false];

    answer.forEach((bonusNumber, index) => {
      result[index]
        ? expect(lotto.getLottoNumbers(bonusNumber)).toBeTruthy()
        : expect(lotto.getLottoNumbers(bonusNumber)).toBeFalsy();
    });
  });
});
