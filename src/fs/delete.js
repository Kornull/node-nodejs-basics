import fs from 'fs/promises';

import { FOLDER, ERROR_MSG } from './constants.js';
import { returnPathFile } from './helper.js';

const fileName = 'fileToRemove.txt';

const filePath = returnPathFile(FOLDER, fileName);

const remove = async () => {
  try {
    await fs.unlink(filePath);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await remove();
