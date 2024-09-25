
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

// get data  of hot coffee //
/*async function getHotCoffeeData() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) {
    throw new Error('Request failed');
    }

    const data = await response.json();
    console.log(data);
/*
    const coffeeList = document.getElementById('coffee-list');
    coffeeList.innerHTML = ''; 

    data.forEach (coffee => {
      coffeeList.innerHTML += `<div class="column hot-coffee-card">
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
*/

/* Hot coffee */
// get data  of hot coffee //
async function getHotCoffeeData() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    const coffeeTerms = ['coffee', 'espresso', 'caffeine', 'latte', 'cappuccino'];

    // Filter drinks to include only those with coffee-related ingredients
    const drinksWithCoffee = data.filter(coffee => 
      coffee.ingredients.some(ingredient => 
        coffeeTerms.some(term => ingredient.toLowerCase().includes(term))
      )
    );

    const coffeeList = document.getElementById('coffee-list');
    coffeeList.innerHTML = ''; 

    drinksWithCoffee.forEach(coffee => {
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

/* Other drinks */
// get data  of hot coffee and then separate drinks which don't include coffee //
async function getOtherDrinksData() {
  try {
    const response = await fetch('https://api.sampleapis.com/coffee/hot');
    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();

    const coffeeTerms = ['coffee', 'espresso', 'caffeine', 'latte', 'cappuccino'];

    const drinksWithoutCoffee = data.filter(coffee => 
      !coffee.ingredients.some(ingredient => 
        coffeeTerms.some(term => ingredient.toLowerCase().includes(term))
      )
    
    );

    const coffeeList = document.getElementById('coffee-list');
    coffeeList.innerHTML = ''; 

    drinksWithoutCoffee.forEach(coffee => {
      coffeeList.innerHTML += `<div class="column other-drinks-card">
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
  

// Function to filter the drinks //
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


// Collect user data and store in sessionStorage //
function chooseDrink(drinkTitle) {
  alert(`You chose ${drinkTitle}`);
  //Create userData
  let userData = {
    drink: drinkTitle // Store the chosen drink
  };
  //Store userData in sessionStorage
  sessionStorage.setItem('userInfo', JSON.stringify(userData));
  // Redirect to dogs page
  window.location.href = "dogs.html";
}


// top button //
let mybutton = document.getElementById("topBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 


