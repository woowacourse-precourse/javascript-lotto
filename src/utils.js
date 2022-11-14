const isLengthError = (inputs) => inputs.length !== 6;
const isDuplicate = (inputs) => new Set(inputs).size !== inputs.length;


module.exports = {isDuplicate, isLengthError};