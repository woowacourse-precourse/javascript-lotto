/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
// const MissionUtils = require('@woowacourse/mission-utils');
const Function = require('../src/Function');

describe('App 클래스 테스트', () => {
  test('Number가 아닌 타입에 대해서 Error를 발생하는지 테스트', () => {
    expect(() => {
      Function.validateTypeNumber(Number('1000j'));
    }).toThrow('[ERROR]');
  });

  test('1000보다 작은 자리수를 가지고 있는지 validation이 가능한가', () => {
    expect(() => {
      Function.validateUnitRemainder(1030);
    }).toThrow('[ERROR');
  });

  test('array의 길이에 따른 validation이 가능한가', () => {
    const example = [1, 2, 3, 4, 5, 6, 7];
    expect(() => {
      Function.validateLength(example);
    }).toThrow('[ERROR]');
  });

  test('array에 곂치는 수가 들어있는지 validation이 가능한가', () => {
    const example = [1, 2, 3, 4, 5, 5];
    expect(() => {
      Function.validateOverlapNumbers(example);
    }).toThrow('[ERROR]');
  });

  test('입력값이 제한 범위에 알맞게 입력되었는지 validation할 수 있는가', () => {
    expect(() => {
      Function.validateRange(48);
    }).toThrow('[ERROR]');
  });
});
