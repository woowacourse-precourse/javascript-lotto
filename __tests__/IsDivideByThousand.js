const MissionUtils = require('@woowacourse/mission-utils');
const UserInput = require('../src/UserInput');

describe.each([
  ['1000', true],
  ['999', false],
  ['1', false],
  ['4000', true],
  ['99999', false],
  ['80000', true],
  ['100000', true],
])('%s원이 1000원으로 나누어 떨어지나요 : %d)', (result, expected) => {
  test('테스트', () => {
    expect(UserInput.DivideByThousand(result)).toBe(expected);
  });
});
