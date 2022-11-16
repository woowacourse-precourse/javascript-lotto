const LottoGameTool = require('../src/LottoGameTool');
const MissionUtils = require('@woowacourse/mission-utils');
const GameHandler = require('../src/GameHandler');
const ServeValidtion = require('../src/ServeValidtion');

describe('도메인 로직 작은 단위 테스트', () => {
  test('1000원 단위가 아니라면 오류를 던지는지', () => {
    expect(ServeValidtion.validateLottoBuyPrice('3000')).toBeTruthy();
    expect(() => {
      ServeValidtion.validateLottoBuyPrice('3200');
    }).toThrow('[ERROR]');
    expect(() => {
      ServeValidtion.validateLottoBuyPrice(' 1000');
    }).toThrow('[ERROR]');
    expect(() => {
      ServeValidtion.validateLottoBuyPrice('003000');
    }).toThrow('[ERROR]');
  });

  test('주어진 금액대로 1장당 1000원의 로또의 갯수가 잘 나오는지', () => {
    expect(GameHandler.randomNumberCount('30000')).toBe(30);
  });

  test('구매한 로또 갯수대로 저장을 하는지', () => {
    expect(GameHandler.randomNumberSaveKit(7).length).toBe(7);
  });

  test('구매한 로또가 쉼표를 구분으로 숫자가 들어오지않으면 오류를 던지는지', () => {
    expect(() => {
      ServeValidtion.validateJackpotNumber('1,2,3, ,4,5');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호는 하나의 수만 허용하는지', () => {
    expect(() => {
      ServeValidtion.validateLottoBonusNumber('12 ');
    }).toThrow('[ERROR]');
    expect(() => {
      ServeValidtion.validateLottoBonusNumber('1a');
    }).toThrow('[ERROR]');
    expect(() => {
      ServeValidtion.validateLottoBonusNumber('12,32');
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨번호랑 겹치면 오류를 던지는지', () => {
    const bonusNumber = '6';
    const jackpotNumber = '1,2,3,4,5,6';
    expect(() => {
      ServeValidtion.validateLottoBonusNumber(bonusNumber, jackpotNumber)
    }).toThrow('[ERROR]');
  });

  test('당첨조건에 따라 등수에 알맞게 배열로 반환해 주는지', () => {
    const buyLottos = [[1, 2, 3, 4, 5, 6], [1, 3, 6, 25, 35, 45]];
    const jackpotNumber = '1,3,6,7,25,35';
    const bonusNumber = '7';
    expect(GameHandler.hasJackpotCount(buyLottos, jackpotNumber, bonusNumber))
      .toEqual([1, 0, 0, 1, 0]);
  });

  test('당첨결과 배열에 따라 알맞는 총합값을 내주는지', () => {
    const matchList = [1, 0, 0, 1, 0];
    const moneyList = GameHandler.jackpotMoneyList();
    expect(GameHandler.totalJackpotMoney(matchList, moneyList))
      .toBe(30005000);
  });

  test('총합값을 토대로 수익률을 소수점 둘째 자리에서 반올림 해주는지', () => {
    expect(GameHandler.rateOfReturnCalculator(5000, 9000))
      .toEqual('55.6');;
  });
});

MissionUtils.Console.close();
