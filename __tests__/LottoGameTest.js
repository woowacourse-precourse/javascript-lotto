const Input = require('../src/Input');

describe('로또 번호 비교', () => {
  test('일치하는 번호 개수 확인하는 테스트.', () => {
    const input = new Input();
    input.winningNumbers = [1, 4, 6, 8, 10, 12];
    const result = input.countCorrectNumbers([1, 6, 12, 14, 19, 21]);

    expect(result).toEqual(3);
  });

  test('로또 등수 확인하는 테스트1.', () => {
    const input = new Input();
    input.winningNumbers = [1, 2, 3, 4, 5, 6];
    input.bonusNumber = 7;
    const result = input.getLottoRank(5);

    expect(result).toEqual(3);
  });

  test('로또 등수 확인하는 테스트2.', () => {
    const input = new Input();
    input.winningNumbers = [1, 2, 3, 4, 5, 6];
    input.bonusNumber = 3;
    const result = input.getLottoRank(5);

    expect(result).toEqual(2);
  });
});
