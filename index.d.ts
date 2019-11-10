// Type definitions

/**
 * move files from one directory to another
 *   - `src` source directory
 *   - `dest` destination directory
 *   - `includeSrc` Whether to include the source folder, default: false
 */
declare function movedir(src: string, dest: string, includeSrc: boolean): Promise<void>

export = movedir