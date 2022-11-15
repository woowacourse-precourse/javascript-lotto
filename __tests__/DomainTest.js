const MissionUtils = require('@woowacourse/mission-utils');
const Model = require('../src/Model/Model');
const Lotto = require('../src/Model/Lotto');
const Controller = require('../src/Controller/Controller');
const { ERROR } = require('../src/Constants');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  // eslint-disable-next-line arrow-body-style
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  // eslint-disable-next-line arrow-body-style
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
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['1000d ']);
    expect(() => controller.getUserMoneyAndGenWinningNumbers()).toThrow(
      ERROR.USER.MONEY.TYPE,
    );
  });
  test('1000원 미만의 값을 입력한 경우', () => {
    const controller = new Controller();
    mockQuestions(['900']);
    expect(() => controller.getUserMoneyAndGenWinningNumbers()).toThrow(
      ERROR.USER.MONEY.MIN_RANGE,
    );
  });
  test('NUMBER.MAX_SAFE_INTEGER 이상 값을 입력한 경우', () => {
    const controller = new Controller();
    mockQuestions([`${Number.MAX_SAFE_INTEGER}`]);
    expect(() => controller.getUserMoneyAndGenWinningNumbers()).toThrow(
      ERROR.USER.MONEY.MAX_RANGE,
    );
  });
  test('1000원으로 나누어 떨어지지 않는 경우', () => {
    const controller = new Controller();
    mockQuestions(['1350']);
    expect(() => controller.getUserMoneyAndGenWinningNumbers()).toThrow(
      ERROR.USER.MONEY.DIVIDE,
    );
  });
  test('값을 제대로 입력한 경우', () => {
    const logSpy = getLogSpy();
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['2 00 0']);
    controller.getUserMoneyAndGenWinningNumbers();
    expect(logSpy).toBeCalledTimes(4);
  });
});

describe('기능 2번. 로또 구입 금액 만큼의 로또 번호 생성', () => {
  test('입력받은 금액 만큼의 로또 발행', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['2000']);
    controller.getUserMoneyAndGenWinningNumbers();
    expect(model.lottoLists.length).toEqual(2);
  });
  test('로또 번호가 숫자 이외의 type인 경우', () => {
    mockRandoms([[8, 21, 45, 41, 42, 'plz']]);
    expect(() => new Lotto()).toThrow(ERROR.LOTTO.TYPE);
  });
  test('로또 번호가 1~45의 숫자 범위를 벗어난 경우', () => {
    mockRandoms([[8, 21, 45, 41, 42, 51]]);
    expect(() => new Lotto()).toThrow(ERROR.LOTTO.RANGE);
  });
  test('로또 번호에 중복된 숫자가 있는 경우', () => {
    mockRandoms([[8, 21, 45, 41, 41, 43]]);
    expect(() => new Lotto()).toThrow(ERROR.LOTTO.DUPLICATED);
  });
});

describe('기능 3-1번. 당첨 번호 : 중복되지 않는 숫자 6개', () => {
  test('숫자 이외의 type을 입력한 경우', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['1,2,3,4,5,plz']);
    expect(() => controller.getUserLottoNumber()).toThrow(
      ERROR.USER.LOTTONUMBER.TYPE,
    );
  });
  test('1부터 45의 범위를 벗어난 숫자를 입력한 경우', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['1,2,3,4,5,51']);
    expect(() => controller.getUserLottoNumber()).toThrow(
      ERROR.USER.LOTTONUMBER.RANGE,
    );
  });
  test('숫자가 6개가 아닌 경우', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['1,2,3,4,5']);
    expect(() => controller.getUserLottoNumber()).toThrow(
      ERROR.USER.LOTTONUMBER.LENGTH,
    );
  });
  test('중복되는 숫자가 있는 경우', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['1,2,3,4,5,5']);
    expect(() => controller.getUserLottoNumber()).toThrow(
      ERROR.USER.LOTTONUMBER.DUPLICATED,
    );
  });
});

describe('기능 3-2번. 보너스 번호 : 숫자 1개', () => {
  test('숫자 이외의 type을 입력한 경우', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['bonus']);
    expect(() => controller.getUserBonusNumber()).toThrow(
      ERROR.USER.BONUSNUMBER.TYPE,
    );
  });
  test('1부터 45까지의 범위를 벗어난 수를 입력한 경우', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockQuestions(['50']);
    expect(() => controller.getUserBonusNumber()).toThrow(
      ERROR.USER.BONUSNUMBER.RANGE,
    );
  });
});

describe('기능 4. 당첨 번호 추첨', () => {
  test('번호가 n개 일치하는 경우 나열해서 발표', () => {
    const model = new Model();
    const controller = new Controller(model);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
    ];
    const logSpy = getLogSpy();
    controller.start();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe('기능 5. 당첨 결과 발표', () => {
  test('수익률 출력까지 구현한 최종 테스트', () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);
    mockQuestions(['8000', '1,2,3,4,5,6', '7']);
    const logs = [
      '8개를 구매했습니다.',
      '[8, 21, 23, 41, 42, 43]',
      '[3, 5, 11, 16, 32, 38]',
      '[7, 11, 16, 35, 36, 44]',
      '[1, 8, 11, 31, 41, 42]',
      '[13, 14, 16, 38, 42, 45]',
      '[7, 11, 30, 40, 42, 43]',
      '[2, 13, 22, 32, 38, 45]',
      '[1, 3, 5, 14, 22, 45]',
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개',
      '6개 일치 (2,000,000,000원) - 0개',
      '총 수익률은 62.5%입니다.',
    ];
    const logSpy = getLogSpy();
    const model = new Model();
    const controller = new Controller(model);
    controller.start();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
