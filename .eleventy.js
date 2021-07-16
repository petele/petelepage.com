const fs = require('fs');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginNavigation = require('@11ty/eleventy-navigation');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItEmoji = require('markdown-it-emoji');
const markdownItAttrs = require('markdown-it-attrs');
const glob = require('fast-glob');


module.exports = function(eleventyConfig) {
  const metadata = JSON.parse(fs.readFileSync('./site/_data/metadata.json'));

  eleventyConfig.setUseGitIgnore(false);

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Alias `layout: post` to `layout: layouts/post.njk`
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!--more-->',
    category: true,
  });

  // Load all filters
  glob.sync(['_11ty/filters/*.js']).forEach((file) => {
    const filters = require('./' + file);
    Object.keys(filters)
        .forEach((name) => {
          eleventyConfig.addFilter(name, filters[name]);
        });
  });

  // Load all shortcodes
  glob.sync(['_11ty/shortcodes/*.js']).forEach((file) => {
    const shortcodes = require('./' + file);
    Object.keys(shortcodes)
        .forEach((name) => {
          eleventyConfig.addPairedShortcode(name, shortcodes[name]);
        });
  });

  // Filter tag list to remove ignored tags.
  function filterTagList(tags) {
    const ignoredTags = ['all', 'nav', 'post', 'posts', 'page'];
    const result = (tags || [])
        .filter((tag) => ignoredTags.indexOf(tag) === -1);
    return result;
  }
  eleventyConfig.addFilter('filterTagList', filterTagList);

  // Create an array of all tags
  eleventyConfig.addCollection('tagList', function(collection) {
    const tagSet = new Set();
    collection.getAllSorted().forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return filterTagList([...tagSet]);
  });

  // Create a collection for each category
  metadata.categories.forEach((category) => {
    category = category.toLowerCase();
    eleventyConfig.addCollection(category, function(collection) {
      return collection.getAllSorted().filter((item) => {
        const itemCategory = item.data.category;
        return itemCategory && itemCategory.toLowerCase() === category;
      });
    });
  });

  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy('site/**/*.{jpg,jpeg,png,webp,gif}');
  eleventyConfig.addPassthroughCopy('site/css');

  // Customize Markdown library and settings:
  const markdownOpts = {
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  };
  const markdownAttrOpts = {allowedAttributes: ['id', 'class']};
  const markdownAnchorOpts = {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: '#',
  };
  const markdownLibrary = markdownIt(markdownOpts)
      .use(markdownItEmoji)
      .use(markdownItAttrs, markdownAttrOpts)
      .use(markdownItAnchor, markdownAnchorOpts);
  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.addFilter('toHTML', (str) => {
    return markdownLibrary.render(str);
  });

  // Override Browsersync defaults (used only with --serve)
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
          res.write(content404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: [
      'md',
      'njk',
      'html',
      'liquid',
    ],

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use '' or '/' (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: '/',
    // -----------------------------------------------------------------

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    // Opt-out of pre-processing global data JSON files: (default: `liquid`)
    dataTemplateEngine: false,

    // These are all optional (defaults are shown):
    dir: {
      input: './site',
      includes: '_includes',
      data: '_data',
      output: './dist',
    },
  };
};
