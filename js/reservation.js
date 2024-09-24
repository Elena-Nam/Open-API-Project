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
  