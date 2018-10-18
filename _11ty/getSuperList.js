const ignoredItems = ['all', 'nav', 'post', 'posts'];

module.exports = function(kind, collection) {
  let simpleSet = new Set();
  collection.getAllSorted().forEach(function(item) {
    if (kind in item.data) {
      let list = item.data[kind];
      if (typeof list === 'string') {
        list = [list];
      }
      list.forEach((listItem) => {
        if (ignoredItems.includes(listItem)) {
          return;
        }
        simpleSet.add(listItem);
      });
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...simpleSet];
};
