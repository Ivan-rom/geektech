import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../../redux/actions";

class UsersClassPages extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <>
        <h1>Users class component</h1>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};

const mapDispatchToProps = {
  getUsers: getUsersAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassPages);
