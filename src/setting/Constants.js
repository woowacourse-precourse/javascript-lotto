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
    plus: 1
});


module.exports = {
    VALIDATION_VALUE,
    LOTTO_VALUE,
}


