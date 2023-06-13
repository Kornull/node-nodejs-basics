import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fileToRead.txt';
const PATH_TO_FILE = join(__dirname, FOLDER, FILE);

const read = async () => {
  try {
    const textFile = await fs.readFile(PATH_TO_FILE, 'utf8');
    console.log(textFile);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
