import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const returnPathFolder = (folderName) => {
  return join(__dirname, folderName);

};
export const returnPathFile = (folderName, fileName) => {
  return join(__dirname, folderName, fileName)
};
