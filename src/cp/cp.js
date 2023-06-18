import { fork } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const fileName = 'script.js';
const folder = 'files';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = join(__dirname, folder, fileName);

const spawnChildProcess = async (args) => {
  fork(pathToFile, args).on('message', (res) =>  process.stdout.write(res));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
