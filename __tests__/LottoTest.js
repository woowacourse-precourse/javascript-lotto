const BonusValidate = require('../src/BonusValidate');
const LottoValidate = require('../src/LottoValidate');

describe('로또 번호와 보너스 번호 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new LottoValidate([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoValidate([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호는 중복될 수 없습니다.');
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoValidate([1, 2, 3, 4, 5, 46]);
    }).toThrow('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
  });

  test('보너스 번호가 로또 번호와 중복이면 예외가 발생한다.', () => {
    expect(() => {
      new BonusValidate([1, 2, 3, 4, 5, 6], 6);
    }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });

  test('보너스 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new BonusValidate([1, 2, 3, 4, 5, 6], 46);
    }).toThrow('[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.');
  });
});
