import React, { PureComponent } from 'react';
import Shop from './Shop';

/**
 * Exercises: see Shop.js
 */

class Main extends PureComponent {
  state = {
    date: new Date(),
    randomNumber: 0
  };

  /**
   * PHASE 1: MOUNTING
   * These lifecyle hooks will be executed once
   */
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // initial render would happen here (by convention the render method is implemented below, after the lifecycle hooks)

  componentDidMount() {
    // network requests, setState, DOM work, attach event handler
    console.log('componentDidMount');
    // this.timer = setInterval(() => {
    //   this.setState({
    //     date: new Date(),
    //     randomNumber: Math.floor(Math.random(0, 1) * 100)
    //   });
    // }, 1000);
  }

  /**
   * PHASE 2: UPDATING
   * These lifecyle hooks may be executed multiple times (when the component is re-rendered)
   */

  // This is just an example, no need to implement shouldComponentUpdate if the component subclasses PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   let isUpdateNeeded = true; // checks based on nextProps, nextState compared to this.props, this.state
  //   console.log("shouldComponentUpdate => ", isUpdateNeeded);
  //   return isUpdateNeeded;
  // }

  // re-render would happen here

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  /**
   * PHASE 3: UNMOUNTING
   * This lifecyle hook will be executed once
   */
  componentWillUnmount() {
    console.log('componentWillUnmount');
    // clearInterval(this.timer);
    // abort any pending ajax requests
    // remove any event listerners
  }

  render() {
    console.log('render');
    return (
      <div className="session">
        <h1>State and Lifecycle</h1>
        <hr />

        <h2>
          <span>Example: Online shop </span>
          <span>number {this.state.randomNumber}</span>
        </h2>
        <h3>Current Date {this.state.date.toLocaleTimeString()}</h3>

        <Shop />
      </div>
    );
  }
}

export default Main;
