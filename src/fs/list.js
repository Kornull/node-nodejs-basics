import fs from 'fs/promises';

import { FOLDER, ERROR_MSG } from './constants.js';
import { returnPathFolder } from './helper.js';

const folderPath = returnPathFolder(FOLDER);

const list = async () => {
  try {
    const listFiles = await fs.readdir(folderPath);
    console.log(listFiles);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await list();
