const validationNumber = (numbers) => {
    lengthCheck(numbers);
    notNumberCheck(numbers);
}

const lengthCheck = (number) => {
    if (number.length !== 1) {
        throw new Error("[ERROR] 1자리 숫자를 입력해주세요.");
    }
}

const notNumberCheck = (number) => {
    if (isNaN(number)) {
        throw new Error("[ERROR] 숫자를 입력해주세요.");
    }
}

module.exports = validationNumber;