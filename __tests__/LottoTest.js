const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto.validate([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto.validate([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복 되지 않는 숫자를 입력하세요.");
  });

  test("로또 번호에 1~45 이외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto.validate([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 1~45 사이에 숫자만 입력하세요.");
  });

  test("로또 번호에 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto.validate([1, 2, 3, 4, 5, a]);
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

  test("로또 번호에 특수문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto.validate([1, 2, 3, 4, 5, !]);
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

  test("로또 번호에 공백이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto.validate([1, 2, 3, 4, '', 6]);
    }).toThrow("[ERROR] 숫자만 입력하세요.");
  });

});
