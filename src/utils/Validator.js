class validator {
  isSix(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  isNumber(numbers) {
    const regex = /^[0-9]+$/;
    if (typeof numbers === Array) {
      numbers.forEach(num => {
        if (!regex.test(num)) {
          throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
        }
      });
    } else {
      if (!regex.test(numbers)) {
        throw new Error('[ERROR] 숫자만 입력할 수 있습니다.');
      }
    }
  }

  isUnique(numbers) {
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 중복된 숫자를 입력할 수 없습니다.');
    }
  }

  isValidRange(numbers) {
    numbers.forEach(num => {
      if (num < 1 || num > 45) {
        throw new Error('[ERROR] 1~45 사이의 숫자만 입혁할 수 있습니다.');
      }
    });
  }

  isUnitOfThousnds(amount) {
    if (+amount % 1000 !== 0) {
      throw new Error('[ERROR] 천원 단위로 입력해 주세요.');
    }
  }
}
