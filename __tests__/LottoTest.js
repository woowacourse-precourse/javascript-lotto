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
  test("로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 같으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow("[ERROR]");
  })

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], 46);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([2, 3, 4, 5, 6, 7], 0);
    }).toThrow("[ERROR]");
  });

  test("일치하는 번호의 갯수에 따라서 로또 등수를 정한다.", () => {
    expect(new Lotto([1, 2, 3, 4, 5, 6], 7).lottoCompare([1, 2, 3, 4, 5, 6])
    ).toEqual([0, 0, 0, 1, 0]);
    expect(new Lotto([1, 2, 3, 4, 5, 6], 7).lottoCompare([1, 2, 3, 4, 5, 7])
    ).toEqual([0, 0, 0, 0, 1]);
    expect(new Lotto([1, 2, 3, 4, 5, 6], 7).lottoCompare([1, 2, 3, 4, 5, 8])
    ).toEqual([0, 0, 1, 0, 0]);
    expect(new Lotto([1, 2, 3, 4, 5, 6], 7).lottoCompare([1, 2, 3, 4, 8, 9])
    ).toEqual([0, 1, 0, 0, 0]);
    expect(new Lotto([1, 2, 3, 4, 5, 6], 7).lottoCompare([1, 2, 3, 7, 8, 9])
    ).toEqual([1, 0, 0, 0, 0]);
  });
});
