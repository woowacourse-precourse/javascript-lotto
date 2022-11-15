/* eslint-disable */
const Lotto = require("../src/Lotto");

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1보다 작은 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 0, 4, 5, 45]);
    }).toThrow("[ERROR]");
  });
});

describe("로또 N개 생성 테스트", () => {
  jest.mock("../src/Lotto");

  test("로또 1개 생성 테스트", () => {
    const expected = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(expected);
    expect(lotto.getNumbers()).toEqual(expect.arrayContaining(expected));
  });

  test("로또 5개 생성 테스트", () => {
    const expectedArr = [
      [1, 2, 3, 4, 5, 6],
      [11, 22, 33, 44, 15, 26],
      [21, 22, 23, 24, 25, 26],
      [11, 24, 32, 41, 15, 6],
      [41, 12, 3, 24, 5, 36],
    ];
    expectedArr.forEach((expected) => {
      const lotto = new Lotto(expected);
      expect(lotto.getNumbers()).toEqual(expect.arrayContaining(expected));
    });
  });
});
