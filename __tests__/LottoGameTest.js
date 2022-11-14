const Input = require('../src/Input');

describe('로또 번호 비교', () => {
  test('일치하는 번호 개수 확인하는 테스트.', () => {
    const input = new Input();
    input.winningNumbers = [1, 4, 6, 8, 10, 12];
    const result = input.countCorrectNumbers([1, 6, 12, 14, 19, 21]);

    expect(result).toEqual(3);
  });
});
