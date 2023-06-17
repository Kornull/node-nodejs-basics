import fs from 'fs/promises';
import { join } from 'path';

import { FOLDER, ERROR_MSG } from './constants.js';
import { returnPathFolder } from './helper.js';

const copyFolder = 'files_copy';
const pathFolder = returnPathFolder(FOLDER);
const pathCopyFolder = returnPathFolder(copyFolder);

const copy = async () => {
  try {
    await fs.access(pathFolder);
    try {
      await fs.access(pathCopyFolder);
      throw new Error();
    } catch {
      await fs.mkdir(pathCopyFolder);
      const files = await fs.readdir(pathFolder);
      files.forEach(async (file) => {
        await fs.copyFile(join(pathFolder, file), join(pathCopyFolder, file));
      });
    }
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await copy();
