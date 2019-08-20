import React from 'react';
import getUser from './getUser';

/**
 * Exercises:
 *
 * 1. Extract the h1 and hr tags in a separate component called "Title" and use this
 * new component in Main's render. Title should not use an enclosing tag to wrap the 2 elements.
 *
 * 2. Render each property of the user object returned by "getUser" in a separate paragraph.
 * The name should be in uppercase letters. Overall it should look like this:
 * Name: JOHN SMITH
 * Age: 27
 *
 * 3. In the first paragraph render "Anonymous" if the user is not logged-in, otherwise render name.
 * If the age property is missing from the user object, don't render the second paragraph.
 *
 * For points 2 and 3, you can run unit tests with: `npm test "Session1"`
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
