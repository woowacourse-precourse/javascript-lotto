const Lotto = require("../src/Lotto");

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

  test("입력 숫자 개수 오류 테스트", () => {
    expect(() => {
        new Lotto([1, 3, 5, 10, 23, 33, 36]);
      }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test("문자 입력 오류 테스트", () => {
    expect(() => {
        new Lotto([1, 3, 5, 10, 23, '문자']);
      }).toThrow('[ERROR] 숫자가 아닌 문자를 입력했습니다.');
  });

  test("입력 숫자 범위 오류 테스트", () => {
    expect(() => {
        new Lotto([1, 3, 5, 77, 23, 35]);
      }).toThrow('[ERROR] 1~45 중의 자연수를 입력하세요.');
  });

  test("중복 숫자 입력 오류 테스트", () => {
    expect(() => {
        new Lotto([1, 3, 5, 10, 23, 23]);
      }).toThrow('[ERROR] 중복된 숫자가 존재합니다.');
  });
});
