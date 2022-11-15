const appUtils = require('../src/utils/appUtils');
const APP = require('../src/constants/app');
const LOTTO = require('../src/constants/lotto');
const ERROR_MESSAGE = require('../src/constants/errorMessages');

describe('금액 입력 테스트', () => {
  test('숫자가 아닌 문자를 입력한 경우', () => {
    const amount = 'abc';
    const notANumberError = new Error(ERROR_MESSAGE.AMOUNT_ERROR);

    expect(() => appUtils.validateAmount(amount)).toThrowError(notANumberError);
  });

  test(`${APP.MINIMUM_AMOUNT}원으로 나눠떨어지지 않는 경우`, () => {
    const amount = '1500';
    const divideError = new Error(ERROR_MESSAGE.DIVISIBLE_ERROR);

    expect(() => appUtils.validateAmount(amount)).toThrowError(divideError);
  });

  test('정상 입력', () => {
    const amount = '1000';

    expect(appUtils.validateAmount(amount)).toBeUndefined();
  });
});

describe('당첨 번호 입력 테스트', () => {
  test('","가 아닌 다른 문자를 사용한 경우 혹은 사용하지 않은 경우', () => {
    const input = '1.2.34,,5.6';
    const separatorError = new Error(ERROR_MESSAGE.SEPARATOR_ERROR);

    expect(() => appUtils.validatePrizeNumbers(input)).toThrowError(separatorError);
  });

  test('6개의 숫자를 입력하지 않은 경우', () => {
    const input = '1,2,3,4,5';
    const lengthError = new Error(ERROR_MESSAGE.LENGTH_ERROR);

    expect(() => appUtils.validatePrizeNumbers(input)).toThrowError(lengthError);
  });

  test('숫자가 아닌 문자를 입력한 경우', () => {
    const input = '1,2,3,1a,4,5';
    const notANumberError = new Error(ERROR_MESSAGE.NOT_A_NUMBER);

    expect(() => appUtils.validatePrizeNumbers(input)).toThrowError(notANumberError);
  });

  test(`${LOTTO.FIRST_NUMBER} ~ ${LOTTO.LAST_NUMBER}사이의 숫자가 아닌 경우`, () => {
    const input = '1,2,10,100,16,48';
    const rangeError = new Error(ERROR_MESSAGE.RANGE_ERROR);

    expect(() => appUtils.validatePrizeNumbers(input)).toThrowError(rangeError);
  });

  test('중복된 숫자가 있는 경우', () => {
    const input = '1,2,10,10,16,48';
    const duplicateError = new Error(ERROR_MESSAGE.DUPLICATE_ERROR);

    expect(() => appUtils.validatePrizeNumbers(input)).toThrowError(duplicateError);
  });

  test('정상 입력', () => {
    const input = '1,2,3,4,5,6';

    expect(appUtils.validatePrizeNumbers(input)).toBeUndefined();
  });
});

describe('보너스 번호 입력 테스트', () => {
  const prizeNumbers = [1, 2, 3, 4, 5, 6];

  test('숫자가 아닌 문자인 경우', () => {
    const input = 'a';
    const notANumberError = new Error(ERROR_MESSAGE.NOT_A_NUMBER);

    expect(() => appUtils.validateBonusNumber(input, prizeNumbers)).toThrowError(notANumberError);
  });

  test(`${LOTTO.FIRST_NUMBER} ~ ${LOTTO.LAST_NUMBER}사이의 숫자가 아닌 경우`, () => {
    const input = '100';
    const rangeError = new Error(ERROR_MESSAGE.RANGE_ERROR);

    expect(() => appUtils.validateBonusNumber(input, prizeNumbers)).toThrowError(rangeError);
  });

  test('중복된 숫자가 있는 경우', () => {
    const input = '1';
    const duplicateError = new Error(ERROR_MESSAGE.DUPLICATE_ERROR);

    expect(() => appUtils.validateBonusNumber(input, prizeNumbers)).toThrowError(duplicateError);
  });

  test('정상 입력', () => {
    const input = '7';

    expect(appUtils.validateBonusNumber(input, prizeNumbers)).toBeUndefined();
  });
});
