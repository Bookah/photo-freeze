# Hands on: Project case
We will create a small single page application. The application has two screens with specific functionality: 
1)	Upload page

 On the upload page, users can create and upload a photo. Each photo is described by a single word, that users try to guess. You can add a hint to help users to guess the correct word.
2)	Guess page

 This page displays all uploaded images. You can select an image and guess a word. All guesses are aggregated over users to display the total number of correct and incorrect attempts for each image.

## Getting started
Instructions to setup your environment

## Hands on: upload page
### Step 1: Design the page
- As a team, create a design for the page. You could think to use the following existing components: paper-input.
### Step 2: Build your page in the existing application
- Create a new page and link in the application
### Step 3: Create text input fields
- Create two text input fields for the descriptive word and hint (e.g. paper-input)
- Try to use data binding to show the value of the input fields on the screen
- Create properties for the two values of the input fields
- Create a javascript function and use the property values to show an alert or validate the content.
### Step 4: Save the data in a database
- Mock the image base64 string.
- Use iron-ajax to send a json file to POST one image (see the swagger file for more information).
### Step 5: Take a photo on your device
### Step 6: Transform the photo to base64

## Hands on: Guess page
### Step 1: Design the page
- As a team, create a design for the page. You could think to use the following existing components: paper-card, iron-icon.
- Look into dom-if and dom-repeat templates
### Step 2: Build your page in the existing application
- Create a new page and link in the application
### Step 3: Create a mocked image
- See swagger file for more information on the file format
### Step 4: Display the information of a single image
### Step 5: Retrieve data from the database
- Get all images from the database using iron-ajax
- Link the retrieved array to a property
- Show the information of one image in your screen
### Step 6: Show all images
- Implement a dom-repeat template around your image information
- Link the property that contains the images array to the dom-repeat template
### Step 7: Refactor the image view
- Create a new web component that includes the view of a single image
- Import the newly created web component on your page
- Use the web component in the dom-repeat
### Step 8: Add a text field to the image view
- Use paper-input to allow users to guess the descriptive word
- Implement a javascript function to check if the entered word equals the descriptive word and show the result to the end user. You can decide how this function is triggered.
- Extend the functionality to create an attempts object with two fields: correct and incorrect. The fields should be incremented if the function is called with a correct or incorrect guess.
### Step 9: Update the image information
- Use iron-ajax to update the image information in the database with the correct and incorrect attempts.
### Step 10: Show a hint
- Create a button (e.g. paper-fab or paper-button) to display the hint
### Step 11: Show text input / hint button on click
- Use dom-if
### Step 12: Apply conditional styling