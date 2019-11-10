# movedir
move files from one directory to another by nodejs

## Install

```sh
$ npm i @fuxingzhang/movedir
```  

## Options  
```js
/**
 * move files from one directory to another
 *   - `src` source directory
 *   - `dest` destination directory
 *   - `includeSrc` Whether to include the source folder, default: false
 */
declare function movedir(src: string, dest: string, includeSrc: boolean): Promise<void>  
```

## Useage  

### Doesn't include the source folder

```js
const movedir = require('@fuxingzhang/movedir');
const src = './test/src';
const dest = './test/dest';

(async () => {
  await movedir(src, dest);
})().catch(console.error);
```  

### Including the source folder

```js
const movedir = require('@fuxingzhang/movedir');
const src = './test/src';
const dest = './test/dest';

(async () => {
  await movedir(src, dest, true);
})().catch(console.error);
```  

## Test

```sh
$ npm test
```  