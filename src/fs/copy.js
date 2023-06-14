import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const COPY_FOLDER = 'files_copy';
const PATH_TO_FOLDER = join(__dirname, FOLDER);
const PATH_TO_NEW_FOLDER = join(__dirname, COPY_FOLDER);

const copy = async () => {
  try {
    await fs.access(PATH_TO_FOLDER);
    try {
      await fs.access(PATH_TO_NEW_FOLDER);
      throw new Error();
    } catch {
      await fs.mkdir(PATH_TO_NEW_FOLDER);
      const files = await fs.readdir(PATH_TO_FOLDER);
      files.forEach(async (file) => {
        await fs.copyFile(
          join(PATH_TO_FOLDER, file),
          join(PATH_TO_NEW_FOLDER, file)
        );
      });
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
