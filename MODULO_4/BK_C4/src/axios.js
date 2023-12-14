import axios from "axios";

async function getData() {
  const response = await axios.get("http://localhost:3000/");

  console.log("response: ", response.data);
}

getData();
