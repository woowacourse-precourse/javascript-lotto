const Buyer = require("../Buyer");
const MissionUtils = require("@woowacourse/mission-utils");
const Ticket = require("../Ticket");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("Buyer 메서드 테스트", () => {
	test("buy() - [Error] 1000의 배수가 아니면 에러 발생", () => {
    expect(() => {Buyer.buy(1001);}).toThrow("[ERROR]");
  });
	test("buy() - 정상 동작", () => {
		mockRandoms([[1, 2, 3, 4, 5, 6]]);
    expect(Buyer
			.buy(1000)
			.map(ticket => ticket.getNumbers()))
		.toEqual([new Ticket([1, 2, 3, 4, 5, 6]).getNumbers()]);
  });
	MissionUtils.Console.close();
});
