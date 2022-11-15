const Bonus = require('../src/Bonus');
const Lotto = require('../src/Lotto');

describe('Bonus 클래스 테스트', () => {
  test('잘못된 보너스 번호를 입력한 경우 에러처리', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const values = [
      // 숫자가 1~45까지 범위를 초과할 경우 (ex: 0, 46 등 불가)
      '0',
      '46',
      // 번호가 아닐 경우 (ex: 음수, 소수 등 불가)
      '-1',
      '0.1',
      // 숫자가 아닐 경우 (ex: 알파벳, 한글, 특수문자 등 불가)
      'a',
      'ㄱ',
      '!',
      // 당첨 번호와 중복될 경우
      '6',
    ];

    values.forEach((value) => {
      expect(() => {
        new Bonus(value, lotto);
      }).toThrow('[ERROR]');
    });
  });

  test('사용자가 구매한 로또 번호와 보너스 번호 비교', () => {
    const winningNumber = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusNumber = new Bonus('7', winningNumber);
    values = [
      // [보너스 번호의 포함 여부, 사용자가 구매한 로또 번호]
      [true, [2, 3, 4, 5, 6, 7]],
      [false, [1, 2, 3, 4, 5, 6]],
    ];

    values.map(([hasBonus, lotto]) => {
      expect(bonusNumber.compare(lotto)).toEqual(hasBonus);
    });
  });
});
