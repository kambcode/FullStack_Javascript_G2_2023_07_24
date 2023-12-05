import axios from "axios";

const getData = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );

  // const [responseColombia, responsePokemon] = await Promise.all([
  //   axion.get("colombia"),
  //   axios.get("pokemon"),
  // ]);

  // responseColombia.data;

  console.log("response: ", response.data);
};

getData();
