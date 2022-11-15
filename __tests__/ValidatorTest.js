const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('../src/Validator');


describe('입력 공통 예외 테스트', () => {
  test('빈 값 입력 예외 테스트', () => {
    const input = '';

    expect(() => {
      Validator.isBlank(input);
    }).toThrow('[ERROR] 필수 입력 값을 입력해주세요.');
  });

  test('숫자 입력 예외 테스트', () => {
    const input = 'asd';

    expect(() => {
      Validator.isNumber(input);
    }).toThrow('[ERROR] 숫자가 아닙니다.');
  });
  
});