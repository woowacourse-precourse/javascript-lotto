const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  describe('예외 테스트', () => {
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
  });

  describe('순위 계산 테스트', () => {
    const winNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    test('6개 번호 일치는 1등이다.', () => {
      const ranking = new Lotto([1, 2, 3, 4, 5, 6]).rank(winNumbers, bonusNumber);
      expect(ranking).toEqual(1);
    });

    test('5개 번호 + 보너스 번호 일치는 2등이다.', () => {
      const ranking = new Lotto([2, 3, 4, 5, 6, 7]).rank(winNumbers, bonusNumber);
      expect(ranking).toEqual(2);
    });

    test('3개 번호 일치는 5등이다.', () => {
      const ranking = new Lotto([4, 5, 6, 11, 12, 13]).rank(winNumbers, bonusNumber);
      expect(ranking).toEqual(5);
    });

    test('3개 번호 + 보너스 번호 일치는 5등이다.', () => {
      const ranking = new Lotto([4, 5, 6, 7, 11, 12]).rank(winNumbers, bonusNumber);
      expect(ranking).toEqual(5);
    });

    test('당첨이 안되면 0을 반환한다.', () => {
      const ranking = new Lotto([5, 6, 7, 11, 12, 13]).rank(winNumbers, bonusNumber);
      expect(ranking).toEqual(0);
    });
  });
});
