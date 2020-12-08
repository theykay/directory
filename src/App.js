import { Component } from "react";
import humans from "./data";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <Content employees={humans}/>
    )
  }
}

export default App;
