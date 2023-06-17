import fs from 'fs/promises';

import { FOLDER, ERROR_MSG } from './constants.js';
import { returnPathFile } from './helper.js';

const fileName = 'fresh.txt';
const msg = 'I am fresh and young';

const filePath = returnPathFile(FOLDER, fileName)

const create = async () => {
  try {
    await fs.writeFile(filePath, msg, { flag: 'wx' });
  } catch {
    throw new Error(ERROR_MSG);
  }
};

await create();
