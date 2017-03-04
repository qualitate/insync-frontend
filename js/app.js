import React from 'react';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:9000/api/test')
      .then((response) => {
        return response.json();
      }).then((obj) => {
        this.setState({foo: obj.foo});
    });
  }

  render() {
     return (
      <div>{this.state.foo}</div>
      )
  }
}

export default App;