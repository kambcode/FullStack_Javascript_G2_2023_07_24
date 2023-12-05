import axios from "axios";

const getData = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );

  console.log("response: ", response.data);
};

getData();
