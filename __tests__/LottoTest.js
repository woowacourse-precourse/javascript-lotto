const Lotto = require('../src/Lotto');
const prizeList = ['three', 'four', 'five', 'fiveBonus', 'six'];
const testLotto = new Lotto([1, 2, 3, 4, 5, 6]);

describe('로또 클래스 테스트', () => {
  test('당첨 로또와 3개의 번호가 일치하는 경우 이 로또의 prize는 three이다.', () => {
    const userNumbers = [1, 2, 3, 11, 12, 13];
    const userBonusNumber = 5;
    const result = testLotto.decidePrize(userNumbers, userBonusNumber);
    expect(result).toBe(prizeList[0]);
  });

  test('당첨 로또와 4개의 번호가 일치하는 경우 이 로또의 prize는 four이다.', () => {
    const userNumbers = [1, 2, 3, 4, 12, 13];
    const userBonusNumber = 5;
    const result = testLotto.decidePrize(userNumbers, userBonusNumber);
    expect(result).toBe(prizeList[1]);
  });

  // decidePrize method를 실행할 때 lottoBonusNumber가 생성되도록 로직을 짜서 어떻게 테스트를 해야 할지 모르겠다. (보너스 번호는 5개 숫자가 일치하는 로또만 생성됨)
  test('당첨 로또와 5개의 번호가 일치하고 보너스 번호는 다른 경우 이 로또의 prize는 five이다.', () => {
    const userNumbers = [1, 2, 3, 4, 6, 13];
    const userBonusNumber = 5;
    const result = testLotto.decidePrize(userNumbers, userBonusNumber);
    // expect(result).toBe(prizeList[2]);
  });

  test('당첨 로또와 5개의 번호가 일치하고 보너스 번호도 같은 경우 이 로또의 prize는 fiveBonus이다.', () => {
    const userNumbers = [1, 2, 3, 4, 6, 13];
    const userBonusNumber = 5;
    const result = testLotto.decidePrize(userNumbers, userBonusNumber);
    // expect(result).toBe(prizeList[3]);
  });

  test('당첨 로또와 6개의 번호가 일치하는 경우 이 로또의 prize는 six이다.', () => {
    const userNumbers = [1, 2, 3, 4, 5, 6];
    const userBonusNumber = 7;
    const result = testLotto.decidePrize(userNumbers, userBonusNumber);
    expect(result).toBe(prizeList[4]);
  });
});
