class Calculate {
    static calculateLottoCount (money) {
        return money / 1000;
    }

    static divideByOneThousand (money) {
        return money % 1000;
    }

    
}

module.exports = Calculate;