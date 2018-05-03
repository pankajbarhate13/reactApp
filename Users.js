import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.name.title}>
                <td>{item.name.title}</td>
                <td>{item.name.first}</td>
                <td>{item.name.last}</td>
                <td>{item.gender}</td>
                <td>{item.location.street}, {item.location.city}, {item.location.state}, {item.location.postcode}</td>
                <td><img src={item.picture.thumbnail} width="80" height="80"/></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
    }
  }
}
export default Users;