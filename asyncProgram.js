const fs = require("fs");

function readPro(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function writePro(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) reject(err);
      resolve("Success");
    });
  });
}

// readPro(`${__dirname}/dev-data/streamTxt.txt`)
//   .then((res) => {
//     return writePro(`${__dirname}/dev-data/writeStream.txt`, res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const writeData = async () => {
  try {
    const data = await readPro(`${__dirname}/dev-data/streamTxt.txt`);
    const writeMsg = await writePro(
      `${__dirname}/dev-data/writeStdsream.txt`,
      data
    );
    console.log(writeMsg);
  } catch (err) {
    console.log(err);
    throw err;
  }
  return "Hello";
};
console.log("1");
const x = writeData();
x.then((res) => console.log(res));
console.log("2");
