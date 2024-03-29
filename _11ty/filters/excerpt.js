const cheerio = require('cheerio');

module.exports = {
  excerpt: (content, limit = 512) => {
    if (content) {
      let txt = content.slice(0, content.indexOf('<!--more-->'));
      txt = cheerio
          .load(txt)
          .text()
          .replace(/\r\n|\n|\r|\t/g, ' ')
          .trim()
          .slice(0, limit);
      txt = txt.slice(0, txt.lastIndexOf(' '));

      // let txt = content.slice(0, content.indexOf('<!--more-->'));

      return `${txt}...`;
    }
  },
};
