import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class LeaderContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: []
    };
    this.search = this.search.bind(this);
  }
  search(URL) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: URL,
      success: (response) => {
        this.setState({
          searchResults: response
        });
      }
    });
  }
  render () {
    return (
        <table>
          <Header search={this.search} />
          <User searchResults={this.state.searchResults} />
        </table>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    };
    this.handleAjax = this.handleAjax.bind(this);
  }
  componentDidMount () {
    let url = 'http://fcctop100.herokuapp.com/api/fccusers/top/recent';
    this.props.search(url);
  }
  handleAjax() {
    let url;
    this.setState({
      click: !this.state.click
    });
    if (this.state.click === true) {
      url = 'http://fcctop100.herokuapp.com/api/fccusers/top/recent';
    } else {
      url = 'http://fcctop100.herokuapp.com/api/fccusers/top/alltime';
    }
    this.props.search(url);
  }
  render () {
    return (
      <tbody>
        <tr>
          <th>#</th>
          <th>Camper name</th>
          <th><a href='#' onClick={this.handleAjax} >Points in past 30 days</a></th>
          <th><a href='#' onClick={this.handleAjax} >All time Points</a></th>
        </tr>
        </tbody>
    );
  }
}
Header.propTypes = {
  search: React.PropTypes.func
};

function User(props) {
  let resultItems = props.searchResults.map((item, index) => {
    return (
      <tr>
        <td>{index+1}</td>
        <td>
          <img src={item.img} style={{height: 45}} />
          <a href={`https://www.freecodecamp.com/${item.username}`} target='_blank'>{item.username}</a></td>
        <td>{item.recent}</td>
        <td>{item.alltime}</td>
      </tr>
    );
  });
  return (
    <tbody>{resultItems}</tbody>
  );
}
User.propTypes = {
  searchResults: React.PropTypes.array
};

ReactDOM.render(
  <LeaderContainer />,
  document.getElementById('app')
);
