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
  test("toSting", () => {
    const lotte = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotte.toString()).toEqual("[1, 2, 3, 4, 5, 6]");
  });

  test("generateNumObject", () => {
    const lotte = new Lotto([1, 2, 3, 4, 5, 6]);
    const numObject = lotte.generateNumObject();
    expect(Object.keys(numObject).length).toEqual(45);
  });

  test("countingWin", () => {
    const lotte1 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotte2 = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(lotte1.countingWin([1, 2, 3, 4, 5, 6])).toEqual(6);
    expect(lotte2.countingWin([1, 2, 3, 4, 5, 6])).toEqual(5);
  })

  
});
