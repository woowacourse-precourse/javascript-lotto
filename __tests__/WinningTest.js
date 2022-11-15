const Winning = require('../src/components/Winning');
const { ERROR } = require('../src/data/constants');

describe('로또 당첨번호 입력 테스트', () => {
  test('잘못된 입력 형식 테스트', () => {
    expect(() => {
      const win = new Winning("1, 2. 3' 4. 5[ 6.");
      console.log(win.winningNumber);
    }).toThrow(ERROR.NUMBER_WAY);
  });
  test('숫자 중복 테스트', () => {
    expect(() => {
      new Winning('1,2,3,4,4,5');
    }).toThrow(ERROR.NOT_UNIQUE);
  });
  test('숫자 범위 테스트', () => {
    expect(() => {
      new Winning('1,2,3,4,0,25');
    }).toThrow(ERROR.LOTTO_RANGE);
  });
  test('보너스 번호 형식 테스트', () => {
    expect(() => {
      const win = new Winning('1,2,3,4,5,6');
      win.setBonusNum('1, 2, 3');
    }).toThrow(ERROR.BONUS_COUNT);
  });
  test('보너스 번호 범위 테스트', () => {
    expect(() => {
      const win = new Winning('1,2,3,4,5,6');
      win.setBonusNum('0');
    }).toThrow(ERROR.LOTTO_RANGE);
  });
  test('보너스 번호 중복 테스트', () => {
    expect(() => {
      const win = new Winning('1,2,3,4,5,6');
      win.setBonusNum('1');
    }).toThrow(ERROR.NOT_UNIQUE);
  });
});
