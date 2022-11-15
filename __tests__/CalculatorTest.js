const Calculator = require('../src/Calculator');

describe('Calculator 클래스  테스트', () => {
  test('총당첨액 계산 기능', () => {
    const inputs = [
      [5, 5, 5],
      [3, 4, 5],
      [3, 3, 3],
    ];

    const answers = [15000, 1555000, 4500000];

    inputs.forEach((input, index) => {
      expect(Calculator.totalWinningAmount(input)).toEqual(answers[index]);
    });
  });

  test('1000원 단위로 나누어 갯수 계산하는 기능', () => {
    const inputs = [2000, 4000, 5000];
    const answers = [2, 4, 5];

    inputs.forEach((input, index) => {
      expect(Calculator.divideUnit(input)).toEqual(answers[index]);
    });
  });

  test('소수점 2자리에서 반올림하여 계산하는기능', () => {
    const inputs = [22.46, 25.45, 49.22];
    const answers = [22.5, 25.4, 49.2];

    inputs.forEach((input, i) => {
      expect(Calculator.toFixedNumber(input)).toBe(answers[i]);
    });
  });
});
