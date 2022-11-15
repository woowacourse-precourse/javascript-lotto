const MissionUtils = require('@woowacourse/mission-utils');
const UserInput = require('../src/UserInput');

describe.each([
  ['1000', 1],
  ['4000', 4],
  ['99000', 99],
  ['55000', 55],
  ['2000', 2],
])('%s장으로 몇 장을 살 수 있나요: %d)', (result, expected) => {
  test('테스트', () => {
    expect(UserInput.numofLotts(result)).toBe(expected);
  });
});
