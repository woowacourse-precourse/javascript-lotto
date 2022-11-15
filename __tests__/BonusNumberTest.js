const BonusNumber = require('../src/model/BonusNumber');

describe('BonusNumber 클래스 테스트', () => {
  test('기능 테스트: 보너스 번호를 생성한다.', () => {
    let bonusNumber = 18;
    let winningNumber = [1, 2, 3, 4, 5, 6];
    expect(
      new BonusNumber(bonusNumber, winningNumber).getBonusNumber()
    ).toEqual(18);
  });

  test('예외 테스트: 보너스 번호가 문자나 기호라면 예외가 발생한다.', () => {
    let bonusNumber = Number('보너스 번호');
    let winningNumber = [1, 2, 3, 4, 5, 6];
    expect(() => {
      new BonusNumber(bonusNumber, winningNumber);
    }).toThrow(
      '[ERROR] 문자, 특수기호를 제외한 1 ~ 45 사이의 숫자만 입력해야 합니다.'
    );
  });

  test('예외 테스트: 보너스 번호가 1 미만 45 초과된 숫자라면 예외가 발생한다.', () => {
    let bonusNumber = 100;
    let winningNumber = [1, 2, 3, 4, 5, 6];
    expect(() => {
      new BonusNumber(bonusNumber, winningNumber);
    }).toThrow('[ERROR] 1 ~ 45 범위 이내의 숫자만 입력해야 합니다.');
  });

  test('예외 테스트: 보너스 번호가 당첨 번호와 중복된다면 예외 발생한다.', () => {
    let bonusNumber = 1;
    let winningNumber = [1, 2, 3, 4, 5, 6];
    expect(() => {
      new BonusNumber(bonusNumber, winningNumber);
    }).toThrow(
      '[ERROR] 당첨 번호에 포함된 숫자를 보너스 번호로 지정할 수 없습니다.'
    );
  });
});
