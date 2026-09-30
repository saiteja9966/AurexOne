import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
const run = promisify(execFile);
const assets = JSON.parse(fs.readFileSync('scripts/assets.json','utf8'));
let failures = 0;
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i,i+4).map(async ({url,file}) => {
    if (fs.existsSync(file) && fs.statSync(file).size > 0) return;
    fs.mkdirSync(path.dirname(file), {recursive:true});
    try {
      await run('curl.exe',['-f','-sS','-L','--retry','2',url,'-o',file]);
      console.log(`${file}: ${fs.statSync(file).size} bytes`);
    } catch { failures++; console.error(`Failed: ${file}`); }
  }));
}
process.exitCode = failures ? 1 : 0;
