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

  // 아래에 추가 테스트 작성 가능
  test("로또 번호의 숫자는 1부터 45 사이의 숫자만 가능하다.", () => {
    expect(() => {
      new Lotto([12, 24, 31, 34, 51, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("string 타입 입력값이 배열로 변환되는지 테스트", () => {
    expect(Lotto.getArrayedUserInput("1,2,3,4,5,6")).toStrictEqual([
      "1",
      ",",
      "2",
      ",",
      "3",
      ",",
      "4",
      ",",
      "5",
      ",",
      "6",
    ]);
  });

  test("숫자와 , 기호 이 외의 문자는 에러 처리", () => {
    expect(() => {
      Lotto.checkUesrInputHaveOnlyNumberAndComma([
        "1",
        ",",
        "2",
        ",",
        "3",
        ",",
        "4",
        ",",
        "5",
        ",",
        " ",
        "6",
      ]);
    }).toThrow("[ERROR] 숫자와 ,(쉼표) 기호만을 입력해주세요.");
  });

  test("입력된 당첨 번호를 쉼표를 기준으로 나눈다.", () => {
    expect(Lotto.getSplitedUserInput("1,2,3,4,5,6")).toStrictEqual([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
    ]);
  });

  test("당첨 번호는 0으로 시작하면 안된다.", () => {
    expect(() => {
      Lotto.checkWinningNumberStartZero(["1", "2", "3", "04", "5", "6"]);
    }).toThrow("[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.");
  });

  test("배열 원소가 number 타입으로 변환되어야한다.", () => {
    expect(Lotto.getUserLotto(["1", "2", "3", "4", "5", "6"])).toStrictEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});
