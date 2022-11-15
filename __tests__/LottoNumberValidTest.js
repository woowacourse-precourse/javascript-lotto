const { Console, Random } = require('@woowacourse/mission-utils');
const Lotto = require('../src/Lotto');
const {
  THOUSAND,
  LOTTO_LENGTH,
  LOTTO_SIZE_ERROR,
  LOTTO_SAME_NUMBER_ERROR,
  FIRST_RANGE,
  LOTTO_WIN,
  LOTTO_WIN_SEPERATOR,
  LOTTO_BONUS,
} = require('../src/MESSAGE');

test('중복이 있는 로또 번호,로또번호가 6자리가 아니라면 에러가 발생함', () => {
  expect(() => {
    new Lotto([1, 2, 3, 3, 4, 5]);
  }).toThrow('[ERROR]');
});

test('중복이 있는 로또 번호,로또번호가 6자리가 아니라면 에러가 발생함', () => {
  expect(() => {
    new Lotto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }).toThrow('[ERROR]');
});
