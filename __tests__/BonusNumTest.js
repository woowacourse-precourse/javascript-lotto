const BonusNum = require('../src/validation/BonusNum');

describe("보너스 번호 클래스 테스트", () => {
  test('보너스 번호가 1에서 45가 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '0');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
    
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '46');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
    
    expect(() => {
      new BonusNum('1,2,3,4,5,6', ' ');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
    
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
  });

  test('보너스 번호가 정수가 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      new BonusNum('1,2,3,4,5,6', 'a');
    }).toThrow('[ERROR] 정수를 입력해주세요.');
    
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '1.44');
    }).toThrow('[ERROR] 정수를 입력해주세요.');
    
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '.');
    }).toThrow('[ERROR] 정수를 입력해주세요.');
  });

  test('보너스 번호가 숫자가 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '7.');
    }).toThrow('[ERROR] 숫자만 입력해주세요.')
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '7 ');
    }).toThrow('[ERROR] 숫자만 입력해주세요.')
  })

  test('보너스 번호가 당첨번호와 겹치는 경우 예외처리 한다.', () => {
    expect(() => {
      new BonusNum('1,2,3,4,5,6', '1');
    }).toThrow('[ERROR] 당첨번호와 중복되는 숫자입니다.');
  });
});