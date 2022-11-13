const BonusNumber = require('../src/Model/BonusNumber');
const Lotto = require('../src/Model/Lotto');

describe('보너스 숫자 클래스 테스트', () => {
  test('보너스 번호가 정답로또 번호를 포함하면 오류발생', () => {
    expect(() => {
      new BonusNumber(new Lotto([1, 2, 3, 4, 5, 6]), 6);
    }).toThrow('[ERROR]');
  });
});
