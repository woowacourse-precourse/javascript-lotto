const WinNums = require('../src/validation/WinNums');

describe("당첨 번호 클래스 테스트", () => {
  test('당첨 번호의 숫자 범위가 1에서 45가 아니면 예외 처리한다.', () => {
    expect(() => {
      new WinNums('0,1,2,3,4,5');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
    
    expect(() => {
      new WinNums('1,2,3,4,5,56');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
    
    expect(() => {
      new WinNums(' ');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
    
    expect(() => {
      new WinNums('');
    }).toThrow('[ERROR] 1에서 45사이의 수를 입력해주세요.');
  });
  
  test('당첨 번호 입력 시 수가 중복되는 경우 예외 처리한다.', () => {
    expect(() => {
      new WinNums('1,2,3,4,5,5');
    }).toThrow('[ERROR] 당첨번호에 중복되는 숫자가 있습니다.');
  });
  
  test('당첨 번호 입력 시 번호 수가 6개가 아니라면 예외 처리한다.', () => {
    expect(() => {
      new WinNums('1,2,3,4,5,6,7');
    }).toThrow('[ERROR] 숫자 여섯개를 입력해주세요.');
    
    expect(() => {
      new WinNums('.');
    }).toThrow('[ERROR] 숫자 여섯개를 입력해주세요.');
  });

  test('당첨 번호 입력 시 정수가 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      new WinNums('a,1,2,3,4,5');
    }).toThrow('[ERROR] 정수를 입력해주세요.');
  });

  test('당첨 번호 입력 시 공백이 있거나 온점이 있는 경우 예외 처리한다.', () => {
    expect(() => {
      new WinNums('1, 2, 3, 4, 5, 6');
    }).toThrow('[ERROR] 숫자만 입력해주세요.');
    
    expect(() => {
      new WinNums('1., 2., 3., 4., 5., 6.');
    }).toThrow('[ERROR] 숫자만 입력해주세요.');
    
    expect(() => {
      new WinNums('1.,2.,3.,4.,5.,6.');
    }).toThrow('[ERROR] 숫자만 입력해주세요.');
  });
});