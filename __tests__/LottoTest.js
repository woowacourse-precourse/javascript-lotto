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
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 쉽표로 구분되지 않으면 오류가 난다.', () => {
    expect(() => {
      new Lotto([123456]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정해진 범위를 벗어나면 오류가 난다.(0보다 작은 경우)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 34, -1]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정해진 범위를 벗어나면 오류가 난다.(45보다 큰 경우)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 34, 78]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 정해진 범위를 벗어나면 오류가 난다.(0)', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 34, 0]);
    }).toThrow('[ERROR]');
  });

  test('0으로 시작하는 문자가 있을시 오류가 발생한다.', () => {
    expect(() => {
      new Lotto(['1', '2', '3', '4', '34', '06']);
    }).toThrow('[ERROR]');
  });
});
