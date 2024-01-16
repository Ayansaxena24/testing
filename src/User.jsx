import React, { Component } from "react";
import { fetchUser } from "./Api";

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    fetchUser(this.props.id).then((user) => this.setState({ user }));
  }

  render() {
    return this.state.user === null ? (
      <p>Loading...</p>
    ) : (
      <div>
        <h1>{this.state.user.name}</h1>
        <p>{this.state.user.website}</p>
      </div>
    );
  }
}

export default User;
