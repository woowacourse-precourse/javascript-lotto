const Customer = require("../src/Customer");
const LottoStore = require("../src/LottoStore");
const MissionUtils = require("@woowacourse/mission-utils");

const mockQuestions = (answer) => {
  MissionUtils.Console.readLine = jest.fn().mockReturnValue(answer);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest
    .fn()
    .mockReturnValue(numbers);
};

// dummy test codes
// describe("", () => {
//   test("", () => {
//     expect()
//   });
// });

describe("Feat 1. Customer.buyLotto", () => {
  const customer = new Customer();

  test("입력된 금액이 천원으로 나누어 떨어진다.", () => {
    mockQuestions("8000");
    expect(customer.payMoney()).toBe(8000);
  });

  test("입력된 금액이 천원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    mockQuestions("8001");
    expect(customer.payMoney).toThrow("[ERROR]");
  });
});

describe("Feat 2. LottoStore.generateLotto", () => {
  const lottoStore = new LottoStore();

  test("지불된 돈으로 살 수 있는 로또의 개수를 반환한다.", () => {
    expect(lottoStore.calculateLottoCount(8000)).toBe(8);
  });

  test("살 수 있는 로또의 개수만큼 만든 로또 번호를 반환한다.", () => {
    mockRandoms([1, 2, 3, 4, 5, 6]);
    expect(lottoStore.generateLottoNumber(1).length).toBe(1);
  });
});
