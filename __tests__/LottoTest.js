const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.2', () => {
    expect(() => {
      new Lotto([5, 10, 11, 12, 13, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.3', () => {
    expect(() => {
      new Lotto([5, 5, 5, 5, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호의 개수가 6개 미만일때 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, '사', '오', 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 'a', 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 유효하지 않으면(정수가 아니면) 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 1.5, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자 범위를 벗어나면 예외가 발생한다.1', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 21, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 음수가 나오면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자 범위를 벗어나면 예외가 발생한다.2', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자 범위를 벗어나면 예외가 발생한다.3', () => {
    expect(() => {
      new Lotto([1, 10, 20, 30, 40, 50]);
    }).toThrow('[ERROR]');
  });

  test('큰 값 로또 번호 테스트', () => {
    let lotto = new Lotto([40, 41, 42, 43, 44, 45]);
    expect(lotto.getLotto()).toEqual([40, 41, 42, 43, 44, 45]);
  });

  test('큰 값 로또 번호 테스트', () => {
    let lotto = new Lotto([40, 41, 42, 43, 44, 45]);
    expect(lotto.getLotto()).toEqual([40, 41, 42, 43, 44, 45]);
  });

  test('큰 값 로또 번호 테스트2', () => {
    let lotto = new Lotto([10, 11, 12, 13, 14, 25]);
    expect(lotto.getLotto()).toEqual([10, 11, 12, 13, 14, 25]);
  });

  test('유효한 로또 번호 테스트', () => {
    let lotto = new Lotto([43, 3, 8, 11, 22, 1]);
    expect(lotto.getLotto()).toEqual([43, 3, 8, 11, 22, 1]);
  });

  test('유효한 로또 번호 테스트2', () => {
    let lotto = new Lotto([45, 44, 43, 42, 41, 40]);
    expect(lotto.getLotto()).toEqual([45, 44, 43, 42, 41, 40]);
  });
});
