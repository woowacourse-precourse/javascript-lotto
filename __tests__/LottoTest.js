const Lotto = require("../src/Lotto");
const LottoGame = require("../src/LottoGame");
const LottoResult = require("../src/LottoResult");
const LottoValidation = require("../src/LottoValidation");

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

  test("로또 번호에 1~45 범위 밖 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow("[ERROR]");
  });
  //유효성 검사
  test("입력이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkIsNumber("a");
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkIsNumber("b");
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkIsNumber("1a");
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkLength([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkDuplicate([1, 2, 3, 4, 5, 1]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkDuplicate([6, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("배열에 1~45 범위 밖 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkLottoRange([100, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkLottoRange([1, 2, 3, 4, 5, 67]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkBonusDuplicate(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
    expect(() => {
      LottoValidation.checkBonusDuplicate(6, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("입력이 0이면 예외가 발생한다.", () => {
    expect(() => {
      LottoValidation.checkZero("0");
    }).toThrow("[ERROR]");
  });
});
