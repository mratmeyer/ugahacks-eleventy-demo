module.exports = function(eleventyConfig) {

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