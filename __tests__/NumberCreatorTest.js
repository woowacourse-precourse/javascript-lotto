const NumberCreator = require('../src/controller/NumberCreator');

describe('NumberCreator 클래스 테스트', () => {
  test('기능 테스트: 서로 중복되지 않는 6개의 랜덤 숫자를 생성한다.', () => {
    let numbers = new NumberCreator().getRandomSixNumbers();

    expect(numbers).toHaveLength(6);
    expect(numbers.length).toEqual(new Set(numbers).size);

    numbers.every((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
      expect(number).not.toBeNaN();
    });
  });
});
