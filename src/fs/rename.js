import fs, { constants } from 'fs';

import { FOLDER, ERROR_MSG } from './constants.js';
import { returnPathFile } from './helper.js';

const fileName = 'wrongFilename.txt';
const renameFile = 'wrongFilename.md';

const pathFile = returnPathFile(FOLDER, fileName);
const pathRenameFile = returnPathFile(FOLDER, renameFile);

const rename = async () => {
  fs.access(pathFile, constants.F_OK, (err) => {
    if (err) {
      throw new Error(ERROR_MSG);
    } else {
      fs.access(pathRenameFile, constants.F_OK, (err) => {
        if (err) {
          fs.rename(pathFile, pathRenameFile, (err) => {
            if (err) throw new Error(ERROR_MSG);
          });
        } else {
          throw new Error(ERROR_MSG);
        }
      });
    }
  });
};

await rename();
