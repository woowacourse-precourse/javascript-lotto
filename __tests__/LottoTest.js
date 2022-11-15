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

  test('로또 번호는 오름차순으로 정렬', () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.toString()).toContain('[1, 2, 3, 4, 5, 6]');
  });

  test('getRank 메서드는 당첨 순위를 반환', () => {
    const numbers = [
      [8, 21, 23, 31, 32, 33],
      [8, 21, 23, 31, 32, 34],
      [8, 21, 23, 31, 32, 35],
      [8, 21, 23, 31, 36, 37],
      [8, 21, 23, 36, 37, 38],
    ];
    const lottos = numbers.map(number => new Lotto(number));
    const winningNumbers = [8, 21, 23, 31, 32, 33];
    const bonusNumber = 34;
    const ranks = lottos.map(lotto =>
      lotto.getRank(winningNumbers, bonusNumber),
    );

    expect(ranks).toEqual([1, 2, 3, 4, 5]);
  });
});
