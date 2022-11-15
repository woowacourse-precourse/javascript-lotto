const Lotto = require("../src/Lotto/Lotto");
const Bonus = require("../src/Lotto/Bonus");
const Details = require("../src/Statistics/Details");

const lottos = [
  new Lotto([1, 23, 4, 10, 11, 12]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
  new Lotto([10, 11, 12, 13, 14, 15]),
];
const winner = new Lotto([1, 23, 4, 10, 11, 2]);
const bonus = new Bonus([12], winner);
const details = new Details(lottos, winner, bonus);

describe("통계 클래스 테스트", () => {
  test("getDetails() 함수 테스트", () => {
    expect(details.getDetails()).toEqual({ 2: 1 });
  });
});
