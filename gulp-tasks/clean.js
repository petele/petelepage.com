const util = require('util');
const rimraf = util.promisify(require('rimraf'));

const clean = async () => {
  return [
    rimraf('./dist'),
    rimraf('./site/css/main.css'),
    rimraf('./site/css/main.css.map'),
  ];
}

module.exports = clean;
