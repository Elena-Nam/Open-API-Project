
const url = "https://api.github.com/repos/Elena-Nam/Open-API-Project";
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((e) => console.log(e));



// Coffee section //

/* Iced coffee */
// get data  of iced coffee //
async function getIcedCoffeeData() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/iced');
    if (!response.ok) {
    throw new Error('Request failed');
    }

    const data = await response.json();

    const coffeeList = document.getElementById('coffee-list');
    coffeeList.innerHTML = ''; 

    data.forEach (coffee => {
      coffeeList.innerHTML += `<div class="column iced-coffee-card">
          <div class="content">
              <div class="coffee-image">
                  <img src="${coffee.image}" alt="${coffee.title}" style="width: 200px; height: auto;">
              </div>
              <h4 class="coffee-name">${coffee.title}</h4>
              <p><button class = "order" onclick ="chooseDrink('${coffee.title}')"> Book </button></p>
          </div>
      </div>`;
});
  } catch (error) {
    console.error(error);
  }

}

/* Hot coffee */
// get data  of hot coffee //
async function getHotCoffeeData() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) {
    throw new Error('Request failed');
    }

    const data = await response.json();

    const coffeeList = document.getElementById('coffee-list');
    coffeeList.innerHTML = ''; 

    data.forEach (coffee => {
      coffeeList.innerHTML += `<div class="column hot-coffee-card">
          <div class="content">
              <div class="coffee-image">
                  <img src="${coffee.image}" alt="${coffee.title}" style="width: 200px; height: auto;">
              </div>
              <h4 class="coffee-name">${coffee.title}</h4>
              <p><button class ="order" onclick="chooseDrink('${coffee.title}')"> Book </button></p>
          </div>
      </div>`;
});
  } catch (error) {
    console.error(error);
  }

}

getHotCoffeeData();
getIcedCoffeeData();

/* Other drinks */
// how to separate other drinks from hot coffee list? //
/*
async function getHotCoffeeData1() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) {
    throw new Error('Request failed');
    }

    const data = await response.json();

    const coffeeList = document.getElementById('coffee-list');
    coffeeList.innerHTML = ''; 

    data.forEach (coffee => {
      const isOtherDrink = [
        'Chai Latte',
        'Matcha Latte',
        'Seasonal Brew',
        'Svart Te',
        'Islatte',
        'Islatte Mocha',
        'Frapino Caramel',
        'Frapino Mocka',
        'Apelsinjuice',
        'Frozen Lemonade',
        'Lemonad'
      ].includes(coffee.title);
      
      
      const className = isOtherDrink ? 'other-drinks-card' : 'hot-coffee-card'; 
      coffeeList.innerHTML += `<div class="column ${className}">
          <div class="content">
              <div class="coffee-image">
                  <img src="${coffee.image}" alt="${coffee.title}" style="width: 200px; height: auto;">
              </div>
              <h4 class="coffee-name">${coffee.title}</h4>
              <p><button class = "order" onclick="chooseDrink('${coffee.title}')"> Book </button></p>
          </div>
      </div>`;
});
  } catch (error) {
    console.error(error);
  }

}

getHotCoffeeData1();
*/

// Function to filter the drinks
function filterSelection(category) {
  const columns = document.querySelectorAll('.column');
  if (category === 'all') {
      columns.forEach(column => column.style.display = 'block');
  } else {
      columns.forEach(column => {
        column.style.display = column.classList.contains(category) ? 'block' : 'none';
      });
  }
}

function chooseDrink(drinkTitle) {
  alert(`You chose ${drinkTitle}`);
}



