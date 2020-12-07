import { Component } from "react";
import humans from "./data";
import Employees from "./components/Employees";

class App extends Component {
  render() {
    return (
      <Employees employees={humans}/>
    )
  }
}

export default App;
