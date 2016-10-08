/* eslint-disable no-undef */
const { expect } = require('chai');
const validationTransformer = require('../src');

const fixture1 = {
  errors: {
    first: {
      data: 'some data',
      message: 'some message'
    },
    second: {
      data: 'some data again',
      message: 'some message again',
      someting: 'Some extra data'
    }
  },
  message: 'Main error message'
};
const result1 = {
  first: fixture1.errors.first.message,
  second: fixture1.errors.second.message
};

const fixture2 = {
  message: 'Main error message',
  data: 'Some additional data'
};
const result2 = {
  message: fixture2.message
};

describe('validationTransformer', () => {
  it('should transform sub errors without main message', () => {
    const res = validationTransformer(fixture1);
    expect(res).to.be.deep.equal(result1);
  });
  it('should return transform only main message', () => {
    const res = validationTransformer(fixture2);
    expect(res).to.be.deep.equal(result2);
  });
});
