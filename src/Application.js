class Application {
  static convertNumber(target) {
    const result = parseInt(target, 10);

    if (Number.isNaN(result)) {
      throw new TypeError('[ERROR] 전달된 인수는 숫자로 변환이 가능해야 합니다.');
    }

    return result;
  }
}

module.exports = Application;
