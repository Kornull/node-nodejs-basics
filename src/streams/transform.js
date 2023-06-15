import { Transform } from 'stream';
import { pipeline } from 'stream/promises';
import process from 'process';

const transform = async () => {
  const streamTransform = new Transform({
    transform(chunk, enc, callback) {
      const res = chunk.toString().trim().split('').reverse().join('');

      callback(null, `${res}\n`);
    },
  });

  await pipeline(process.stdin, streamTransform, process.stdout);
};

await transform();
