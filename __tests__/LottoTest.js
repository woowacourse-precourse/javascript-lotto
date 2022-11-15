const Lotto = require('../src/models/Lotto');

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

  describe('당첨 번호 유효성 검사', () => {
    test('사용자가 입력하지 않을 경우', () => {
      expect(() => {
        new Lotto([]);
      }).toThrow('[ERROR]');
    });

    test('사용자가 로또 번호를 6개 초과 입력할 경우', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow('[ERROR]');
    });

    test('사용자가 로또 번호를 6개 미만 입력할 경우', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4]);
      }).toThrow('[ERROR]');
    });

    test('사용자가 중복된 숫자를 입력할 경우', () => {
      expect(() => {
        new Lotto([1, 2, 1, 2, 1, 2]);
      }).toThrow('[ERROR]');
    });

    test('사용자가 1 ~ 45의 숫자가 아닌 다른 숫자를 입력할 경우', () => {
      expect(() => {
        new Lotto([1, 0, 46, 100, 10, 4]);
      }).toThrow('[ERROR]');
    });
  });

  describe('보너스 번호 유효성 검사', () => {
    test('사용자가 입력하지 않을 경우', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6]).setBonus();
      }).toThrow('[ERROR]');
    });

    test('1 ~ 45의 숫자가 아닌 다른 숫자를 입력할 경우', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6]).setBonus(46);
      }).toThrow('[ERROR]');
    });

    test('로또 당첨 번호와 중복되는 보너스 번호를 입력할 경우', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6]).setBonus(6);
      }).toThrow('[ERROR]');
    });
  });
});
