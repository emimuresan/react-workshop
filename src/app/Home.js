import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>React Workshop</h1>
        <hr />
        {this.renderDescriptionSession1()}
        <hr />
        {this.renderDescriptionSession2()}
        <hr />
        {this.renderDescriptionSession3()}
      </div>
    );
  }

  renderDescriptionSession1() {
    return (
      <>
        <h2 className="app-title">Session 1</h2>
        <h3>Create-React-App</h3>
        <ul className="app-list">
          <li>Starting a React Project</li>
        </ul>

        <h3>Rendering</h3>
        <ul className="app-list">
          <li>JSX: not HTML but a syntax extension to JavaScript</li>
          <li>Rendering an Element into the DOM: enclosing tag, JSX fragments</li>
          <li>Embedding expressions in JSX</li>
          <li>Exploring React DOM updates</li>
          <li>Conditional rendering: if statements, ternary operator, logical and</li>
        </ul>

        <h3>Components</h3>
        <ul className="app-list">
          <li>Functional and Class components</li>
          <li>Working with components (composition, extraction)</li>
        </ul>
      </>
    );
  }

  renderDescriptionSession2() {
    return (
      <>
        <h2 className="app-title">Session 2</h2>
        <h3>Managing Data in Components</h3>
        <ul className="app-list">
          <li>props (read-only, can be considered parameters for components)</li>
          <li>state (private and fully controlled by the component)</li>
        </ul>
        <h3>State and Lifecycle</h3>
        <ul className="app-list">
          <li>Components lifecycle hooks</li>
          <li>
            Using state correctly: state shouldn't be modified directly, setState is asychronous, state updates are
            merged
          </li>
        </ul>
        <h3>Handling Events</h3>
        <ul className="app-list">
          <li>React events are named using camelCase</li>
          <li>Class methods are not bound by default (best practice: bind them in the constructor)</li>
        </ul>
      </>
    );
  }

  renderDescriptionSession3() {
    return (
      <>
        <h2 className="app-title">Session 3</h2>
        <h3>Data Fetching</h3>
        <ul className="app-list">
          <li>Fetching data from the server and displaying it</li>
          <li>Lists and keys</li>
        </ul>
      </>
    );
  }
}

export default Home;
