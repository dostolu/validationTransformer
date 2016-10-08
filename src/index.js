/**
 * Transform validation exception to the JSend data
 * @param err
 * @returns {*}
 */
const validationTransformer = err => {
  const data = {};
  if (err.errors) {
    Object.keys(err.errors).map(value => {
      data[value] = err.errors[value].message;
    });
    return data;
  }
  data.message = err.message;
  return data;
};

module.exports = validationTransformer;
