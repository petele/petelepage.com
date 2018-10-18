const superList = require('./getSuperList')
module.exports = function(collection) {
  return superList('categories', collection);
}
