import fs, { constants } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'wrongFilename.txt';
const RENAME_FILE = 'wrongFilename.md';
const PATH_TO_FILE = join(__dirname, FOLDER, FILE);
const PATH_TO_RENAME_FILE = join(__dirname, FOLDER, RENAME_FILE);

const rename = async () => {
  fs.access(PATH_TO_FILE, constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.access(PATH_TO_RENAME_FILE, constants.F_OK, (err) => {
        if (err) {
          fs.rename(PATH_TO_FILE, PATH_TO_RENAME_FILE, (err) => {
            if (err) throw new Error('FS operation failed');
          });
        } else {
          throw new Error('FS operation failed');
        }
      });
    }
  });
};

await rename();
