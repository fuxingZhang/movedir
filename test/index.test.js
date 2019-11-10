const assert = require('assert');
const movedir = require('../lib');

describe('#indexOf()', function () {
  const src = './test/src';
  const src_include = './test/src_include';
  const dest = './test/dest';
  const dest_include = './test/dest_include';
 
  it('movedir includeSrc equal false should ok', async () => {
    try {
      await movedir(src, dest);
    } catch (error) {
      console.log(error)
      assert(false);
    }
  });

  it('movedir includeSrc equal true should ok', async () => {
    try {
      await movedir(src_include, dest_include, true);
    } catch (error) {
      assert(false);
    }
  });
});