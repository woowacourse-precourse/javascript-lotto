const { LOTTO_PICKER } = require('../src/constants');
const LottoPicker = require('../src/domain/LottoPicker');
const io = require('../src/infrastructure/io');

const mockInput = (input) => {
  io.input = jest.fn().mockImplementationOnce((message, callback) => callback(input));
};

describe('LottoPicker 테스트', () => {
  test('pickWinningNumbers()는 로또 번호 6개를 입력받는다.', () => {
    const message = LOTTO_PICKER.ASK_WINNING_NUMBER;
    io.input = jest.fn().mockImplementationOnce((message, callback) => callback('1, 2, 3, 4, 5, 6'));
    const callback = jest.fn();
    LottoPicker.pickWinningNumbers(message, callback);

    expect(callback).toHaveBeenCalledWith([1, 2, 3, 4, 5, 6]);
  });

  test('pickBonusNumber는 보너스 번호 하나를 입력받는다.', () => {
    const message = LOTTO_PICKER.ASK_BONUS_NUMBER;
    io.input = jest.fn().mockImplementationOnce((message, callback) => callback('7'));
    const callback = jest.fn();
    LottoPicker.pickBonusNumber(message, callback);

    expect(callback).toHaveBeenCalledWith(7);
  });

  test('예외 테스트: 당첨번호는 6개로 이루어져야한다.', () => {
    const message = LOTTO_PICKER.ASK_WINNING_NUMBER;
    mockInput('1, 2, 3, 4, 5');
    const callback = jest.fn();

    expect(LottoPicker.pickBonusNumber).toThrowError();
    expect(callback).not.toHaveBeenCalled();
  });
});
