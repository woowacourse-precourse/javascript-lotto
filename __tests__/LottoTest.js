const Lotto = require('../src/Lotto');
const LottoValidator = require('../src/Lotto.validator');
const { LottoInputDto, LottoPrizeDto } = require('../src/LottoDto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });
});

describe('Validator 클래스 테스트', () => {
  test('checkMoney는 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.checkMoney('가나다');
    }).toThrow('[ERROR]');
  });
  test('checkMoney는 1000으로 나뉘지 못하면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.checkMoney('1002');
    }).toThrow('[ERROR]');
  });

  test('getLottoPurchasenumber는 1000으로 나뉘지 못하면 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.getLottoPuchaseNumber(1002);
    }).toThrow('[ERROR]');
  });

  test('splitLottoNumbers는 6개의 서로 다른 로또번호가 아닐시 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.splitLottoNumbers('1,2,3,4,5,5');
    }).toThrow('[ERROR]');
  });
  test('splitLottoNumbers는 6개의 번호아닐시 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.splitLottoNumbers('1,2,3,4,5');
    }).toThrow('[ERROR]');
  });
  test('splitLottoNumbers는 6개의 서로 다른 ","로 나눠지지 못할 시 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.splitLottoNumbers('1,2,3,4,5,5,');
    }).toThrow('[ERROR]');
  });
  test('splitLottoNumbers는 6개의 서로 다른 1~45사이의 숫자가 아닐 시 예외가 발생한다.', () => {
    expect(() => {
      LottoValidator.splitLottoNumbers('1,2,3,4,5,46');
    }).toThrow('[ERROR]');
  });

  test('additionalNumber는 lotto의 numbers와 겹칠시 예외가 발생한다. ', () => {
    expect(() => {
      LottoValidator.additionalNumber(6, '1,2,3,4,5,6');
    }).toThrow('[ERROR]');
  });
  test('additionalNumber의 추가 숫자는 숫자가 아닐 시 예외가 발생한다. ', () => {
    expect(() => {
      LottoValidator.additionalNumber('가', '1,2,3,4,5,6');
    }).toThrow('[ERROR]');
  });

  test('checkLottoWin는 등수에 따라 lottoPrizeDto에 숫자가 올라가야 한다', () => {
    let lottoPrizeDto = new LottoPrizeDto();

    LottoValidator.checkLottoWin(
      new LottoInputDto([1, 2, 3, 4, 5, 6], 7),
      { numbers: [1, 2, 3, 4, 8, 9] },
      lottoPrizeDto,
    );
    expect(lottoPrizeDto.prizeCount).toEqual([0, 0, 0, 1, 0]);

    LottoValidator.checkLottoWin(
      new LottoInputDto([1, 2, 3, 4, 5, 6], 7),
      { numbers: [1, 2, 3, 4, 5, 7] },
      lottoPrizeDto,
    );
    expect(lottoPrizeDto.prizeCount).toEqual([0, 1, 0, 1, 0]);
  });
});
