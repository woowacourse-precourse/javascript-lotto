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
});
