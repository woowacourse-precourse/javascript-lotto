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

  describe('순위 테스트', () => {
    test('당첨 번호 5개와 보너스 번호를 맞추면 2등이다.', () => {
      const winNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const ranking = new Lotto([3, 6, 1, 4, 2, 7]).rank(winNumbers, bonusNumber);

      expect(ranking).toEqual(2);
    });
  });
});
