const Lotto = require("../src/Lotto");
const User = require("../src/User")
const Validator = require("../src/Validator");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
});

describe("Validator 클래스 테스트", () => {
  test("isRange : 1 ~ 45의 숫자인지 테스트", () => {
    expect(Validator.isRange(1, 45, 1)).toEqual(true);
    expect(Validator.isRange(1, 45, 45)).toEqual(true);
    expect(Validator.isRange(1, 45, 0)).toEqual(false);
    expect(Validator.isRange(1, 45, 50)).toEqual(false);
  });

  test("isLottoLength : 로또 길이가 6인지 테스트", () => {
    expect(Validator.isLottoLength(6)).toEqual(true);
    expect(Validator.isLottoLength(5)).toEqual(false);
    expect(Validator.isLottoLength(7)).toEqual(false);
  });

  test("isPositiveNumber : 양수인지 테스트", () => {
    expect(Validator.isPositiveNumber(1000)).toEqual(true);
    expect(Validator.isPositiveNumber("1000")).toEqual(true);
    expect(Validator.isPositiveNumber(7.14)).toEqual(false);
    expect(Validator.isPositiveNumber("7.14")).toEqual(false);
    expect(Validator.isPositiveNumber(0)).toEqual(false);
    expect(Validator.isPositiveNumber("0")).toEqual(false);
    expect(Validator.isPositiveNumber("abc")).toEqual(false);
  });

  test("isRightFee : 입력한 금액이 1000원 단위인지 테스트", () => {
    expect(Validator.isRightFee(7000)).toEqual(true);
    expect(Validator.isRightFee(7014)).toEqual(false);
  });

  test("isNumberInArray : 숫자가 배열 안에 있는지 테스트", () => {
    expect(Validator.isNumberInArray([1, 2, 3, 4, 5, 6], 1)).toEqual(true);
    expect(Validator.isNumberInArray([1, 2, 3, 4, 5, 6], 7)).toEqual(false);
  });

  test("isUniqueArray: 배열 안에 숫자가 중복인지 테스트", () => {
    expect(Validator.isUniqueArray([1, 2, 3, 4, 5, 6])).toEqual(true);
    expect(Validator.isUniqueArray([1, 1, 2, 3, 4, 5])).toEqual(false);
    expect(Validator.isUniqueArray([6, 6, 3, 4, 5, 1])).toEqual(false);
  });

  test("isRightLottoNumbers: 올바른 로또 번호인지 테스트", () => {
    expect(Validator.isRightLottoNumbers([1, 2, 3, 4, 5, 6, 7])).toEqual(false);
    expect(Validator.isRightLottoNumbers([1, 2, 3, 4, 5, 5])).toEqual(false);
    expect(Validator.isRightLottoNumbers([1, 2, 'sdf', 4, 'sdf', 5])).toEqual(false);
  });

  test("로또 순위를 계산 테스트", () => {
    const user = new User();
    expect(user.dicideRank(6, false)).toEqual(1);
    expect(user.dicideRank(5, true)).toEqual(2);
    expect(user.dicideRank(5, false)).toEqual(3);
    expect(user.dicideRank(4, false)).toEqual(4);
    expect(user.dicideRank(3, false)).toEqual(5);
    expect(user.dicideRank(2, false)).toEqual(0);
  });
});
