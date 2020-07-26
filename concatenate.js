const fs = require('fs-extra');
const concat = require('concat');
const element = process.argv[2];
concatenate = async () =>{
  const files = [
    `./dist/${element}/runtime-es2015.js`,
    `./dist/${element}/polyfills-es2015.js`,
    `./dist/${element}/main-es2015.js`,
  ];

    await fs.ensureDir('output');
    await concat(files, `output/${element}.js`);
}
concatenate();   