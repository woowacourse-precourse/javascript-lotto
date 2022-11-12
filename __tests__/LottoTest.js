const Lotto = require("../src/Lotto");
const Buyer = require("../src/Buyer")
const {Console, Random} = require("@woowacourse/mission-utils");

const mockQuestions = (answers) => {
  Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, Console.readLine);
};

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  // test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 5]);
  //   }).toThrow("[ERROR]");
  // });

  test("1000원 단위로 떨어지지 않으면 로또를 구매할 수 없다", () => {
    const payment = 1400;
    const buyer = new Buyer;
    expect(() => {
      buyer.isValidpayment(payment)
    }).toThrow();
  });

  test("금액은 숫자만 입력이 가능하다.", () => {
    const payment = "testPayment";
    const buyer = new Buyer();
    expect(() => {
      buyer.isValidpayment(payment)
    }).toThrow();
  });

  test("조건에 맞는 로또 금액을 입력 받는다.", () => {
    const payment = ["8000"];
    const outputPayment = 8000;
    const buyer = new Buyer();
    mockQuestions(payment);
    buyer.getLottoPayment(payment);
    expect(buyer.payment).toEqual(outputPayment);
  });

  test("로또금액에 따른 구매가능한 로또 개수를 출력한다.", ()=>{
    const payment = ["8000"];
    const outputCount = 8;
    const buyer = new Buyer();
    mockQuestions(payment);
    buyer.getLottoPayment(payment);
    buyer.setLottoCount(buyer.payment);
    expect(buyer.lottoCount).toEqual(outputCount);
  })
});
