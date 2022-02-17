module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/");

    eleventyConfig.addLayoutAlias('main', 'main.njk');
    eleventyConfig.addLayoutAlias('post', 'post.njk');

    return {
      dir: {
          input: "src",
          output: "_site",
          includes: "includes",
          layouts: 'layouts',
          data: 'data'
      },
      templateFormats: ['njk', 'md'],
      htmlTemplateEngine: 'njk',
      markdownTemplateEngine: 'njk',
      passthroughFileCopy: true
    };

};