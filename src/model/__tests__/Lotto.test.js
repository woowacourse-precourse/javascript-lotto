const Lotto = require("../Lotto");

describe("Lotto 유효성 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });
  
	test("로또 번호에 유효 범위 밖의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 99]);
    }).toThrow("[ERROR]");
  });
});

describe("Lotto 메서드 테스트", () => {
	const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
	test("getNumbers()", () => {
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
	test("getBonus()", () => {
		lotto.setBonus(7);
    expect(lotto.getBonus()).toEqual(7);
  });
	test("setBonus() 에러 - numbers에 있는 값 추가", () => {
    expect(lotto.setBonus(6)).toThrow("[ERROR]");
  });
});