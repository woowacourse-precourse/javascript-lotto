const LottoAmount = require("../src/domain/lotto/LottoAmount");
const LottoAmountDivideException = require("../src/exception/lotto/LottoAmountDivideException");
const LottoAmountLessException = require("../src/exception/lotto/LottoAmountLessException");
const LottoAmountNotNumberException = require("../src/exception/lotto/LottoAmountNotNumberException");

describe("로또 클래스 테스트", () => {
  test("로또 금액이 조건에 만족하는 경우", () => {
    const amount = LottoAmount.from(1000).getValue();
    expect(amount).toEqual(1000);
  });

  test("로또 금액이 숫자가 아닌 경우", () => {
    expect(() => {
      new LottoAmount('a');
    }).toThrow(LottoAmountNotNumberException);
    expect(() => {
      new LottoAmount([1, 2, 3, 4, 5, 5]);
    }).toThrow(LottoAmountNotNumberException);
    expect(() => {
      new LottoAmount();
    }).toThrow(LottoAmountNotNumberException);
  });
  
  test("로또 금액이 로또 가격보다 낮은 경우", () => {
    expect(() => {
      new LottoAmount(0);
    }).toThrow(LottoAmountLessException);
    expect(() => {
      new LottoAmount(999);
    }).toThrow(LottoAmountLessException);
  });

  test("로또 금액이 로또 가격으로 나누어지지 떨어지지 않는 경우", () => {
    expect(() => {
      new LottoAmount(1001);
    }).toThrow(LottoAmountDivideException);
    expect(() => {
      new LottoAmount(12800);
    }).toThrow(LottoAmountDivideException);
  });

  test("로또 발행 수량 출력", () => {
    expect(LottoAmount.from(1000).getLottoCount()).toEqual(1);
    expect(LottoAmount.from(8000).getLottoCount()).toEqual(8);
    expect(LottoAmount.from(12000).getLottoCount()).toEqual(12);
  });
});
