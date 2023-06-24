const files = { x: 10, y: 30, z: 50, v: 15 };

const readValue = (vName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (files[vName]) {
        const v = files[vName];
        resolve(v);
      } else {
        reject({ code: 401, msg: "Value not found!" });
      }
    }, 3000);
  })
}

// async function name(params) { }
const main = async () => {
  console.log("Hello [Before]");

  try {
    const x = await readValue("h");
    const y = x * 2;
    console.log(y);
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  } finally {

  }

  console.log("Hello [After]");

  ///// Read multiple values ////

  const x = readValue("x");
  const y = readValue("y");
  const z = readValue("z");

  Promise.all([x, y, z]).then(results => {
    console.log(results);
  });
}

main();