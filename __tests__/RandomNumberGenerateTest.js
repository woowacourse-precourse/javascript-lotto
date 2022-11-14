const randomNumbers = require('../src/RandomNumbers');

describe('pickUniqueNumbersInRange 테스트', () => {
  test('서로 다른 6자리 숫자가 있는지 확인', () => {
    const randomNumber = randomNumbers.generate();

    expect(randomNumber.every((number) => isNaN(number))).toBeFalsy();
    expect([...new Set(randomNumber)]).toHaveLength(6);
  });
});
