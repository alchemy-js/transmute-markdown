const transmuteMarkdown = require('./index');

describe('transmuteMarkdown', () => {
  it('calls done with arguments', () => {
    const done = jest.fn();
    const file = { content: '# Hello World', ext: '.md' };
    const transmuter = transmuteMarkdown();
    transmuter(file, done);
    expect(done).toBeCalledWith({
      content: '<h1 id="hello-world">Hello World</h1>\n',
      ext: '.html',
    });
  });
  it('calls done without arguments', () => {
    const done = jest.fn();
    const file = { ext: '.html' };
    const transmuter = transmuteMarkdown();
    transmuter(file, done);
    expect(done).toBeCalledWith();
  });
});
