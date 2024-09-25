
document.getElementById('year').textContent = new Date().getFullYear();

// Collect user data and store in sessionStorage //
function chooseGift(giftTitle) {
  alert(`You chose ${giftTitle}`);

  const existingData = sessionStorage.getItem('userInfo');
  let userData = existingData;

  if (existingData) {
      userData = JSON.parse(existingData);
  } else {
      userData = {}; 
  }
 // Store the chosen gift in the userData
  userData.gift = giftTitle;
//Store userData in sessionStorage
  sessionStorage.setItem('userInfo', JSON.stringify(userData));
// Redirect to the reservation page
  window.location.href = "reservation.html";
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