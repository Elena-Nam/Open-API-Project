
const url = "https://api.github.com/repos/Elena-Nam/Open-API-Project";
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((e) => console.log(e));



// Coffee section //

/* Iced coffee */
// get data about the names of iced coffee //
async function getIcedCoffeeData() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/iced');
    if (!response.ok) {
    throw new Error('Request failed');
    }

    const data = await response.json();
    data.forEach (coffee => {
    const kinds = `<div> ${coffee.title} </div>`;
    document.querySelector ('.coffee-name').insertAdjacentHTML(`beforeend`, kinds);
    });

  } catch (error) {
    console.error(error);
  }
}

getIcedCoffeeData()

// get data of iced coffee images//
async function getIcedCoffeeImages() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/iced');
    if (!response.ok) {
      throw new Error('Request failed');
    }
  
    const data = await response.json();
    data.forEach (coffee => {
    const photo = `<div> 
    <img src="${coffee.image}" alt="${coffee.name}" style="width: 200px; height: auto;"></div>`;
    document.querySelector ('.coffee-image').insertAdjacentHTML(`beforeend`, photo);
    });
  
  } catch (error) {
    console.error(error);
  }
}
  
getIcedCoffeeImages()

/* Hot coffee */
// get data about the names of hot coffee //
async function getHotCoffeeData() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) {
    throw new Error('Request failed');
    }

    const data = await response.json();
    data.forEach (coffee => {
    const kinds = `<div> ${coffee.title} </div>`;
    document.querySelector ('.coffee-name').insertAdjacentHTML(`beforeend`, kinds);
    });

  } catch (error) {
    console.error(error);
  }
}

getHotCoffeeData()

// get data of hot coffee images//
async function getHotCoffeeImages() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) {
      throw new Error('Request failed');
    }
  
    const data = await response.json();
    data.forEach (coffee => {
    const photo = `<div> 
    <img src="${coffee.image}" alt="${coffee.name}" style="width: 200px; height: auto;"></div>`;
    document.querySelector ('.coffee-image').insertAdjacentHTML(`beforeend`, photo);
    });
  
  } catch (error) {
    console.error(error);
  }
}
  
getHotCoffeeImages()