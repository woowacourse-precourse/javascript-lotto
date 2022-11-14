/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
const Lotto = require('../../src/Lotto');

describe('로또 도메인 테스트', () => {
  test(`로또 번호의 개수가 ${Lotto.NUMBER_COUNT}개가 넘어가면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto(Array(Lotto.NUMBER_COUNT + 1).fill((_, index) => Lotto.NUMBER_MIN + index));
    }).toThrow('[ERROR]');
  });

  test(`로또 번호의 개수가 ${Lotto.NUMBER_COUNT}개 보다 부족하면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto(Array(Lotto.NUMBER_COUNT - 1).fill((_, index) => Lotto.NUMBER_MIN + index));
    }).toThrow('[ERROR]');
  });

  test(`로또 번호는 ${Lotto.NUMBER_MIN}보다 작을 수 없다.`, () => {
    expect(() => {
      new Lotto(Array(Lotto.NUMBER_COUNT).fill((_, index) => Lotto.NUMBER_MIN + index - 1));
    }).toThrow('[ERROR]');
  });

  test(`로또 번호는 ${Lotto.NUMBER_MAX}보다 클 수 없다.`, () => {
    expect(() => {
      new Lotto(Array(Lotto.NUMBER_COUNT).fill((_, index) => Lotto.NUMBER_MAX - index + 1));
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([
        Lotto.NUMBER_MIN,
        ...Array(Lotto.NUMBER_COUNT - 1).fill((_, index) => Lotto.NUMBER_MIN + index),
      ]);
    }).toThrow('[ERROR]');
  });
});
