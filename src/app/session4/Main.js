import React from 'react';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      productName: '',
      productPrice: 0
    };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log('Submit', this.state);
  };

  render() {
    return (
      <div className="session">
        <h1>Forms/Inputs in React</h1>
        <hr />
        <h2>Add a new product</h2>

        <form id="product-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" name="productName" type="text" value={this.state.productName} onChange={this.handleChange} />

          <br />
          <br />

          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="productPrice"
            type="number"
            value={this.state.productPrice}
            onChange={this.handleChange}
          />

          <br />
          <br />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default Main;
