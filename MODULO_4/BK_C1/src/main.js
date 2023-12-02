import { logWorld } from "./index.js";

logWorld("hello world");

const homeList = ["escoba", "platos", "mug"];

homeList.push("sofa");

for (let i = 0; i < homeList.length; i++) {
  console.log(homeList[i]);
}

homeList.forEach((value) => console.log(value));

const newHomeList = homeList.map((value) => {
  if (value === "mug") {
    return "posillo";
  } else {
    return value;
  }
});

const ages = [25, 20, 5, 3];

const newAges = ages.map((value) => {
  if (value >= 20) {
    return value + 5;
  } else {
    return value;
  }
});

console.log(ages);
console.log(newAges);
