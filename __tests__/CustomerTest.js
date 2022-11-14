const Customer = require("../src/Customer");
const MissionUtils = require("@woowacourse/mission-utils");

describe("Feat 1. Customer.buyLotto", () => {
  const customer = new Customer();

  test("입력된 금액이 천원으로 나누어 떨어진다.", () => {
    expect(() => {
      customer.isMoneyValidate(8000);
    }).not.toThrow("[ERROR]");
  });

  test("입력된 금액이 천원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      customer.isMoneyValidate(8001);
    }).toThrow("[ERROR]");
  });
});

describe("Customer set, get method", () => {
  const customer = new Customer();
  const lottos = [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ];
  customer.buyLotto = lottos;
  test("set 함수를 이용해 저장한 값이 get 함수로 불러와진다.", () => {
    expect(customer.showLotto).toEqual(lottos);
  });
});

describe("Feat 4. Customer.winLottoStatistic", () => {
  const customer = new Customer();
  const winningNumbers = [1, 2, 3, 4, 5, 6, 7];
  const generateNumbers = [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [7, 11, 16, 35, 36, 44],
    [1, 8, 11, 31, 41, 42],
    [13, 14, 16, 38, 42, 45],
    [7, 11, 30, 40, 42, 43],
    [2, 13, 22, 32, 38, 45],
    [1, 3, 5, 14, 22, 45],
  ];
  const lottoStatisticArray = [1, 0, 0, 0, 0];
  test("당첨 번호와 생성된 로또 번호를 비교해 분석 결과를 반환한다.", () => {
    expect(
      customer.analyzeLottoStatistic(winningNumbers, generateNumbers)
    ).toEqual(lottoStatisticArray);
  });
  test("분석 결과를 받아 수익률을 반환한다.", () => {
    expect(customer.calculateLottoYield(lottoStatisticArray, 8000)).toBe(62.5);
  });
});
