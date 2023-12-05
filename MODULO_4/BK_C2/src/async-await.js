function handlerTime(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(word);
      resolve();
    }, 2000);
  });
}

function handlerTimeWithError(word) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(word);
      reject();
    }, 2000);
  });
}

async function numberSequence() {
  console.log("1");

  try {
    await Promise.all([handlerTime("2"), handlerTime("3")]);

    await Promise.all([handlerTime("4"), handlerTime("5")]);

    await handlerTime("6");

    await handlerTimeWithError("7");

    console.log("app ends without error");
  } catch (error) {
    console.log("app ends with error");
    // throw new Error("this is an error: ", error);
  }
}

numberSequence();
