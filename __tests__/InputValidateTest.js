const Display = require('../src/Display');

const {
  isDuplicatedAndThrowError,
  isOutOfRangeAndThrowError,
  isOutOfVolumeAndThrowError,
} = require('../src/utils/inputValidate');

describe('사용자 입력값 에러 테스트', () => {
  test('중복 여부를 확인한다.', () => {
    expect(() => {
      isDuplicatedAndThrowError([1, 2, 3, 4, 5, 5, 7]);
    }).toThrow(Display.error('DUPLICATED'));
  });

  test('숫자 범위는 1-45까지이며 유효하지 않으면 예외가 발생한다', () => {
    expect(() => {
      isOutOfRangeAndThrowError([45, 1, 2, 3, 4, 56]);
    }).toThrow(Display.error('OUT_OF_RANGE'));
  });

  test('주어진 숫자 입력값 길이와 동일하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      isOutOfVolumeAndThrowError([1, 2, 3, 4, 5, 6], 5);
    }).toThrow(Display.error('OUT_OF_VOLUME'));
  });
});
