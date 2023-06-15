import fs from 'fs';
import { pipeline } from 'stream/promises';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FOLDER = 'files';
const FILE = 'fileToCompress.txt';
const GZ = 'archive.gz';
const PATH_TO_FOLDER = join(__dirname, FOLDER);

const compress = async () => {
    const rs = fs.createReadStream(join(PATH_TO_FOLDER, FILE))
    const ws = fs.createWriteStream(join(PATH_TO_FOLDER, GZ))
    await pipeline(rs, createGzip(), ws)
};

await compress();