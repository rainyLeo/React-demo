import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class SearchContainer extends React.Component {
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
      dataType: 'jsonp',
      url: URL,
      success: (response) => {
        console.log(response);
        this.setState({searchResults: response.results});
      }
    });
  }
  render() {
    return (
      <div>
        <SearchBox search={this.search} />
        <SearchResults searchResults={this.state.searchResults} />
      </div>
    );
  }
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleAjax = this.handleAjax.bind(this);
  }
  handleAjax() {
    let query = ReactDOM.findDOMNode(this.refs.query).value;
    let category = ReactDOM.findDOMNode(this.refs.category).value;
    let URL = `https://itunes.apple.com/search?term=${query}&country=${(this.refs.country).value}&entity=${category}`;
    this.props.search(URL);
  }
  render() {
    return (
      <div className='searchBox'>
        <input type="text" ref="query" className='input' placeholder='search something' />
        <select ref="category" className='select'>
          <option value="software">Apps</option>
          <option value="musicTrack">Music</option>
          <option value="podcast">Podcast</option>
          <option value="movie">Movies(USA)</option>
        </select>
        <select ref="country" className='select'>
          <option value="cn">China</option>
          <option value="us">USA</option>
        </select>
        <button type="submit" className='button' onClick={this.handleAjax}>Search</button>
      </div>
    );
  }
}
SearchBox.propTypes = {
  search: React.PropTypes.func
};

function SearchResults(props) {

  let resultItems = props.searchResults.map((result) => {
    if (result.trackName.length > 40) {
      result.trackName = result.trackName.slice(0, 40) + '...';
    }
    return (
      <li key={result.trackId}>
        <img src={result.artworkUrl60} />
        <a href={result.trackViewUrl} target='_blank' rel='noopener noreferrer'>
           {result.trackName}
        </a>
      </li>
    );
  });
  return (
    <ul> {resultItems} </ul>
  );
}
SearchResults.propTypes = {
  searchResults: React.PropTypes.array
};

ReactDOM.render(
  <SearchContainer />, document.getElementById("content")
);
