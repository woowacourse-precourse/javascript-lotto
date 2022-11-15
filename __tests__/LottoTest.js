const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 6개의 숫자를 입력하셔야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 중복된 번호를 입력하셨습니다.');
  });

  test('로또 번호에 숫자외 다른 것이 입력되면 예외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'hello!']);
    }).toThrow('[ERROR] 자연수만 입력 가능합니다.');
  });

  test('로또 번호에 소수가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.8]);
    }).toThrow('[ERROR] 자연수만 입력 가능합니다.');
  });
});
