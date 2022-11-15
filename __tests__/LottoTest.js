const Lotto = require('../src/components/Lotto');
const { makeErrorMsg } = require('../src/utils/index');
const { ERROR_MESSAGE } = require('../src/constants/index');

describe('로또 클래스 테스트', () => {
  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.LOTTO_NUMBER);
    expect(() => {
      new Lotto(['1', '2', '3', '4', '5', '6']);
    }).toThrow(errorMsg);
  });

  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.LOTTO_NUMBER_LENGTH);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(errorMsg);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.LOTTO_DUPLICATION);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(errorMsg);
  });

  test('로또 번호의 숫자 범위가 1~45 사이가 아니면 예외가 발생한다', () => {
    const errorMsg = makeErrorMsg(ERROR_MESSAGE.RANGE);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(errorMsg);
  });

  test('로또의 qrCode를 통해 로또 번호를 읽을 수 있다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getQrCode()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
