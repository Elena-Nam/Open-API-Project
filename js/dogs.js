
// get data of all dogs //

async function dogsData() {
    try {
      const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=50&api_key=live_nGHtqHdMrr9cPTIuzn4a73xZgNVdvGoYT5iyAOaEiPgxPj1OwS89Jah9vtcivbu2');
      if (!response.ok) {
      throw new Error('Request failed');
      }
    
      const data = await response.json();
    
      const dogsList = document.getElementById('dogs-list');
      dogsList.innerHTML = ''; 
  
      data.forEach (dogs => {
        dogsList.innerHTML += `<div class="column dog-card">
            <div class="content">
                <div class="dog-image">
                    <img src="${dogs.url}" alt="" style="width: 200px; height: auto;">
                </div>
                <h4 class="breed-name">${dogs.breeds[0].name}</h4>
                <div class = "btn_style">
                <p><button id = "book_dog" onclick ="bookDog('${dogs.name}')"> Book </button></p>
                <p><button id = "meet_dog" onclick ="getDogInfo('${dogs.name}')"> Meet </button></p>
                </div>
                </div>
        </div>`;
    });
    } catch (error) {
      console.error(error);
    }
  
  }
  
  dogsData();
