document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const bookNowBtn = document.getElementById('bookNowBtn');
    const myForm = document.getElementById('myForm');
    const closeFormBtn = document.querySelector('.btn.close');
  
    bookNowBtn.addEventListener('click', () => {
        const userName = document.getElementById('name').value;
        document.getElementById('userName').textContent = userName || 'Guest';
        myForm.style.display = 'block'; // Show the popup //
    });

    closeFormBtn.addEventListener('click', () => {
        myForm.style.display = 'none'; // Hide the popup //
    });
  
    // Optionally, hide the popup when clicking outside of the form content //
    myForm.addEventListener('click', (event) => {
        if (event.target === myForm) {
            myForm.style.display = 'none'; // Hide the popup //
        }
    });
});
  

    // Retrieve userInfo from session storage //

   const storedData = sessionStorage.getItem('userInfo');

   if (storedData) {
    // Parse the JSON string back into an object
    const userInfo = JSON.parse(storedData);

    // Display the chosen drink, gift and dog
    const userDrink = document.querySelector('#booking-drink'); 
    userDrink.innerHTML = `${userInfo.drink}`;
    const userGift = document.querySelector('#booking-gift'); 
    userGift.innerHTML = `${userInfo.gift}`;
    const userDog = document.querySelector('#booking-dog'); 
    userDog.innerHTML = `${userInfo.dog}`;
    const userDogPhoto = document.querySelector('#petPhoto'); 
    userDogPhoto.src = userInfo.dogPhoto; 

   } else {
       console.log("Make a choice");
   }
   
   sessionStorage.clear();

   