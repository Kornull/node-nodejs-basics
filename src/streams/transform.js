import { Transform, pipeline } from 'stream';
import process from 'process';

const transform = async () => {
  const streamTransform = new Transform({
    transform(chunk, enc, callback) {
      const res = chunk.toString().trim().split('').reverse().join('');

      callback(null, `${res}\n`);
    },
  });

  pipeline(process.stdin, streamTransform, process.stdout, (err) =>
    console.log(err)
  );
};

await transform();
