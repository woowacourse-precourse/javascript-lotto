const Lotto = require('../src/Lotto');

const { ERROR } = require('../src/lib/constants/error');
const { LOTTO } = require('../src/lib/constants/lotto');

describe('로또 클래스 테스트', () => {
  test(`로또 번호의 개수가 ${LOTTO.NUMBER_COUNT}개가 넘어가면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.LOTTO.NOT_LOTTO_LENGTH);
  });

  test(`로또 번호의 개수가 ${LOTTO.NUMBER_COUNT}개 미만이면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR.LOTTO.NOT_LOTTO_LENGTH);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.LOTTO.DUPLICATE);
  });

  test(`로또 번호에 ${LOTTO.MIN_NUMBER_LIMIT} 이상 ${LOTTO.MAX_NUMBER_LIMIT} 이하가 아닌 숫자가 있으면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR.LOTTO.OUT_OF_BOUND);
  });

  test('올바른 로또 번호가 인자로 들어오면 해당 번호를 갖는 로또를 생성한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.numbers;

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
