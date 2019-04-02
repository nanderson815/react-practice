import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {
  state = {
    friends: friends
  }

  handleDelete = id => {
    console.log(id)
    const friends = this.state.friends.filter(friend => friend.id !== id)
    this.setState({ friends });
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map((data) => <FriendCard delete={this.handleDelete} key={data.id} data={data} />)}
      </Wrapper>
    )
  }

}

export default App;
