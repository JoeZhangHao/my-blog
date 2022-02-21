import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';
import { symlink } from './utils';

export default (pkgPath: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const name = require(pkgPath).name;
  const linkPath = path.join(pkgPath, '../node_modules', name);
  const rootPath = path.join(pkgPath, '../node_modules');

  if (
    !fs.existsSync(linkPath) ||
    (fs.lstatSync(linkPath).isSymbolicLink() &&
      path.resolve(path.dirname(linkPath), fs.readlinkSync(linkPath)) !== rootPath)
  ) {
    rimraf.sync(linkPath);
    symlink(path.dirname(pkgPath), linkPath);
  }

  return {
    [name]: path.join(linkPath, 'src'),
  };
};
