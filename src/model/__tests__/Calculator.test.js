const Ticket = require("../Ticket");
const Calculator = require("../Calculator");
const Lottery = require("../Lottery");
const Result = require("../Result");

describe("Calculator 메서드 테스트", () => {
	const scores = [4, 3, 2, 1, 1, 1, 1, 1, 1, 1];
	const compare = new Result(scores, scores.length * Ticket.price());
	const calculator = new Calculator();
	calculator.appendTicket(new Ticket([1,2,3,4,5,6]));
	calculator.appendTicket(new Ticket([1,2,3,5,7,10]));
	calculator.appendTicket(new Ticket([1,2,5,7,10,13]));
	calculator.appendTicket(new Ticket([1,5,7,10,13,15]));
	calculator.appendTicket(new Ticket([1,5,7,10,13,15]));
	calculator.appendTicket(new Ticket([1,5,7,10,13,15]));
	calculator.appendTicket(new Ticket([1,5,7,10,13,15]));
	calculator.appendTicket(new Ticket([1,5,7,10,13,15]));
	calculator.appendTicket(new Ticket([1,5,7,10,13,15]));
	calculator.appendTicket(new Ticket([1,5,7,10,13,15]));
	calculator.setLottery(new Lottery.Builder()
		.setLotto([1, 2, 3, 4, 8, 9])
		.setBonus(10)
		.build());
	test("calculate()", () => {
		const result = calculator.calculate();
		console.log(result.profitRate(), compare.profitRate());
		console.log(result.stringify(), compare.stringify());
    expect(result.stringify()).toEqual(compare.stringify());
    expect(result.profitRate()).toEqual(compare.profitRate());
  });
});
