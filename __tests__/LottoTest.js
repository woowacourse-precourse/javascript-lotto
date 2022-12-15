const { LOTTO_NUMBER } = require('../src/constant/LottoNumbers');
const Validation = require('../src/model/Validation');

/*eslint-disable */
describe('로또 번호 테스트', () => {
  test.each(['1.3.4.5.6.7', '123456', '1 2 3 4 5 6'])('구분이 쉽표가 아닐 때', (value) => {
    expect(() => {
      new Validation(value).getStringValidator().isSplit(LOTTO_NUMBER.DIVISION).getMessages();
    }).toThrow('[ERROR]');
  });

  test.each(['일,이,4,5,6,7,8', '1,3,4,5,6,'])('숫자가 아닐 때 예외 발생', (value) => {
    expect(() => {
      new Validation(value).getStringValidator().isSplit(LOTTO_NUMBER.DIVISION).getMessages();
      new Validation(value.split(LOTTO_NUMBER.DIVISION))
        .getArrayValidator()
        .isArrayElementNumber()
        .getMessages();
    }).toThrow('[ERROR]');
  });

  test.each(['1,3,4,5,6', '1,3,4,5,6,7,8', '1,2,4', '1', '1,3,4,5,6,10,'])(
    '6개의 숫자가 아닐 때',
    (value) => {
      expect(() => {
        new Validation(value).getStringValidator().isSplit(LOTTO_NUMBER.DIVISION).getMessages();
        new Validation(value.split(LOTTO_NUMBER.DIVISION))
          .getArrayValidator()
          .isArrayElementNumber()
          .isLength(LOTTO_NUMBER.LENGTH)
          .getMessages();
      }).toThrow('[ERROR]');
    }
  );

  test.each(['1,3,4,5,7,7', '1,3,4,5,1,10'])('중복된 숫자가 있을 때', (value) => {
    expect(() => {
      new Validation(value).getStringValidator().isSplit(LOTTO_NUMBER.DIVISION).getMessages();
      new Validation(value.split(LOTTO_NUMBER.DIVISION))
        .getArrayValidator()
        .isArrayElementNumber()
        .isLength(LOTTO_NUMBER.LENGTH)
        .isRepeated(LOTTO_NUMBER.LENGTH)
        .getMessages();
    }).toThrow('[ERROR]');
  });

  test.each(['1,3,4,5,6,0', '1,3,4,5,6,76', '1,3,4,5,6,-3'])(
    '숫자 범위가 올바르지 않을 때',
    (value) => {
      expect(() => {
        new Validation(value).getStringValidator().isSplit(LOTTO_NUMBER.DIVISION).getMessages();
        new Validation(value.split(LOTTO_NUMBER.DIVISION))
          .getArrayValidator()
          .isArrayElementNumber()
          .isLength(LOTTO_NUMBER.LENGTH)
          .isRepeated(LOTTO_NUMBER.LENGTH)
          .isNumberRange([LOTTO_NUMBER.START_RANGE, LOTTO_NUMBER.END_RANGE])
          .getMessages();
      }).toThrow('[ERROR]');
    }
  );

  test.each(['01,3,4,5,6,1', '01,3,4,5,6,20', '1,3,4,5,26,05', '1,4,5,6,010,001'])(
    '숫자가 0으로 시작할 때',
    (value) => {
      expect(() => {
        new Validation(value).getStringValidator().isSplit(LOTTO_NUMBER.DIVISION).getMessages();
        new Validation(value.split(LOTTO_NUMBER.DIVISION))
          .getArrayValidator()
          .isArrayElementNumber()
          .isLength(LOTTO_NUMBER.LENGTH)
          .isRepeated(LOTTO_NUMBER.LENGTH)
          .isNumberRange([LOTTO_NUMBER.START_RANGE, LOTTO_NUMBER.END_RANGE])
          .isStartWith(LOTTO_NUMBER.BAN_START_WITH)
          .getMessages();
      }).toThrow('[ERROR]');
    }
  );
});
