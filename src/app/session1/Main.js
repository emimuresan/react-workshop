import React from 'react';
import getUser from './getUser';

/**
 * Homework:
 *
 * 1. Extract the h1 and hr tags in a separate functional component called "Title" and use this
 * new component in Main's render. Title should not use an enclosing tag to wrap the 2 elements.
 *
 * 2. Convert Main from a functional component to a class component.
 *
 * 3. Render each property of the user object returned by "getUser" in a separate paragraph.
 * Should look like this:
 * Name: JOHN SMITH
 * Age: 27
 *
 * 4. In the first paragraph render "Anonymous" if the user is not logged-in, otherwise render name.
 * If the age property is missing from the user object, don't render the second paragraph.
 *
 * For homework 3 and 4, you can run unit tests with "npm test".
 *
 */

const Main = () => {
  let user = getUser();
  console.log(user);
  return (
    <div className="session">
      <h1>Components & Rendering</h1>
      <hr />
      <p>TODO</p>
    </div>
  );
};

export default Main;
