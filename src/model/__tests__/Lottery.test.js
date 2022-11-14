const Lottery = require("../Lottery");

describe("Lottery 유효성 테스트", () => {
  const lotteryBuilder = new Lottery.Builder();
  
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      lotteryBuilder.setNumbers([1, 2, 3, 4, 5, 6, 7]);
      lotteryBuilder.build();
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      lotteryBuilder.setNumbers([1, 2, 3, 3, 5, 6]);
      lotteryBuilder.build();
    }).toThrow("[ERROR]");
  });
  
	test("로또 번호에 유효 범위 밖의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      lotteryBuilder.setNumbers([1, 2, 3, 3, 5, 99]);
      lotteryBuilder.build();
    }).toThrow("[ERROR]");
  });
});

describe("Lotto 메서드 테스트", () => {
  const lotteryBuilder = new Lottery.Builder()
    .setNumbers([1, 2, 3, 4, 5, 6])
    .setBonus(7);
  const lottery = lotteryBuilder.build();
	test("getNumbers()", () => {
    expect(lottery.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
	test("getBonus()", () => {
    expect(lottery.getBonus()).toEqual(7);
  });
	test("setBonus() 에러 - numbers에 있는 값 추가", () => {
    expect(() => {
			lotteryBuilder.setBonus(6);
      lotteryBuilder.build();
		}).toThrow("[ERROR]");
  });
});