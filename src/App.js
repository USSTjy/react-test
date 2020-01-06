import React, { Component } from 'react';
import Router from './Router';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow : true,
    }
  }

  handleClick() { 
    this.setState({
      isShow: !this.state.isShow,
    });
    console.log('ths.state', this.state);
  }

  render() {
    const list = Array(100).fill(1);
    const listdata = list.map((item) => {
      return (
        <div key={item.index}>{item}</div>
      )
    });
    return (
      <div className="App">
        <div className="App-header">
          <button onClick={() => this.handleClick()}>展示/隐藏</button>
          <span>Welcome to React</span>
        </div>
        <div className="App-content">
          {this.state.isShow &&
            <div className="App-content-left">
            <div>
              <a href="#/Detail">detail</a>
            </div>
            <div>
                <a href="#/">home</a>
            </div>
          </div>
          }
            
          <div className="App-content-right">
            {/* bbb
            {listdata} */}
            <Router />
          </div>
        </div>
        <div className="App-foot">
          foot
        </div>
      </div>
    );
  }
}

export default App;
