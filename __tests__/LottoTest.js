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

  // 아래에 추가 테스트 작성 가능
  test('당첨 번호와 중복된 보너스 번호를 입력한 경우 에러처리', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.isBonusValid(6)).toBe(false);
  });

  test('사용자가 구매한 로또 번호와 당첨 번호 비교', () => {
    const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
    values = [
      // [일치 개수, 사용자가 구매한 로또 번호]
      [0, [7, 8, 9, 10, 11, 12]],
      [1, [6, 7, 8, 9, 10, 11]],
      [2, [5, 6, 7, 8, 9, 10]],
      [3, [4, 5, 6, 7, 8, 9]],
      [4, [3, 4, 5, 6, 7, 8]],
      [5, [2, 3, 4, 5, 6, 7]],
      [6, [1, 2, 3, 4, 5, 6]],
    ];

    values.map(([numberOfMatches, lotto]) => {
      expect(winningNumber.compare(lotto)).toEqual(numberOfMatches);
    });
  });
});
