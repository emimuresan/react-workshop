# React Workshop

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisites

Install [node](https://nodejs.org/en/download/) then run the following commands:

```
git clone https://github.com/ecris87/react-workshop.git
cd react-workshop
npm install
npm start
```

After that the project should be up and running at http://localhost:3000/.

Exercies are described below. In order to test your work, after completing an exercise run all the unit tests associated with it using:

```
npm test
```

## Structure

### Session 1

#### Create-React-App

- Starting a React Project

#### Rendering

- JSX: not HTML but a syntax extension to JavaScript
- Rendering an Element into the DOM: enclosing tag, JSX fragments
- Embedding expressions in JSX
- Exploring React DOM updates
- Conditional rendering: if statements, ternary operator, logical and

#### Components

- Functional and Class components
- Working with components (composition, extraction)

#### Exercises

> 1. Extract the h1 and hr tags in a separate functional component called "Title" and use this new component in Main's render. Title should not use an enclosing tag to wrap the 2 elements.
> 2. Convert Main from a functional component to a class component.
> 3. Render each property of the user object returned by "getUser" in a separate paragraph.
> It should look like this:
> Name: JOHN SMITH
> Age: 27
> 4. In the first paragraph render "Anonymous" if the user is not logged-in, otherwise render name.
> If the age property is missing from the user object, don't render the second paragraph.

### Session 2

#### Managing Data in Components

- props (read-only, can be considered parameters for components)
- state (private and fully controlled by the component)

#### State and Lifecycle

- Components lifecycle hooks
- Using state correctly: state shouldn't be modified directly, setState is asychronous, state updates are merged

#### Handling Events

- React events are named using camelCase
- Class methods are not bound by default (best practice: bind them in the constructor)

#### Exercises

> When a product's quantity is incremented or decremented, update the ShoppingCart.
> The state properties "numberOfProducts" and "totalPrice" should reflect what the user clicked on.

### Session 3

#### Data Fetching

- Fetching data from the server and displaying it
- Lists and keys

#### Exercises

> 1. Make a GET request to the URL above using axios and apply this.formatData to the response.
> 2. Use conditional rendering to display the Loading component while the data is being fetched and, once the data has loaded, display a Product component for each data item.
> 3. When a product's quantity is incremented or decremented, update the ShoppingCart.
> The state properties "numberOfProducts" and "totalPrice" should reflect what the user clicked on.
