const checkNotNumber = (value) => Number.isNaN(parseInt(value, 10)) || typeof value !== 'number';

module.exports = { checkNotNumber };
