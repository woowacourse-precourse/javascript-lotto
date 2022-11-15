const VALIDATION_VALUE = Object.freeze({
    empty: 0,
    six: 6,
    min: 0,
    max: 46,
    arrayFormat: /^[1-9|,]+$/,
    numberFormat: /^[0-9]+$/,
});

const LOTTO_VALUE = Object.freeze({
    zero: 0,
    thousand: 1000,
    plus: 1,
    min: 1,
    max: 45,
    digit: 6,
});

const MATCH = Object.freeze({
    three: 3,
    four: 4,
    five: 5,
    six: 6,
});

const COMPARE_VALUE = Object.freeze({
    length: 5,
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 1,
})

const PRIZE = 1;

const LOTTO_WIN = [5000, 50000, 1500000, 30000000, 2000000000];

module.exports = {
    VALIDATION_VALUE,
    LOTTO_VALUE,
    COMPARE_VALUE,
    LOTTO_WIN,
    MATCH,
    PRIZE,
}


