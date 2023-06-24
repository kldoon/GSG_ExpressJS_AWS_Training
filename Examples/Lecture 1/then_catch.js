const files = { x: 10, z: 50 };

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

console.log("Hello [Before]");
readValue("x").then(x => {
  const y = x * 2;
  console.log(y);
}).catch(err => {
  console.log("Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err Err ");
  console.log(err);
}).finally(() => {
  // Any cleaning code
  // file.close
  // connection.close
  console.log("Promise has been fulfilled!");
});

console.log("Hello [After]");