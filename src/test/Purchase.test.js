const Purchase = require('../Purchase');

describe('로또 구매 테스트', () => {
  test('구입 금액에 숫자가 아닌 입력이 주어지면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('105aa6');
    }).toThrow('[ERROR] 구입 금액은 숫자여야 합니다.');
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Purchase('50006');
    }).toThrow('[ERROR] 구입 금액은 1000단위여야 합니다.');
  });
});

describe('로또 발행 테스트', () => {
  test('로또 발행 개수가 정확한지 확인한다.', () => {
    const purchase = new Purchase('8000');

    expect(purchase.numberList.length).toBe(8);
  });

  test('로또 번호가 6개인지 확인한다.', () => {
    const purchase = new Purchase('8000');
    const numberList = purchase.numberList;

    numberList.forEach((number) => expect(number.length).toBe(6));
  });
});

describe('발행 로또 출력 테스트', () => {
  test('로또가 제대로 발행됐는지 확인한다.', () => {
    const lotto = [
      [41, 21, 43, 8, 42, 23],
      [16, 5, 38, 3, 32, 11],
      [35, 11, 44, 7, 36, 16],
      [31, 8, 42, 1, 41, 11],
      [38, 14, 45, 13, 42, 16],
      [40, 11, 43, 7, 42, 30],
      [32, 13, 45, 2, 38, 22],
      [14, 3, 45, 1, 22, 5],
    ];
    const result = `8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
`;
    const purchase = new Purchase('8000');

    purchase.numberList = lotto;
    expect(purchase.print()).toBe(result);
  });
});
