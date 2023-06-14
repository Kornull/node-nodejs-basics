import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fileToCalculateHashFor.txt';
const PATH_TO_FILE = join(__dirname, FOLDER, FILE);

const calculateHash = async () => {
  const file = await fs.readFile(PATH_TO_FILE, 'utf-8');
  const hashResult = crypto.createHash('sha256').update(file).digest('hex');

  console.log(hashResult);
};

await calculateHash();
