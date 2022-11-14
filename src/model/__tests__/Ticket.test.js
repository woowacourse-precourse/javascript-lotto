const Ticket = require("../Ticket");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("Ticket 메서드 테스트", () => {
	const ticketBuilder = new Ticket.Builder();
  mockRandoms([[1, 2, 3, 4, 5, 6]]);
  const ticket = ticketBuilder.build();
	test("pirce()", () => {
    expect(Ticket.price()).toEqual(1000);
  });
  test("hasNumber() - 값이 있을 때", () => {
    expect(ticket.hasNumber(2)).toEqual(true);
  });
	test("hasNumber() - 값이 없을 때", () => {
    expect(ticket.hasNumber(7)).toEqual(false);
  });
	test("correctCount() - 일치하는 게 없을 때", () => {
    expect(ticket.correctCount([7, 8, 9, 10, 11, 12])).toEqual(0);
  });
	test("correctCount() - 1개 일치", () => {
    expect(ticket.correctCount([7, 8, 9, 10, 11, 1])).toEqual(1);
  });
	test("correctCount() - 2개 일치", () => {
    expect(ticket.correctCount([7, 8, 4, 10, 11, 1])).toEqual(2);
  });
	test("correctCount() - 5개 일치", () => {
    expect(ticket.correctCount([5, 3, 4, 2, 11, 1])).toEqual(5);
  });
	test("correctCount() - 모두 일치", () => {
    expect(ticket.correctCount([5, 3, 4, 2, 6, 1])).toEqual(6);
  });
});
