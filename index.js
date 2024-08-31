
const url = "https://api.github.com/repos/Elena-Nam/Open-API-Project";
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((e) => console.log(e));

// drinks page //
/* Hot coffee */
  async function fetchHotCoffeeData() {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/hot');
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  fetchHotCoffeeData();

/* iced coffee */
  async function fetchIcedCoffeeData() {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/iced');
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  fetchIcedCoffeeData();