const BonusNumber = require('../src/Model/BonusNumber');
const Lotto = require('../src/Model/Lotto');

describe('보너스 숫자 클래스 테스트', () => {
  test('보너스 번호가 정답로또 번호를 포함하면 오류발생', () => {
    expect(() => {
      new BonusNumber(new Lotto([1, 2, 3, 4, 5, 6]), 6);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 문자면 오류 발생', () => {
    expect(() => {
      new BonusNumber(new Lotto([1, 2, 3, 4, 5, 6]), '가');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 범위를 넘어가면 오류 발생', () => {
    expect(() => {
      new BonusNumber(new Lotto([1, 2, 3, 4, 5, 6]), -1);
    }).toThrow('[ERROR]');
  });
});
