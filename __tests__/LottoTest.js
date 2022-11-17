const Lotto = require('../src/Lotto');
const {
  checkAccountValidation,
  checkBonusValidation,
} = require('../src/libs/ui/Ui');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('1, 2, 3, 4, 5, 6, 7').validate('1, 2, 3, 4, 5, 6, 7');
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto('1, 2, 3, 4, 5, 5').validate('1, 2, 3, 4, 5, 5');
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능
  test('입력 금액이 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      checkAccountValidation('1abc23');
    }).toThrow('[ERROR]');
  });

  test('입력 금액이 1000원 미만이면 예외가 발생한다.', () => {
    expect(() => {
      checkAccountValidation('900');
    }).toThrow('[ERROR]');
  });

  test('입력 금액이 1000원 단위가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      checkAccountValidation('100100');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      checkBonusValidation('ab', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 로또 번호와 중복되는 경우 예외가 발생한다.', () => {
    expect(() => {
      checkBonusValidation('1', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1부터 45사이가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      checkBonusValidation('46', [1, 2, 3, 4, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
