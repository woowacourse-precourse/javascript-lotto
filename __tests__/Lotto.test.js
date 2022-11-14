const Lotto = require('../src/components/number-check/Lotto');
const {
  LottoNumberData,
} = require('../src/components/lotto-data/LottoNumberData');

jest.mock('../src/components/lotto-data/LottoNumberData');

describe('Lotto 클래스 테스트', () => {
  let lotto;

  describe('checkUserInputMoney 메서드 확인', () => {
    it('올바른 금액을 입력했을 때 (string number)', () => {
      lotto = new Lotto('8000');
      expect(lotto.checkUserInputMoney()).toBe(8);
    });

    it('올바른 금액을 입력했을 때', () => {
      lotto = new Lotto(8000);
      expect(lotto.checkUserInputMoney()).toBe(8);
    });

    it('[error] 공백이 입력되었을 때', () => {
      lotto = new Lotto('안녕');
      expect(() => {
        lotto.checkUserInputMoney();
      }).toThrow();
    });

    it('[error] 문자를 입력했을 때', () => {
      lotto = new Lotto('안녕');
      expect(() => {
        lotto.checkUserInputMoney();
      }).toThrow();
    });

    it('[error] 숫자와 문자가 섞어 입력했을 때', () => {
      lotto = new Lotto('안녕123굿');
      expect(() => lotto.checkUserInputMoney()).toThrow();
    });

    it('[error] 1000원 단위로 알맞게 나누어 떨어지지 않을 때', () => {
      lotto = new Lotto('8888');
      expect(() => lotto.checkUserInputMoney()).toThrow();
    });

    describe('- checkOnlyNumber 메서드 확인', () => {
      it('올바른 값인 숫자만 입력하였을 때', () => {
        lotto = new Lotto('5000');
        expect(lotto.checkOnlyNumber()).toBeUndefined();
      });

      it('[error] 문자를 입력하였을 때', () => {
        lotto = new Lotto('와복권1등당첨이다!');
        expect(() => lotto.checkOnlyNumber()).toThrow();
      });
    });

    describe('- checkCanBuy 메서드 확인', () => {
      it('1000단위로 딱 나누어 떨어질 때 ', () => {
        lotto = new Lotto('8000');
        expect(lotto.checkCanBuy()).toBeUndefined();
      });

      it('[error] 1000단위로 딱 나누어지지 않을 때 ', () => {
        lotto = new Lotto('8888');
        expect(() => lotto.checkCanBuy()).toThrow();
      });
    });
  });

  describe('checkUserWinningNumber 메서드 확인', () => {
    it('조건에 맞는 숫자 6개를 쉼표로 구분하며 입력시', () => {
      lotto = new Lotto('11,12,13,14,15,16');
      expect(lotto.checkUserWinningNumber()).toEqual([
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
      ]);
    });

    it('[error] 공백이 입력되었을 때', () => {
      lotto = new Lotto('');
      expect(() => lotto.checkUserWinningNumber()).toThrow();
    });

    it('[error] 당첨 번호를 쉼표로 구분하지 않았을 때', () => {
      lotto = new Lotto('123456');
      expect(() => lotto.checkUserWinningNumber()).toThrow();

      lotto = new Lotto('1 2 3 4 5 6');
      expect(() => lotto.checkUserWinningNumber()).toThrow();
    });

    it('[error] 숫자이외의 문자가 포함되었을 때', () => {
      lotto = new Lotto('복,권,당,첨,되,나');
      expect(() => lotto.checkUserWinningNumber()).toThrow();
    });

    it('[error] 6개의 당첨번호를 입력하지 않았을 때', () => {
      lotto = new Lotto('1,2,3,4,5 ');
      expect(() => lotto.checkUserWinningNumber()).toThrow();

      lotto = new Lotto('1,2,3,4,5,6,7,8 ');
      expect(() => lotto.checkUserWinningNumber()).toThrow();
    });

    it('[error] 숫자의 범위과 1~45에 포함되지 않을 때', () => {
      lotto = new Lotto('1,2,3,4,47,2');
      expect(() => lotto.checkUserWinningNumber()).toThrow();
    });

    describe('- checkDistinguishedByCommas 메소드 확인', () => {
      it('올바른 값을 입력했을 때', () => {
        lotto = new Lotto('1,2,3,4,5,6');
        lotto.splitNumbers();
        expect(lotto.checkSixWinningNumbers()).toBeUndefined();
      });
      it('[error] 당첨번호 사이를 쉼표로 구분하지 않았을 때', () => {
        lotto = new Lotto('123456');
        lotto.splitNumbers();
        expect(() => lotto.checkDistinguishedByCommas()).toThrow();
      });
    });

    describe('- checkSixWinningNumbers 메서드 확인', () => {
      it('올바른 값을 입력했을 때', () => {
        lotto = new Lotto('1,2,3,4,5,6');
        lotto.splitNumbers();
        expect(lotto.checkSixWinningNumbers()).toBeUndefined();
      });
      it('[error]당첨번호가 6개가 아닐 때 ', () => {
        lotto = new Lotto('1,2,3,4,5,6,7');
        lotto.splitNumbers();
        expect(() => lotto.checkSixWinningNumbers()).toThrow();

        lotto = new Lotto('1,2,3,4');
        lotto.splitNumbers();
        expect(() => lotto.checkSixWinningNumbers()).toThrow();
      });
    });

    describe('- checkOnlyNumbers 메서드 확인', () => {
      it('올바른 값을 입력했을 때', () => {
        lotto = new Lotto('1,2,3,4,5,6');
        lotto.splitNumbers();
        expect(lotto.checkOnlyNumbers()).toBeUndefined();
      });
      it('[error] 숫자이외의 문자가 포함되었을 때', () => {
        lotto = new Lotto('1,2,3,4,뿅,6');
        lotto.splitNumbers();
        expect(() => lotto.checkOnlyNumbers()).toThrow();
      });
    });

    describe('- checkNumberRangesFrom1To45ForArray 메서드 확인', () => {
      it('올바른 값을 입력했을 때', () => {
        lotto = new Lotto('1,2,3,4,5,6');
        lotto.splitNumbers();
        expect(lotto.checkNumberRangesFrom1To45ForArray()).toBeUndefined();
      });

      it('[error] 숫자의 범위가 1~45를 벗어났을 때', () => {
        lotto = new Lotto('1,2,0,4,49,6');
        lotto.splitNumbers();
        expect(() => {
          lotto.checkNumberRangesFrom1To45ForArray();
        }).toThrow();
      });
    });

    describe('- checkDuplicates 메서드 확인', () => {
      it('올바른 값을 입력했을 때', () => {
        lotto = new Lotto('1,2,3,4,5,6');
        lotto.splitNumbers();
        expect(lotto.checkDuplicates()).toBeUndefined();
      });

      it('[error] 중복되는 숫자를 입력하였을 경우', () => {
        lotto = new Lotto('1,2,3,3,2,1');
        lotto.splitNumbers();
        expect(() => lotto.checkDuplicates()).toThrow();
      });
    });
  });

  describe('checkUserBonusNumber 메서드 확인', () => {
    const mockFn = jest.fn();
    mockFn.mockReturnValueOnce(['1', '2', '3', '4', '5', '6']);
    LottoNumberData.Winning = mockFn();

    it('올바른 값을 입력했을 때', () => {
      lotto = new Lotto('9');
      expect(lotto.checkUserBonusNumber()).toBe('9');
    });

    it('[error] 당첨번호가 숫자이외의 문자가 입력되었을 때 ', () => {
      lotto = new Lotto('굿');
      expect(() => lotto.checkUserBonusNumber()).toThrow();
    });

    it('[error] 당첨번호와 중복되는 보너스 번호를 입력하였을 경우', () => {
      lotto = new Lotto('5');
      expect(() => lotto.checkUserBonusNumber()).toThrow();
    });

    it('[error] 당첨번호의 범위가 1~45를 벗어났을 때', () => {
      lotto = new Lotto('55');
      expect(() => lotto.checkUserBonusNumber()).toThrow();
    });

    describe('- checkNumberRangesFrom1TO5 메서드 확인', () => {
      it('올바른 값을 입력했을 때', () => {
        lotto = new Lotto('7');
        expect(lotto.checkNumberRangesFrom1To45()).toBeUndefined();
      });

      it('[error] 숫자의 범위가 1~45를 벗어날 때', () => {
        lotto = new Lotto('77');
        expect(() => lotto.checkNumberRangesFrom1To45()).toThrow();
      });
    });

    describe('- checkOverlapsWithWinningNumber 메서드 확인', () => {
      it('올바른 값을 입력했을 때', () => {
        lotto = new Lotto('42');
        expect(lotto.checkOverlapsWithWinningNumber()).toBeUndefined();
      });
      it('[error] 당첨번호와 중복되는 숫자가 존재 할때 ', () => {
        lotto = new Lotto('5');
        expect(() => lotto.checkOverlapsWithWinningNumber()).toThrow();
      });
    });
  });

  describe('checkIssuedNumberFromComputer', () => {
    it('숫자 6개, 범위 1~45, 중복x, 오직 숫자만 허용된다.', () => {
      lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      expect(lotto.checkIssuedNumberFromComputer()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('[error] 숫자가 1~45사이를 벗어나는 경우', () => {
      lotto = new Lotto([1, 77, 3, 4, 5, 0]);
      expect(() => lotto.checkIssuedNumberFromComputer()).toThrow();
    });

    it('[error] 숫자가 6개가 아닐 경우', () => {
      lotto = new Lotto([1, 77, 3, 4, 5]);
      expect(() => lotto.checkIssuedNumberFromComputer()).toThrow();
    });

    it('[error] 중복된 숫자가 있을 경우 ', () => {
      lotto = new Lotto([1, 3, 3, 4, 5, 45]);
      expect(() => lotto.checkIssuedNumberFromComputer()).toThrow();
    });

    it('[error] 숫자이외의 값이 포함되어 있을 경우 ', () => {
      lotto = new Lotto([1, '복', '권', 4, 5, 45]);
      expect(() => lotto.checkIssuedNumberFromComputer()).toThrow();
    });
  });
});
