import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [1],
      _counter: 1
    };

    this.addItems = this.addItems.bind(this);
  }

  addItems() {
    let _items = this.state.items;
    _items.push(this.state._counter + 1);
    this.setState({
      items: _items,
      _counter: this.state._counter + 1
    });
  }

  render() {
    const items = this.state.items.map(ele => {
      return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnterTimeout={500}
          transitionAppearTimeout={500}
          transitionLeaveTimeout={500}
          transitionEnter={true}
          transitionLeave={true}
        >
          <li>Item ID: {ele}</li>
        </ReactCSSTransitionGroup>
      );
    });

    return (
      <div>
        <React.Fragment>
          <button onClick={this.addItems}>Add Item</button>
        </React.Fragment>
        <ReactCSSTransitionGroup
          transitionName="example2"
          transitionAppear={true}
          transitionEnterTimeout={5000}
          transitionAppearTimeout={500}
          transitionLeaveTimeout={500}
          transitionEnter={true}
          transitionLeave={true}
        >
          <div className="App">
            <h1>Hello CodeSandbox</h1>
            <ul>{items}</ul>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
