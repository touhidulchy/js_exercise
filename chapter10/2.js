function coinFlip() {
  return new Promise((resolve, reject) => {
    const result = Math.random() < 0.5;

    if (result) {
      resolve("Heads");
    } else {
      reject("Tails");
    }
  });
}

coinFlip()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Result:", error);
  });