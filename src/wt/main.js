import { Worker } from 'node:worker_threads';
import { cpus } from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const fileName = 'worker.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = join(__dirname, fileName);

const cpu = cpus();
const defaultNumber = 10;

const performCalculations = async () => {
  const arrayPromises = cpu.map((x, i) => {
    return new Promise((resolve) => {
      const worker = new Worker(pathToFile, {
        workerData: defaultNumber + i,
      });
      worker.on('message', (res) => resolve({ status: 'resolved', data: res }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });

  });


  const res = await Promise.all(arrayPromises);

  console.log(res)
};

await performCalculations();
