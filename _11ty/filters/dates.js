const {DateTime} = require('luxon');

module.exports = {
  readableDate: (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('DDD');
  },
  shortDate: (dateObj) => {
    console.log('shortDate called');
    return 'DO NOT USE ME';
    // return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('DDD');
  },
  fullDate: (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('DDDD');
  },
  htmlDateString: (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  },
  dtAsISO: (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toISO();
  },
  dtNowISO: () => {
    return DateTime.now().toISO();
  },
  dtNowUnix: () => {
    return DateTime.now().toFormat('x');
  },
};
