const { getArrayToCustomMessage, isLessThanNumber } = require('../src/lib/Utils');

describe('Utils 함수 getArrayToCustomMessage 태스트', () => {
  test('쉼표를 쉼표와 공백으로 변경한다.', () => {
    const numberList = [1, 2, 3, 4, 5, 6];
    const message = getArrayToCustomMessage(numberList);
    expect(message).toBe('[1, 2, 3, 4, 5, 6]');
  });
});

describe('Utils 함수 isLessThanNumber 태스트', () => {
  test('10은 15보다 작은 수이다. - (1)', () => {
    const min = 10;
    const max = 15;

    const lessResult = isLessThanNumber(min, max);

    expect(lessResult).toBeTruthy();
  });
  test('10은 15보다 작은 수이다. - (2)', () => {
    const min = 10;
    const max = 15;

    const lessResult = isLessThanNumber(max, min);

    expect(lessResult).toBeFalsy();
  });
});
