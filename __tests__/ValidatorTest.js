const MissionUtils = require('@woowacourse/mission-utils');
const Validator = require('../src/Validator');


describe('입력 공통 예외 테스트', () => {
  test('빈 값 입력 예외 테스트', () => {
    const input = '';

    expect(() => {
      Validator.isBlank(input);
    }).toThrow('[ERROR] 필수 입력 값을 입력해주세요.');
  });

  test('숫자 입력 예외 테스트', () => {
    const input = 'asd';

    expect(() => {
      Validator.isNumber(input);
    }).toThrow('[ERROR] 숫자가 아닙니다.');
  });

  describe('구입금액 입력 예외 테스트', () => {
    test('구입금액 단위 테스트', () => {
      const input = '23900';
  
      expect(() => {
        Validator.inputPurchase(input);
      }).toThrow('[ERROR] 1000단위로 입력하세요.');
    });
  });

  describe('당첨번호 입력 예외 테스트', () => {
    test('당첨번호 입력 범위 예외 테스트', () => {
      const input = [1, 2, 3, 5, 11, 47];
  
      expect(() => {
        Validator.inputWinNumber(input);
      }).toThrow('[ERROR] 1-45사이의 수를 입력하세요.');
    });
  });

  describe('보너스번호 입력 예외 테스트', () => {
    test('보너스 번호 입력 범위 예외 테스트', () => {
      const input = '55';
  
      expect(() => {
        Validator.isBonusRange(input);
      }).toThrow('[ERROR] 1-45사이의 수를 입력하세요.');
    });

    test('보너스 번호 입력 예외', () => {
      const bonusNumber = '2';
      const winNumberList = '2,4,5,6,23,53';
  
      expect(() => {
        Validator.inputBonusNumber(bonusNumber, winNumberList);
      }).toThrow('[ERROR] 보너스 번호는 다른 값을 입력하세요.');
    });
  })

});