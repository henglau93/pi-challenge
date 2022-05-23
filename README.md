# Background
I developed a React App to get the circumference of the Sun by calculating the Pi value algorithmically from Heroku backend (HTTP server).
I chose Nilakantha Series Formula to calculate the Pi value with increasing digits. It converges rapidly and easy to create algorithm.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Limitation
With my Pi algorithm, after crossing check with published Pi value, it managed to calculate the Pi value up to 14 digits only, which is 3.1415926535897. 
Calculated 15th digit is 8 but the correct published one is 9. 

# Future work
Will use other formula to get more accurate Pi value.
Will save the most accurate Pi value to MongoDB database.
