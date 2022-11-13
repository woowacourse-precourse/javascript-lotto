const CustomError = require('../src/Error/CustomError');
const Input = require('../src/Input/index');

describe('Input 클래스 추상화 검사 테스트 ', () => {
  test('Input 클래스를 사용하여 객체를 생성하면 예외가 발생한다.', () => {
    expect(() => {
      new Input();
    }).toThrow('[ERROR] 추상 클래스입니다.');
  });
  test('Input 클래스의 추상화 메소드를 호출하면 예외가 발생한다. (1)', () => {
    expect(() => {
      Input.validate();
    }).toThrow('[ERROR] 추상 메서드입니다.');
  });
  test('Input 클래스의 추상화 메소드를 호출하면 예외가 발생한다. (2)', () => {
    expect(() => {
      Input.save();
    }).toThrow('[ERROR] 추상 메서드입니다.');
  });
});

describe('CustomError 클래스 추상화 검사 테스트 ', () => {
  test('customError 클래스를 사용하여 객체를 생성하면 예외가 발생한다.', () => {
    expect(() => {
      new CustomError();
    }).toThrow('추상 클래스입니다.');
  });
});
