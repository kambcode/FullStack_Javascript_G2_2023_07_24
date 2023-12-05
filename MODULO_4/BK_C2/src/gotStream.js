import got from "got";
import fs from "fs";

const getPokemonStreamData = (fileName) => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1292";

  const fileStream = fs.createWriteStream(`./text/${fileName}`);

  got
    .stream(apiUrl)
    .on("data", (chunk) => {
      console.log("chunk", chunk.toString());
    })
    .pipe(fileStream)
    .on("end", () => {
      console.log("end");
    });
};

getPokemonStreamData("gotStreamFile.json");

//  dataApi ----> stream -----> | ------> writebleStream ------> create file
                            // pipe
