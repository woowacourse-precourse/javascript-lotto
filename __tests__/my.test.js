const MissionUtils = require("@woowacourse/mission-utils");
const Lotto = require("../src/Lotto.js");
const Checker = require("../src/Utils/Checker.js");
const Ticket = require("../src/Utils/Ticket.js");

const checker = new Checker();

describe("입력한 금액 값", () => {
  const answer = [8000, 10000, 2000000, 12000];

  test("이 있을 경우 6자리 숫자의 복권 숫자를 생성하는 지", () => {
    const ticket = new Ticket(8000);

    expect(ticket.number[0]).toHaveLength(6);
  });

  test("에 맞는 복권 티켓의 수를 생성하는 지", () => {
    const result = [8, 10, 2000, 12];
    for (let i = 0; i < answer.length; i++) {
      const ticket = new Ticket(answer[i]);
      expect(ticket.number).toHaveLength(result[i]);
    }
  });

  test("1000원 단위가 아닐 경우 예외를 반환 하는지", () => {
    const incorrect = [1234, 100001, "2aeud"];
    for (let i = 0; i < incorrect.length; i++) {
      expect(() => {
        checker.isCorrectMoney(incorrect[i]);
      }).toThrow();
    }
  });
});

describe("입력한 당첨 번호 값", () => {
  const answer = [1, 2, 3, 4, 5, 6];
  const ticket = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ];

  test("이 조건에 맞는 적합한 값인지", () => {
    const lotto = new Lotto(answer, ticket);
    expect(lotto.validate).toBeTruthy();
  });

  test("이 6개의 번호가 아닐 경우 예외가 발생하는 지", () => {
    const incorrect = [1, 2, 3, 4, 5, 6, 7];

    expect(() => {
      const lotto = new Lotto(incorrect, ticket);
      lotto.validate(incorrect);
    }).toThrow();
  });

  test("이 1~45 사이의 숫자가 아닐 경우 예외가 발생하는 지", () => {
    const incorrect = [100, 2, 3, 4, 5, 6];

    expect(() => {
      const lotto = new Lotto(incorrect, ticket);
      lotto.validate(incorrect);
    }).toThrow();
  });

  test("이 중복되는 경우 예외가 발생하는 지", () => {
    const incorrect = [1, 2, 2, 4, 5, 6];

    expect(() => {
      const lotto = new Lotto(incorrect, ticket);
      lotto.isOverlapping(incorrect);
    }).toThrow();
  });
});

describe("입력한 보너스 숫자 값이", () => {
  const lottoNumber = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 4;

  test("이 숫자로 입력이 되었는지", () => {
    const incorrectBonusNumber = "aaa";
    expect(() => {
      checker.isNumber(incorrectBonusNumber);
    }).toThrow("[ERROR]");
  });

  test("이 로또 당첨 숫자와 중복될 경우 예외가 발생하는지", () => {
    expect(() => {
      checker.isOverlappingBonusNumber(lottoNumber, bonusNumber);
    }).toThrow("[ERROR]");
  });
});
