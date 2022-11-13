const MissionUtils = require('@woowacourse/mission-utils');
const User = require('../src/User');
const Lotto = require('../src/Lotto');
const UserInput = require('../src/UserInput');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('기능 1번. 로또 구입 금액 입력 받기', () => {
  test('숫자 이외의 타입을 입력한 경우', () => {
    const user = new User();
    mockQuestions(['1000d ']);
    expect(() => user.getUserMoney()).toThrow('[ERROR]');
  });
  test('1000원 미만의 값을 입력한 경우', () => {
    const user = new User();
    mockQuestions(['900']);
    expect(() => user.getUserMoney()).toThrow('[ERROR]');
  });
  test('NUMBER.MAX_SAFE_INTEGER 이상 값을 입력한 경우', () => {
    const user = new User();
    mockQuestions([`${Number.MAX_SAFE_INTEGER}`]);
    expect(() => user.getUserMoney()).toThrow('[ERROR]');
  });
  test('1000원으로 나누어 떨어지지 않는 경우', () => {
    const user = new User();
    mockQuestions(['1350']);
    expect(() => user.getUserMoney()).toThrow('[ERROR]');
  });
  test('값을 제대로 입력한 경우', () => {
    const logSpy = getLogSpy();
    const user = new User();
    mockQuestions(['8 00 0']);
    user.getUserMoney();
    expect(logSpy).toHaveBeenCalledWith('유효한 입력입니다.');
  });
});

describe('기능 2번. 로또 구입 금액 만큼의 로또 번호 생성', () => {
  test('입력받은 금액 만큼의 로또 발행', () => {
    const user = new User();
    mockQuestions(['8000']);
    user.getUserMoney();
    expect(user.lottoList.length).toEqual(8);
  });
  test('로또 번호가 숫자 이외의 type인 경우', () => {
    mockRandoms([[8, 21, 45, 41, 42, 'plz']]);
    expect(() => new Lotto()).toThrow('[ERROR] 로또 번호는 숫자만 가능합니다.');
  });
  test('로또 번호가 1~45의 숫자 범위를 벗어난 경우', () => {
    mockRandoms([[8, 21, 45, 41, 42, 51]]);
    expect(() => new Lotto()).toThrow(
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    );
  });
  test('로또 번호에 중복된 숫자가 있는 경우', () => {
    mockRandoms([[8, 21, 45, 41, 41, 43]]);
    expect(() => new Lotto()).toThrow('[ERROR] 중복된 숫자가 있습니다.');
  });
});

describe('기능 3-1번. 당첨 번호 : 중복되지 않는 숫자 6개', () => {
  test('숫자 이외의 type을 입력한 경우', () => {
    const userInput = new UserInput();
    mockQuestions(['1,2,3,4,5,plz']);
    expect(() => userInput.getUserLottos()).toThrow(
      '[ERROR] 로또 번호는 숫자만 가능합니다. 쉼표로 구분해주세요.',
    );
  });
  test('1부터 45의 범위를 벗어난 숫자를 입력한 경우', () => {
    const userInput = new UserInput();
    mockQuestions(['1,2,3,4,5,51']);
    expect(() => userInput.getUserLottos()).toThrow(
      '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    );
  });
  test('숫자가 6개가 아닌 경우', () => {
    const userInput = new UserInput();
    mockQuestions(['1,2,3,4,5']);
    expect(() => userInput.getUserLottos()).toThrow(
      '[ERROR] 1부터 45까지의 서로 다른 6개의 숫자를 입력해주세요.',
    );
  });
  test('중복되는 숫자가 있는 경우', () => {
    const userInput = new UserInput();
    mockQuestions(['1,2,3,4,5,5']);
    expect(() => userInput.getUserLottos()).toThrow(
      '[ERROR] 로또 번호는 중복이 불가능합니다.',
    );
  });
});

describe('기능 3-2번. 보너스 번호 : 숫자 1개', () => {
  test('숫자 이외의 type을 입력한 경우', () => {
    const userInput = new UserInput();
    mockQuestions(['bonus']);
    expect(() => userInput.getUserBonusNumber()).toThrow(
      '[ERROR] 보너스 번호는 숫자만 가능합니다.',
    );
  });
  test('숫자 이외의 type을 입력한 경우', () => {
    const userInput = new UserInput();
    mockQuestions(['50']);
    expect(() => userInput.getUserBonusNumber()).toThrow(
      '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    );
  });
});
