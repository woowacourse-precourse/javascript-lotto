const InstanceException = require('../exception/InstanceException');
const NotNumberException = require('../exception/NotNumberException');

const Validation = {
  validate({ condition, exception }) {
    if (condition) {
      throw exception;
    }
  },
  checkNotNumber(value) {
    this.validate({
      condition: Number.isNaN(parseInt(value, 10)) || typeof value !== 'number',
      exception: new NotNumberException(),
    });
  },
  checkInstance(value, instance) {
    this.validate({
      condition: !(value instanceof instance),
      exception: new InstanceException(),
    });
  },
};

module.exports = Validation;
