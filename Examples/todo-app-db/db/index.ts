import dataSource from "./dataSource.js";


const initialize = () => {
  dataSource.initialize().then(() => {
    console.log("Connected to DB!");
  }).catch(err => {
    console.error('Failed to connect to DB: ' + err);
  })
}

export default { initialize, dataSource };