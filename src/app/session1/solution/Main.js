import React from 'react';
import getUser from 'app/session1/getUser';

const Title = () => (
  <>
    <h1>Components & Rendering</h1>
    <hr />
  </>
);

class Main extends React.Component {
  render() {
    let user = getUser();
    return (
      <div className="session">
        <Title />
        <p>Name: {user.isLoggedIn ? user.name.toUpperCase() : 'Anonymous'}</p>
        {user.age && <p>Age: {user.age}</p>}
      </div>
    );
  }
}

export default Main;
