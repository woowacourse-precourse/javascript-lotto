const Ticket = require("../Ticket");
const Result = require("../Result");

describe("Result 메서드 테스트", () => {
	const scores = [4, 3, 2, 1, 1, 1, 1, 1, 1, 1];
	const result = new Result(scores, scores.length * Ticket.price());
	test("profitRate()", () => {
    expect(result.profitRate()).toEqual("550.0");
  });
  test("profitRate()", () => {
    expect(result.stringify().sort((a, b) => a.score - b.score))
			.toEqual([
				{ count: 1, score: 3, price: 5000 },
				{ count: 1, score: 4, price: 50000 },
				{ count: 0, score: 5, price: 1500000 },
				{ count: 0, score: 5.5, price: 30000000 },
				{ count: 0, score: 6, price: 2000000000 },
			]);
  });
});
