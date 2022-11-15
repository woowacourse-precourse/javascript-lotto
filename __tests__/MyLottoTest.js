const MyLotto = require('../src/MyLotto');
const myLotto = new MyLotto();

describe('내 로또 번호 테스트', () => {
  test('숫자는 중복되지 않습니다', () => {
    const input = myLotto.generateRandom();
    const result = [...new Set(input)];
    expect(result).toEqual(input);
  });
  test('숫자는 1에서 45 사이입니다.', () => {
    const input = myLotto.generateRandom();
    input.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });
  test('숫자는 6개입니다', () => {
    const input = myLotto.generateRandom();
    const result = input.length;
    expect(result).toBe(6);
  });
  test('숫자는 오름차순으로 정렬되어 있습니다', () => {
    const input = myLotto.generateRandom();
    const result = input.sort((a, b) => a - b);
    expect(result).toBe(input);
  });
});
