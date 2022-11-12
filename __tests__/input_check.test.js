const InputCheck = require('../src/components/util/InputCheck');
const LottoNumberData = require('../src/components/lotto_data/LottoNumberData');

describe('inputCheck 클래스 테스트', () => {
  let inputCheck;

  beforeEach(() => {
    inputCheck = new InputCheck();
  });

  describe('isNumber 함수 확인', () => {
    it('올바른 숫자를 입력하였을 때', () => {
      expect(inputCheck.isNumber('2000')).toBe(undefined);
    });

    it('올바르지 않은 값을 입력하였을 때 false', () => {
      expect(() => {
        inputCheck.isNumber('안녕');
      }).toThrow();
    });
  });

  describe('canNotBuy 함수 확인', () => {
    it('복권을 구매할 수 있음', () => {
      expect(inputCheck.canNotBuy('5000')).toBeFalsy();
    });

    it('복권을 구매할 수 없음', () => {
      expect(inputCheck.canNotBuy('3333')).toBeTruthy();
    });
  });

  describe('howManyBuy 함수 확인', () => {
    it('5개 구매가능', () => {
      expect(inputCheck.howManyBuy('5000')).toBe(5);
    });
  });

  describe('userInputNumber 함수 확인', () => {
    it('올바른 숫자를 입력하였을 때 input 10000 return 10', () => {
      expect(inputCheck.userInputNumber('10000')).toBe(10);
    });

    it('올바르지 않은 숫자를 입력하였을 때 throw', () => {
      expect(() => {
        inputCheck.userInputNumber('5555');
      }).toThrow('[ERROR] 로또 구입 금액이 올바르지 않습니다');
    });
  });

  describe('userWinningNumber 함수 확인', () => {
    it('올바른 값 입력', () => {
      expect(inputCheck.userWinningNumber('1,2,3,4,5,6')).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
      ]);
    });

    it('문자를 입력했을 때', () => {
      expect(() => {
        inputCheck.userWinningNumber('테,스,트,중,중,중');
      }).toThrow('[ERROR] 당첨번호가 올바르지 않습니다.');
    });

    it('쉼표로 숫자를 구분하지 않았을 때', () => {
      expect(() => {
        inputCheck.userWinningNumber('123456');
      }).toThrow('[ERROR] 당첨번호 사이를 쉼표로 구분해주세요');
    });
  });

  describe('userBonusNumber 함수 확인', () => {
    it('문자가 입력되었을 때', () => {
      expect(() => {
        inputCheck.userBonusNumber('안뇽하세용');
      }).toThrow('[ERROR] 숫자이외의 문자가 존재합니다.');
    });

    it('undefined를 받았을 때', () => {
      expect(() => {
        inputCheck.userBonusNumber(undefined);
      }).toThrow('[ERROR] 숫자이외의 문자가 존재합니다.');
    });

    it('올바른 값', () => {
      LottoNumberData.winning = ['11', '12', '13', '14', '15', '16'];
      expect(inputCheck.userBonusNumber('44')).toBe('44');
    });

    it('보너스 번호가 당첨번호와 중첩', () => {
      LottoNumberData.winning = ['11', '12', '13', '14', '15', '16'];
      expect(() => {
        inputCheck.userBonusNumber('13');
      }).toThrow('[ERROR] 당첨번호와 중복되는 숫자가 존재합니다.');
    });
    it('보너스 번호가 1~45범위를 벗어날 때', () => {
      expect(() => {
        inputCheck.userBonusNumber('46');
      }).toThrow('[ERROR] 보너스 번호가 올바르지 않습니다.');

      expect(() => {
        inputCheck.userBonusNumber('0');
      }).toThrow('[ERROR] 보너스 번호가 올바르지 않습니다.');
    });
  });
});
