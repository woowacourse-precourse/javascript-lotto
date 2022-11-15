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

  test("로또 번호에 1부터 45의 범위를 벗어난 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0,1,2,3,4,5])
    }).toThrow("[ERROR]")
  })

  test("로또 번호에 문자가 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1,2,3,4,5,'j'])
    }).toThrow("[ERROR]")
  })

  test("로또 당첨 결과 발표", () => {
    const lotto = new Lotto([3,14,19,22,30,41])
    const result = {
      three : 0,
      four : 1,
      five : 0,
      fiveLucky : 0,
      six : 0,
      yield : 5000
    }
    expect(lotto.judge([3,14,19,20,22,30], 1000, 41)),toBe(result)
  })
})
