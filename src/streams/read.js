import fs from 'fs';
import process from 'process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fileToRead.txt';
const PATH_TO_FILE = join(__dirname, FOLDER, FILE);

const read = async () => {
  const rs = fs.createReadStream(PATH_TO_FILE, 'utf-8');
  rs.pipe(process.stdout);
};

await read();
