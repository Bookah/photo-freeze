# Hands on: Create a Polymer web component
Goal: Initiate a Polymer project and use existing components.

## Preparation
Make sure you installed all required software on your machine: 

- polymer-cli
- npm and node
- bower
- IDE
- Google Chrome

## Suggested steps
1. In the command line, type `polymer init`. You will be provided multiple options, choose *polymer-2-element*. This will create a new project for you with files for your component and dependencies.
2. Serve your component by running `polymer serve --open` in the command line. Your component is displayed in your browser. If your component is not visible, make sure you are viewing localhost:PORT/components/YOUR-COMPONENT/demo.
3. In your component file, a property *prop1* is defined. You can see that the value is displayed using data binding. Try to change the value and see that the value changes in your browser. You do not have to restart the server.
4. In your component, try to add a *paper-input* component. You can install the component using `bower install --save PolymerElements/paper-input`. See webcomponents.org for more information on the element. After installation, you have to import the element in your file and add the custom element tag in your template `<paper-input></paper-input>`.
5. Usually you want to display or save the value that was entered by a user. To do that, you have to bind the value of the *paper-input* to a variable. Try to display the entered value without using the element properties.
6. Now bind the input value to an element property. What happens if you set a default value for the property?
7. In demo/index.html change how your component is called. Add the created property and set a value for it.
8. If there is time left, you can play around with styling or try to import other existing web components (you could add our vanilla web component!).