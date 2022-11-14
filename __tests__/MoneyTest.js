const Money = require("../src/domain/Money");

describe("Money 클래스 테스트", () => {
  test("입력값이 비어있을 때 에러가 발생한다.", () => {
    expect(() => new Money("")).toThrow(
      "[ERROR] 로또 구입금액을 입력해주세요."
    );
    expect(() => new Money("   ")).toThrow(
      "[ERROR] 로또 구입금액을 입력해주세요."
    );
  });

  test("입력값이 숫자가 아닐때 에러가 발생한다.", () => {
    expect(() => new Money("abc")).toThrow(
      "[ERROR] 로또 구입금액은 숫자여야 합니다."
    );
    expect(() => new Money("9a9")).toThrow(
      "[ERROR] 로또 구입금액은 숫자여야 합니다."
    );
    expect(() => new Money("@!@")).toThrow(
      "[ERROR] 로또 구입금액은 숫자여야 합니다."
    );
    expect(() => new Money("ABC")).toThrow(
      "[ERROR] 로또 구입금액은 숫자여야 합니다."
    );
    expect(() => new Money("가")).toThrow(
      "[ERROR] 로또 구입금액은 숫자여야 합니다."
    );
  });

  test("입력값이 1000의 단위가 아니면 에러가 발생한다.", () => {
    expect(() => new Money("3010")).toThrow(
      "[ERROR] 로또 구입금액을 1000단위로 입력해주세요."
    );
    expect(() => new Money("123")).toThrow(
      "[ERROR] 로또 구입금액을 1000단위로 입력해주세요."
    );
    expect(() => new Money("0999")).toThrow(
      "[ERROR] 로또 구입금액을 1000단위로 입력해주세요."
    );
    expect(() => new Money("123123000123")).toThrow(
      "[ERROR] 로또 구입금액을 1000단위로 입력해주세요."
    );
    expect(() => new Money("-100000")).toThrow(
      "[ERROR] 로또 구입금액을 1000단위로 입력해주세요."
    );
  });

  test("입력값이 10억이 넘어가면 에러가 발생한다.", () => {
    expect(() => new Money("1200000000")).toThrow(
      "[ERROR] 로또 구입금액이 너무 큽니다."
    );
  });
});
