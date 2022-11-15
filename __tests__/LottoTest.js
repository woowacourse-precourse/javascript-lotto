/* eslint-disable */

const Lotto = require('../src/Lotto');

const ERROR_TEST_CASES = [
  ['로또 번호의 개수는 6개를 넘어서는 안 된다.', [1, 2, 3, 4, 5, 6, 7]],
  ['로또 번호에는 중복된 수가 있어서는 안 된다.', [1, 2, 3, 4, 5, 5]],
  ['로또 번호는 자연수여야 한다', [1, 2, 3, 4, 5, 6.7]],
  ['로또 번호는 1 이상이어야 한다', [0, 1, 2, 3, 4, 5]],
  ['로또 번호는 45 이하여야 한다', [32, 44, 46, 30, 7, 1]],
];

const CORRECT_TEST_CASES = [
  [[1, 2, 3, 4, 5, 6]],
  [[3, 45, 43, 12, 33, 26]],
  [[40, 41, 42, 43, 44, 45]],
  [[9, 11, 39, 3, 1, 22]],
];

describe('잘못된 입력에 대한 예외 테스트', () => {
  test.each(ERROR_TEST_CASES)('%p', (_, data) => {
    expect(() => new Lotto(data)).toThrow('[ERROR]');
  });
});

describe('올바른 입력에 대한 테스트', () => {
  test.each(CORRECT_TEST_CASES)('', (data) => {
    expect(() => new Lotto(data)).not.toThrow();
  });
});
