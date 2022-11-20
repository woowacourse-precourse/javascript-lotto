const { Console } = require('@woowacourse/mission-utils');

const User = require('../../src/User');
const { USER_ERROR } = require('../../src/constants/error.constants');

describe('사용자 구매 로또 예외처리 테스트', () => {
  test('예외 상황 - 사용자 지불 금액이 정수가 아닌 경우', () => {
    userInput = 'a';
    // 사용자 입력 userInput은 Number(userInput) 처리되어 User.validate의 인수로 전달된다.
    const expenditure = Number(userInput);
    expect(() => {
      User.validate(expenditure);
    }).toThrow(USER_ERROR.NOT_INTEGER);
  });
  test('예외 상황 - 사용자 지불 금액이 음수인 경우', () => {
    userInput = '-6000';
    const expenditure = Number(userInput);
    expect(() => {
      User.validate(expenditure);
    }).toThrow(USER_ERROR.NOT_POSITIVE);
  });
  test('예외 상황 - 사용자 지불 금액이 1000원 단위로 나뉘지 못하는 경우', () => {
    userInput = '5390';
    const expenditure = Number(userInput);
    expect(() => {
      User.validate(expenditure);
    }).toThrow(USER_ERROR.NOT_DIVISIBLE);
  });
  test('예외 상황 - 사용자 지불 금액이 최대 정수 범위를 초과한 경우', () => {
    userInput = Number.MAX_SAFE_INTEGER + 1;
    const expenditure = Number(userInput);
    expect(() => {
      User.validate(expenditure);
    }).toThrow(USER_ERROR.OVER_RANGE);
  });
});
