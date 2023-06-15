import { createWriteStream } from 'fs';
import process from 'process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fileToWrite.txt';
const PATH_TO_FILE = join(__dirname, FOLDER, FILE);

const write = async () => {
  const ws = createWriteStream(PATH_TO_FILE, 'utf-8');
  await pipeline(process.stdin, ws);
};

await write();
