const marked = require('marked');

const transmuteMarkdown = options => (file, done) => {
  const { content, ext } = file;
  if (ext === '.md') {
    const transmuted = marked(content, options);
    return done({ content: transmuted, ext: '.html' });
  }
  return done();
};

module.exports = transmuteMarkdown;
