
const url = "https://api.github.com/repos/Elena-Nam/Open-API-Project";
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((e) => console.log(e));


  document.getElementById('year').textContent = new Date().getFullYear();