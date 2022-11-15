const UserInput = require('../src/UserInput');

test('유저의 입력값 정규식으로 판별', () => {
  expect(UserInput.validate('123')).toBe(true);
  expect(UserInput.validate('숫자가 아닌 문자열')).toBe(false);
  expect(UserInput.validate('456819301')).toBe(true);
  expect(UserInput.validate('')).toBe(false);
  expect(UserInput.validate('[1,2,3]')).toBe(false);
});
