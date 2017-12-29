# Hands on: Project case
We will create a small single page application. The application has two screens (three components) with specific functionality: 
1)	**Upload page**  On the upload page, users can create and upload a photo. Each photo is described by a single word, that users try to guess. You can add a hint to help users to guess the correct word.

2)	**Overview page**  This page displays all uploaded images. It should get all images and handle the actual POST call to save a new guess in the database. 

3) **Image card**  This element is not a full page, but is used on the overview page. For each image, you can guess a word and display a hint. All guesses are aggregated over users to display the total number of correct and incorrect attempts for each image.

## Preparation
### Setup
Make sure you installed all required software on your machine: 

- [npm and node](https://nodejs.org/)
- polymer-cli (`npm i -g polymer-cli`)
- bower (`npm i -g bower`)
- IDE (e.g. [Atom](https://ide.atom.io/))
- Google Chrome
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Git repo
- Clone the repository from [Github](https://github.com/Bookah/photo-freeze).
- Get all dependencies: `bower i`
- Add a folder in src with your name. You will create your components in this folder.
- Make sure that the project runs by running `polymer serve --open` in the command line.
- Create a new page with your own name in the app: [instructions](https://www.polymer-project.org/2.0/start/toolbox/create-a-page).
(Note: create the page in your own folder instead of src.)

## Hands on: upload page
### Step 1: Create text input fields
- Create two text input fields for the descriptive word and hint (e.g. paper-input)
- Create properties for the two values of the input fields. (data-binding)
- Create a javascript function and use the property values to show an alert or validate the content.
### Step 2: Upload a photo
- Find a way to upload a photo in your browser and implement this in JS function(s)
(you could use input type="file" for example, docs [here] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).
- You can use iron-image to display a preview.
- Make sure the image/photo format is a base64 string.
### Step 3: Save the data in a database
- Implement iron-ajax to send a json file to POST one image (see the swagger file for more information).
- Create a button (e.g. paper-button) to save the file to the database.
- Use the *on-tap* property to initiate the JS function to make the HTTP request using iron-ajax and save the photo.
### Step 4: Build your page in the existing application
- Create a new (team) page and link in the application. Click [here](https://www.polymer-project.org/2.0/start/toolbox/create-a-page)
 for more information.
- Integrate your individual efforts into one overview component and put it in the team page.

## Hands on: Overview page
This page will display the element that the Photo Card team creates. Your contract is the following.
- Name of the custom element: my-photo-card
- Attribute for the photo id: id
- Attribute for the image: image
- Attribute for the attempts: attempts
- Attribute for the hint: hint
- Event to listen to: photo-card-guess-submitted. The event will have a detail with properties *id* for the photo id and *guess* for the newest guess of the descriptive word for this photo. 
### Step 1: Display photos/images in database
- On your page, implement iron-ajax to GET all images from the database. See the swagger-file for more information. See [webcomponents.org](http://www.webcomponents.org) for more information about iron-ajax and other existing components.
- Create a [dom-repeat template](https://www.polymer-project.org/2.0/docs/api/elements/Polymer.DomRepeat) with the array of images as items. In the template, show something simple, like a text.
- In your browser, check that the number of texts that are displayed equals the number of images in the array.
### Step 2: Implement an event listener
- Implement an [event listener](https://www.polymer-project.org/2.0/docs/devguide/events) for photo-card-guess-submitted.
- Implement a javascript function to check if the entered word equals the descriptive word and show the result to the end user.
- Make sure the JS function is called whenever the event is caught.
- Extend the functionality to create an attempts object with two fields: correct and incorrect. The fields should be incremented if the function is called with a correct or incorrect guess.
### Step 3: Implement my-photo-card
- Implement the my-photo-card element to display the photo information
- Check with the Photo Card team whether everything works and what their progress is. If you cannot use their component, use the demo component for now.
### Step 4: Update the image information
- Use iron-ajax to update the image information in the database with the correct and incorrect attempts. See the swagger file for more information.
- Do the GET request again, to update the attempts with the new information.
### Step 5: Build your page in the existing application
- Create a new (team) page and link in the application. Click [here](https://www.polymer-project.org/2.0/start/toolbox/create-a-page) for more information.
- Integrate your individual efforts into one overview component and put it in the team page.

## Hands on: Photo card
### Step 1: Design the page
- As a team, create a (mainly visual) overview for the page. You could think to use the following existing components: paper-card, iron-icon, paper-fab, paper-input. See [webcomponents.org](http://www.webcomponents.org) for more information.
- Look into the [dom-if template](https://www.polymer-project.org/2.0/docs/api/elements/Polymer.DomIf).
### Step 2: Create a new custom element 
- Create a new custom element (my-"name"-photo-card). You will create functionality to show an image and guesses up to now. Also, it should allow users to input text and view a hint.
- For now, add some text and display it on an existing page so you can check that you created the element correctly.
### Step 3: Create a container
- Create five properties on your element: 1) image, 2) hint, 3) attempts, 4) guess, 5) photoId.
- Create a component that serves as a container (look into paper-card for an easy to use option)
### Step 4: Show the photo information
- Show an image based on the image property. You can set some base64 string as default value to play around. You could use [this](https://www.base64-image.de/) site to create a valid base64 string.
- Each photo will contain an attempts object, containing the properties *correct* and *incorrect*. Set a default value for the attempts property. Show the correct and incorrect attempts for this property. You could use paper-fab or iron-icon to make this look more pretty.
### Step 5: Create an input field for users to guess the descriptive word
- Add an input field (e.g. paper-input) and bind the value to the guess property you created.
### Step 6: Show a hint
- Add a button (e.g. paper-button). Use the *on-tap* property to call a JS function.
- Using this JS function, set a boolean property to display or hide the hint.
- Implement a dom-if template based on the boolean property. 
- Inside the template, display the value of the hint property.
### Step 7: Create an event to submit the guess
- Create a button (e.g. paper-button). Use the on-tap property to call a JS function.
- Using this JS function, [dispatch a custom event](https://www.polymer-project.org/2.0/docs/devguide/events). The name of the event should be **photo-card-guess-submitted** in order for the Overview Page team to listen to the event.
- Inside the event, make sure that the detail property contains two properties:
  1) id. The photo-id for which the guess is submitted.
  2) guess. The text that the user provided.
- Make sure that the event bubbles up.
