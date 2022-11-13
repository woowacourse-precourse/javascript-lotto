const appUtils = require('../src/utils/appUtils');
const APP = require('../src/constants/app');
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
