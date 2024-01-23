export function forEach(items, cb) {
  for (let index = 0; index < items.length; index++) {
    cb(items[index]);
  }
}

export function getHelloEarth() {
  return "Hello Earth";
}

export function getRandomNumber() {
  return Math.floor(Math.random() * 999);
}

export function anotherFunction() {
  const randomNumber = getRandomNumber();
  const message = getHelloEarth();

  return `${message} ${randomNumber}`;
}

export const user = {
  getName: () => {
    return "Wilmer";
  },
};

// forEach([1, 2, 3, 4, 5], (item) => {
//   console.log("this is a number: ", item);
// });
