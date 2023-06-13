import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fresh.txt';
const PATH_TO_FILE = join(__dirname, FOLDER, FILE);
const MESSAGE = 'I am fresh and young';

const create = async () => {
  try {
    await fs.writeFile(PATH_TO_FILE, MESSAGE, { flag: 'wx' });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
