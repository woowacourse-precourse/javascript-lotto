const NumberCreator = require('../src/NumberCreator');

describe('NumberCreator 테스트', () => {
  test('기능 테스트: 6개의 랜덤 숫자 생성하기', () => {
    const numberCreator = new NumberCreator();
    let numbers = numberCreator.getRandomSixNumbers();

    expect(numbers).toHaveLength(6);
    expect(numbers.length).toEqual(new Set(numbers).size);
    numbers.every((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
      expect(number).not.toBeNaN();
    });
  });
});
