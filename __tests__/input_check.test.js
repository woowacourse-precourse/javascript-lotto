const InputCheck = require('../src/components/util/InputCheck');

describe('inputCheck 클래스 테스트', () => {
  let inputCheck;

  describe('isNumber 함수 확인', () => {
    it('올바른 숫자를 입력하였을 때', () => {
      inputCheck = new InputCheck(2000);
      expect(inputCheck.isNumber()).toBe(undefined);
    });

    it('올바르지 않은 값을 입력하였을 때 false', () => {
      inputCheck = new InputCheck('안녕');
      expect(() => {
        inputCheck.isNumber();
      }).toThrow();
    });
  });

  describe('canNotBuy 함수 확인', () => {
    it('복권을 구매할 수 있음', () => {
      inputCheck = new InputCheck(5000);
      expect(inputCheck.canNotBuy()).toBeFalsy();
    });

    it('복권을 구매할 수 없음', () => {
      inputCheck = new InputCheck(3333);
      expect(inputCheck.canNotBuy()).toBeTruthy();
    });
  });

  describe('howManyBuy 함수 확인', () => {
    it('5개 구매가능', () => {
      inputCheck = new InputCheck(5000);
      expect(inputCheck.howManyBuy()).toBe(5);
    });
  });

  describe('userInputNumber 함수 확인', () => {
    it('올바른 숫자를 입력하였을 때 input 10_000 return 10', () => {
      inputCheck = new InputCheck(10_000);
      expect(inputCheck.userInputNumber()).toBe(10);
    });

    it('올바르지 않은 숫자를 입력하였을 때 throw', () => {
      inputCheck = new InputCheck(5555);
      expect(() => {
        inputCheck.userInputNumber();
      }).toThrow('[ERROR] 로또 구입 금액이 올바르지 않습니다');
    });
  });
});
