/* eslint-disable max-lines-per-function */
const Lotto = require('../src/Lotto');

const throwException = (numbers) => {
  expect(() => {
    new Lotto(numbers);
  }).toThrow('[ERROR]');
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    throwException([1, 2, 3, 4, 5, 6, 7]);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    throwException([1, 2, 3, 4, 5, 5]);
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    throwException([1, 2, 3, 4, 'a', 6]);
  });

  test('로또 번호가 0이하의 숫자일 때 예외가 발생한다.', () => {
    throwException([0, 1, 2, 3, 4, 5]);
  });

  test('로또 번호가 46이상의 숫자일 때 예외가 발생한다.', () => {
    throwException([1, 2, 3, 4, 5, 46]);
  });

  // 아래에 추가 테스트 작성 가능
});
