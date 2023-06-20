import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fileToCompress.txt';
const GZ = 'archive.gz';
const PATH_TO_FOLDER = join(__dirname, FOLDER);

const decompress = async () => {
  const rs = createReadStream(join(PATH_TO_FOLDER, GZ));
  const ws = createWriteStream(join(PATH_TO_FOLDER, FILE));
  await pipeline(rs, createGunzip(), ws);
};

await decompress();
