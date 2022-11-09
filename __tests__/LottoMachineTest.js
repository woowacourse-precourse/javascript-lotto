const LottoMachine = require("../src/LottoMachine");

describe("로또 머신 클래스 테스트", () => {
  test("돈 넣으면 적절한 티켓 갯수 나오는지 테스트", () => {
    const machine = new LottoMachine(8000);
    expect(machine.tickets.length).toEqual(8);
  });
});
