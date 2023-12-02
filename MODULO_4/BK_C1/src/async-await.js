function handlerSalut(word) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(word);
      resolve();
    }, 2000);
  });
}

function handlerTimeCustomer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const customer = { name: "daniel" };
      resolve(customer);
    }, 2000);
  });
}

async function fiveSecondsLater() {
  await handlerSalut("hello");
  const response = await handlerTimeCustomer();
  await handlerSalut("world");
  await handlerSalut(response.name);
}

fiveSecondsLater();
