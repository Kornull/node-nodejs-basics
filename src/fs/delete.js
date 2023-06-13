import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fileToRemove.txt';

const PATH_TO_FOLDER = join(__dirname, FOLDER, FILE);

const remove = async () => {
  try {
   await fs.unlink(PATH_TO_FOLDER);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
