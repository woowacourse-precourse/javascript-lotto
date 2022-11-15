/* eslint-disable */

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

  test('로또 번호에 1-45의 범위를 벗어난다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 자연수가 아닌 다른 타입이 들어간다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1.5, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 숫자가 아닌 문자열 혹은 기호가 들어간다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 'test', 3, 4, 5, 46]);
    }).toThrow('[ERROR]');
  });
});
