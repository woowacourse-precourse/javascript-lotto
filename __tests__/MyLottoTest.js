const MyLotto = require('../src/MyLotto');

describe('로또 구매 테스트', () => {
  test('구입 금액에 숫자가 아닌 입력이 주어지면 예외가 발생한다.', () => {
    expect(() => {
      new MyLotto('105aa6');
    }).toThrow('[ERROR] 구입 금액은 숫자여야 합니다.');
  });

  test('구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new MyLotto('50006');
    }).toThrow('[ERROR] 구입 금액은 1000단위여야 합니다.');
  });
});

describe('로또 발행 테스트', () => {
  test('로또 발행 개수가 정확한지 확인한다.', () => {
    const myLotto = new MyLotto('8000');

    myLotto.purchase();
    expect(myLotto.myLotto.length).toBe(8);
  });

  test('로또 번호가 6개인지 확인한다.', () => {
    const myLotto = new MyLotto('8000');
    myLotto.purchase();

    const numbersList = myLotto.myLotto;
    numbersList.forEach((numbers) => {
      expect(numbers.length).toBe(6);
    });
  });
});
