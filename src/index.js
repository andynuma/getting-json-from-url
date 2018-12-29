import React from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = { member: [] };
  }

  memberList(list) {
    const memberList = list.map((member, index) => {
      return (
        <li>
          {member.name} {member.age}
        </li>
      );
    });

    return <ul>{memberList}</ul>;
  }

  render() {
    console.log(this.state.member);
    return (
      <div>
        <button onClick={this.getJson}>Get json</button>
        {this.memberList(this.state.member)}
      </div>
    );
  }

  getJson = () => {
    const url = "https://api.myjson.com/bins/dfez0";

    axios.get(url).then(res => {
      // console.log(res.data);
      this.setState(res.data);
    });
  };
}

render(<App />, document.getElementById("root"));
