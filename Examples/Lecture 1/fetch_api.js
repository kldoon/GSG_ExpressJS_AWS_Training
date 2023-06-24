const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
    .then(async response => {
      const data = await response.json();
      // response.json().then(data => { });
      console.log(data);
    })
    .catch(err => {
      console.log("Error printed by me:");
      console.log(err);
    });
}

fetchData();

let x = 10;
x = "ahmad";
y = x + 15;