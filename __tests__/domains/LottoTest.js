/* eslint-disable no-new */
/* eslint-disable max-lines-per-function */
const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('../../src/Lotto');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 도메인 테스트', () => {
  test(`로또 번호의 개수가 ${Lotto.NUMBER_COUNT}개가 넘어가면 예외가 발생한다.`, () => {
    const numbers = Array.from(Lotto.NUMBER_COUNT + 1)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test(`로또 번호의 개수가 ${Lotto.NUMBER_COUNT}개 보다 부족하면 예외가 발생한다.`, () => {
    const numbers = Array(Lotto.NUMBER_COUNT - 1)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test(`로또 번호는 ${Lotto.NUMBER_MIN}보다 작을 수 없다.`, () => {
    const numbers = Array(Lotto.NUMBER_COUNT)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index - 1)
      .sort(() => 0.5 - Math.random());

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test(`로또 번호는 ${Lotto.NUMBER_MAX}보다 클 수 없다.`, () => {
    const numbers = Array(Lotto.NUMBER_COUNT)
      .fill()
      .map((_, index) => Lotto.NUMBER_MAX - index + 1)
      .sort(() => 0.5 - Math.random());

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const numbers = [
      Lotto.NUMBER_MIN,
      ...Array(Lotto.NUMBER_COUNT - 1)
        .fill()
        .map((_, index) => Lotto.NUMBER_MIN + index),
    ].sort(() => 0.5 - Math.random());

    expect(() => {
      new Lotto(numbers);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 오름차순으로 정렬이 되어야 한다.', () => {
    const numbers = Array(Lotto.NUMBER_COUNT)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());

    expect(new Lotto(numbers.reverse()).getNumbers()).toEqual(numbers);
  });

  test('로또가 랜덤으로 생성이 되어야 한다.', () => {
    const numbers = Array(Lotto.NUMBER_COUNT)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());

    mockRandoms([numbers]);

    expect(Lotto.fromRandom().getNumbers()).toEqual(numbers);
  });

  test('로또에 특정 번호가 포함되어 있는지 확인할 수 있어야 한다.', () => {
    const numbers = Array(Lotto.NUMBER_COUNT)
      .fill()
      .map((_, index) => Lotto.NUMBER_MIN + index)
      .sort(() => 0.5 - Math.random());

    expect(new Lotto(numbers).hasNumber(numbers[0])).toBe(true);
  });
});
