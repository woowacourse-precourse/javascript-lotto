const Lotto = require("../src/Lotto");
const Person = require("../src/Person");
const { ERROR } = require('../src/Constants');
const { SYSTEM } = require("../src/System");
const MissionUtils = require("@woowacourse/mission-utils");

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
};

// 현금값 예외 테스트
test("예외 테스트: 현금이 1,000원으로 나누어 떨어지지 않는 경우 1", () => {
    expect(() => {
        const person = new Person();
        person.isCorrectCash("1234");
    }).toThrow(ERROR.INVAID_CASH);
});

test("예외 테스트: 현금이 1,000원으로 나누어 떨어지지 않는 경우 2", () => {
    expect(() => {
        const person = new Person();
        person.isCorrectCash("123");
    }).toThrow(ERROR.INVAID_CASH);
});

test("예외 테스트: 현금 값이 0인 경우", () => {
    expect(() => {
        const person = new Person();
        person.isCorrectCash("0");
    }).toThrow(ERROR.CASH_IS_ZERO);
});

test("예외 테스트: 현금 값이 음수인 경우", () => {
    expect(() => {
        const person = new Person();
        person.isCorrectCash("-1");
    }).toThrow(ERROR.CASH_IS_NOT_NATURAL_NUMBER);
});

// 로또 번호 예외 테스트 
test("예외 테스트: 1~45 사이가 아닌 숫자가 로또 번호에 포함된 경우 1", () => {
    expect(() => {
        new Lotto("0, 2, 3, 4, 5, 6".split(",").map(Number))
    }).toThrow(ERROR.INVAID_NUMBER);
});

test("예외 테스트: 1~45 사이가 아닌 숫자가 당첨 로또 번호에 포함된 경우 2", () => {
    expect(() => {
        new Lotto('1, 2, 3, 4, 5, 46'.split(",").map(Number))
    }).toThrow(ERROR.INVAID_NUMBER);
});

test("예외 테스트: 중복된 숫자가 당첨 로또 번호에 포함된 경우", () => {
    expect(() => {
        new Lotto('1, 1, 2, 3, 4, 5'.split(",").map(Number))
    }).toThrow(ERROR.NOT_UNIQUE);

});

test("예외 테스트: 당첨 로또 번호에 숫자가 아닌 값이 포함된 경우", () => {
    expect(() => {
        new Lotto("1, two, 3, 4, 5, six".split(",").map(Number))
    }).toThrow(ERROR.NOT_NUMBER);
});

test("예외 테스트: 당첨 로또 번호에 특수 문자가 포함된 경우", () => {
    expect(() => {
        new Lotto("1, _, 3, 4, 5, 6".split(",").map(Number))
    }).toThrow(ERROR.NOT_NUMBER);
});

test("예외 테스트: 보너스 숫자가 1~45 사이의 숫자가 아닌 경우 1", () => {
    mockRandoms([
        [1, 2, 3, 4, 5, 6],
    ]);
    expect(() => {
        const bonusNumber = Number('0');
        const winningLotto = SYSTEM.makeLotto();
        SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.INVAID_NUMBER);
});

test("예외 테스트: 보너스 숫자가 1~45 사이의 숫자가 아닌 경우 2", () => {
    mockRandoms([
        [1, 2, 3, 4, 5, 6],
    ]);
    expect(() => {
        const bonusNumber = Number('46');
        const winningLotto = SYSTEM.makeLotto();
        SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.INVAID_NUMBER);
});

test("예외 테스트: 보너스 숫자가 당첨 숫자와 중복될 경우", () => {
    mockRandoms([
        [1, 2, 3, 4, 5, 6],
    ]);
    expect(() => {
        const bonusNumber = Number('1');
        const winningLotto = SYSTEM.makeLotto();
        SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.HAS_NUMBER);
});

test("예외 테스트: 보너스 숫자 입력값이 숫자가 아닌 경우", () => {
    mockRandoms([
        [1, 2, 3, 4, 5, 6],
    ]);
    expect(() => {
        const bonusNumber = Number('zero');
        const winningLotto = SYSTEM.makeLotto();
        SYSTEM.isCorrectBonusNumber(bonusNumber, winningLotto.getNumber());
    }).toThrow(ERROR.NOT_NUMBER);
});