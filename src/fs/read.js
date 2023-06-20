import fs from 'fs/promises';

import { FOLDER, ERROR_MSG } from './constants.js';
import { returnPathFile } from './helper.js';

const fileName = 'fileToRead.txt';
const filePath = returnPathFile(FOLDER, fileName);

const read = async () => {
  try {
    const textFile = await fs.readFile(filePath, 'utf8');
    console.log(textFile);
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await read();
