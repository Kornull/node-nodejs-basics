import pc from 'node:process';

const parseEnv = () => {
  const arr = [];
  const data = pc.env;
  for (let i in data) {
    if (i.includes('RSS_')) arr.push(`${i}=${data[i]}`);
  }

  console.log(arr.join('; '));
};

parseEnv();
