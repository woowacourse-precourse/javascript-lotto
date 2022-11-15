const Display = require('../src/Display');
const { isDuplicatedAndThrowError } = require('../src/utils/inputValidate');

describe('사용자 입력값 에러 테스트', () => {
  test('중복 여부를 확인한다.', () => {
    expect(() => {
      isDuplicatedAndThrowError([1, 2, 3, 4, 5, 5, 7]);
    }).toThrow(Display.error('DUPLICATED'));
  });
});
