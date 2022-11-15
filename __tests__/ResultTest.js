const Lotto = require("../src/domain/lotto/Lotto");
const LottoTicket = require("../src/domain/lotto/LottoTicket");
const Result = require("../src/domain/result/Result");
const InstanceException = require("../src/exception/InstanceException");

describe("Result 클래스 테스트", () => {
  test("인수의 인스턴스가 다른 경우", () => {
    const lottoTicket = new LottoTicket(3);
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => {
      new Result(lottoTicket, lotto);
    }).toThrow(InstanceException);
  });
});