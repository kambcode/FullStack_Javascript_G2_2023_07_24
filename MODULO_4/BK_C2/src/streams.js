import fs from "fs";

function writeFile(fileName) {
  const fileStream = fs.createWriteStream(`./text/${fileName}`);

  const data = "Hello World this is a new day in kambcode class";

  fileStream.write(data, "utf-8");

  fileStream.end();

  fileStream.on("finish", () => {
    console.log("file was created successfully");
  });
}

function readFile(fileName) {
  const fileStream = fs.createReadStream(`./text/${fileName}`, {
    encoding: "utf-8",
    highWaterMark: 6, //bytes
  });

  let data = "";

  fileStream.on("data", (chunk) => {
    data += chunk;
    console.log(chunk);
  });

  fileStream.on("end", () => {
    console.log("thats it");
  });
}

writeFile("streamFile.txt");
readFile("streamFile.txt");
