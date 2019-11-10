const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

/**
 * move files from one directory to another
 * 
 * @param {String} src source directory
 * @param {String} dest destination directory
 * @param {Boolean} [includeSrc=false] Whether to include the source folder
 */
async function movedir(src, dest, includeSrc = false) {
  try {
    await fsPromises.access(dest, fs.constants.F_OK);
  } catch (error) {
    await fsPromises.mkdir(dest);
  }

  if (includeSrc === true) {
    console.log(dest)
    dest = path.join(dest, path.basename(src)); 
    console.log(dest)
    try {
      await fsPromises.access(dest, fs.constants.F_OK);
    } catch (error) {
      await fsPromises.mkdir(dest);
    }
  }

  const names = await fsPromises.readdir(src);
  for (const name of names) {
    const _path = path.resolve(src, name);
    const _dest = path.resolve(dest, name);
    const stat = await fsPromises.stat(_path);
    if (stat.isDirectory()) {
      await movedir(_path, _dest);
    } else {
      await fsPromises.rename(_path, _dest);
    }
  }

  await fsPromises.rmdir(src);
}

module.exports = movedir