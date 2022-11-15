const { LOTTO_ERROR_MESSAGE } = require('../src/constants');
const LottoNumberUtil = require('../src/LottoNumberUtil');

describe('LottoNumberUtil 테스트', () => {
  describe('사용자가 입력한 구입금액을 1000원으로 나누어 떨어지는지 확인', () => {
    test('천원으로 안나누어 떨어질때', () => {
      expect(() => LottoNumberUtil.validateMoney(1001)).toThrow(
        LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_AMOUNT_ERROR
      );
    });

    test('입력이 숫자가 아닐때', () => {
      expect(() => LottoNumberUtil.validateMoney('1000je')).toThrow(
        LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_AMOUNT_ERROR
      );
    });
  });

  describe('사용자가 입력한 당첨번호 길이가 6인지 확인', () => {
    test('6보다 클 때', () => {
      expect(() =>
        LottoNumberUtil.validateLength([1, 2, 3, 4, 5, 6, 7])
      ).toThrow(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_LENGTH_ERROR);
    });

    test('6보다 작을 때', () => {
      expect(() => LottoNumberUtil.validateLength([1, 2, 3, 4])).toThrow(
        LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_LENGTH_ERROR
      );
    });
  });

  describe('사용자가 입력한 당첨번호가 중복 되었을때 ', () => {
    test('에러나는지 확인', () => {
      expect(() =>
        LottoNumberUtil.validateDuplication([1, 2, 3, 3, 5, 6, 7])
      ).toThrow(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_DOUBLE_ERROR);
    });
  });

  describe('사용자가 입력한 당첨번호가 1부터 45 사이의 숫자가 아닐때 ', () => {
    test('에러나는지 확인', () => {
      expect(() =>
        LottoNumberUtil.validateRange([0, 2, 3, 4, 5, 6, 7])
      ).toThrow(LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR);
    });

    test('사용자가 입력한 당첨번호가 숫자가 아닐때', () => {
      expect(() => LottoNumberUtil.validateRange([1, 2, 3, 4, 5, 5.5])).toThrow(
        LOTTO_ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR
      );
    });
  });

  test('숫자 소수점 두번째에서 반올림', () => {
    expect(LottoNumberUtil.roundCustom(12.345)).toEqual(12.35);
  });
});
