import fs from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

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
