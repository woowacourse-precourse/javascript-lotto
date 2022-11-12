class InputException {
    isThousand(money) {
        if (+money / 1000 !== Math.floor(+money / 1000))
            throw new Error('[ERROR] 천원 단위의 숫자를 입력해주세요.');

        return true;
    }
}

class LottoException {
    isSix(lotto) {
        const length = lotto.length;
        if (length !== 6)
            throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');

        return true;
    }
}
module.exports = { InputException, LottoException };
