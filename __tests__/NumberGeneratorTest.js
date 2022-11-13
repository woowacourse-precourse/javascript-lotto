const NumberGenerator = require('../src/NumberGenerator');
const { Random } = require('@woowacourse/mission-utils');

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

describe('번호 생성기 클래스 테스트', () => {
  test('6개의 임의의 숫자가 정렬되어 생성된다.', () => {
    const randomNumbers = [5, 3, 4, 1, 6, 2];
    const expected = [1, 2, 3, 4, 5, 6];
    mockRandoms([randomNumbers]);
    expect(NumberGenerator.generateRandomNumbers()).toEqual(expected);
  });
});
