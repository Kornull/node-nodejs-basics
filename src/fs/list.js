import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const PATH_TO_FOLDER = join(__dirname, FOLDER);

const list = async () => {
  try {
    const listFiles = await fs.readdir(PATH_TO_FOLDER);
    console.log(listFiles);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
