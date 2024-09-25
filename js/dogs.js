
const url = 'https://api-staging.adoptapet.com/search/pet_search?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&city_or_zip=29445&geo_range=50&species=dog&breed_id=real=801&sex=m&age=young&color_id=54&pet_size_range_id=2&hair=&bonded_pair=&special_needs=&include_mixes=&added_after=&start_number=1&end_number=50&meta_only=0';


async function fetchDogsData() {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Request failed: ' + response.statusText);
    }

    const data = await response.json();
    console.log(data); // Log to check the structure

    const dogsList = document.getElementById('dogs-list');
    dogsList.innerHTML = '';

    
    const petsArray = data.pets || []; 

    petsArray.forEach(dog => {
      const dogCard = `
        <div class="column_dog_card">
          <div class="content_dog">
           <div class="dog-image">
            <img src="${dog.large_results_photo_url}" alt="${dog.pet_name}" style="width: 200px; height: auto;">
          </div>
          
          <h3> ${dog.pet_name}</h3>
          <p class="breed-name">${dog.primary_breed}</p>
          <div class="btn_style">

            <p><button onclick="bookDog('${dog.pet_name}', '${dog.large_results_photo_url}')">Book</button></p>
            <p><button onclick="showPopup('${dog.age}', '${dog.sex}', '${dog.size}', '${dog.addr_city}, ${dog.addr_state_code}')">Meet</button></p>
          </div>
        </div>
      </div>`;
        
      dogsList.innerHTML += dogCard;
    });
    
  } catch (error) {
    console.error(error);
    const dogsList = document.getElementById('dogs-list');
    dogsList.innerHTML = '<p>Sorry, we could not fetch the dog data. Please try again later.</p>';
  }
}

fetchDogsData();


function showPopup(age, sex, size, location) {
  document.getElementById('popup-age').innerText = age;
  document.getElementById('popup-sex').innerText = sex;
  document.getElementById('popup-size').innerText = size;
  document.getElementById('popup-location').innerText = location;
  document.getElementById('popup').style.display = 'flex'; // Show the popup
}

function closePopup() {
  document.getElementById('popup').style.display = 'none'; // Hide the popup
}


function bookDog(petName, petPhoto) {
  alert(`You booked the time with ${petName}`);
  
  const existingData = sessionStorage.getItem('userInfo');
  let userData = existingData;

  if (existingData) {
      userData = JSON.parse(existingData);
  } else {
      userData = {}; 
  }
      
  // Store the chosen dog in the userData
  userData.dog = petName;
  userData.dogPhoto = petPhoto;

  sessionStorage.setItem('userInfo', JSON.stringify(userData));
 
  // Redirect to the gifts page
  window.location.href = "gifts.html";
 
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
