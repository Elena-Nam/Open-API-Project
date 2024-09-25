# Open-API-Project
Open API project for Intro to Programming course with Code the Dream

# Taily Daily dog coffee shop

## Description
"Taily Daily is a web application designed for users to explore dogs available for adoption in nearby shelters and schedule visits. It features a user-friendly interface that allows users to filter by coffee and dog options while providing detailed information about each dog."

## Features
- Book a dog
- Display detailed dog information (description, characteristics, location, etc.)
- Navigate through pages with Back/Next buttons
- View images of all dogs near the user's location
- Responsive design for desktop and mobile devices

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari)
- Internet connection (for API calls)
- A text editor (e.g., VSCode, Sublime Text) if you want to make changes

## Installation and Setup
1. Clone the repository or download the project files to your local machine.
   ```
   git clone https://github.com/Elena-Nam/Open-API-Project.git
   ```
2. Create a `config.js` file inside the /js directory of your cloned project with your API key:
   ```javascript
   const config = {
       API_KEY: 'your_api_key_here'
   };
   ```
   Replace `'your_api_key_here'` with your actual API key from [ADOPT-A-PET API](https://www.adoptapet.com/dog-adoption).

## Running the Application
1. Open the `index.html` file in your web browser.

2. The application should now be running in your browser. You can use the search functionality to look up dogs and navigate through the results.

3. To view the Welcome page, click on the "Home" link in the navigation menu or open `index.html` directly in your browser.

## File Structure
- `index.html`: Welcome page of the application
- `drinks.html`: Drinks page with information and booking options
- `dogs.html`: Dogs page with information and booking options
- `gifts.html`: Gifts page with information and booking options
- `reservation.html`: Reservation page with user's booked information

- `css/`
  - `index.css`: Styles for all pages
  - `media.css`: Styles for media queries
- `js/`
  - `index.js`: JavaScript for the index file functionality
  - `drinks.js`: JavaScript for the drinks file functionality
  - `dogs.js`: JavaScript for the dogs file functionality
  - `gifts.js`: JavaScript for the gifts file functionality
  - `reservation.js`: JavaScript for the reservation file functionality
  - `config.js`: Configuration file for API key (you need to create this)
- `img/`: Directory for storing images used in the project

## API Usage
This project uses [ADOPT-A-PET API](https://www.adoptapet.com/dog-adoption) and [SAMPLE APIs](https://sampleapis.com/api-list/coffee). You’ll need to sign up for a free API key for each API to use in the config.js file.

## Contributing
Feel free to fork the project and submit pull requests with any enhancements, bug fixes, or improvements.

## Contact
Elena Nam - ek28150@gmail.com

Project Link: https://github.com/Elena-Nam/Open-API-Project