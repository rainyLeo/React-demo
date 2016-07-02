var FriendContainer = React.createClass({
  getInitialState: function() {
    alert('In getInitialState');
    return {
      name: 'rainy leo',
      friends: ['michael', 'bob', 'taylor']
    };
  },

  // Invoked once before first render
  componentWillMount: function() {
    // calling setState here does not cause a render
    alert('In componentWillMount');
  },
  // Invoked once after the first render
  componentDidMount: function() {
    // You now have access to this.getDOMNode()
    alert('In componentDidMount');
  },
  //Invoked whenever there is a prop change
  //Called before render
  componentWillReceiveProps: function(nextProps) {
    // Not called for the initial render
    // Previous props can be accessed by this.props
    // Calling setState here does not trigger an additional re-render
    alert('In componentWillReceiveProps');
  },
  //Invoked immediately before a component is unmounted
  componentWillUpdate: function(nextProps, nextState) {
    alert('In componentWillMount');
  },
  addFriend: function(e) {
    this.setState({
      friends: this.state.friends.concat([e])
    });
  },
  render: function() {
    return (
      <div>
        <h2>Name: {this.state.name}</h2>
        <UpdateFriend addNew={this.addFriend} />
        <ListFriend names={this.state.friends} />
      </div>
    );
  }
});

var UpdateFriend = React.createClass({
  getInitialState: function() {
    return {
      newName: ''
    };
  },
  updateItem: function(e) {
    this.setState({
      newName: e.target.value
    });
  },
  handleNew: function() {
    this.props.addNew(this.state.newName);
    this.setState({
      newName: ''
    });
  },
  render: function() {
    return (
      <div>
        <input type='text' value={this.state.newName} onChange={this.updateItem} />
        <button onClick={this.handleNew}>Add Friend</button>
      </div>
    );
  }
});

var ListFriend = React.createClass({
  getDefaultProps: function() {
    return {
      names: []
    };
  },
  render: function() {
    var listItems = this.props.names.map(function(e) {
      return <li>{e}</li>;
    });
    return (
      <div>
        <h2>Friend List</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
});

ReactDOM.render(
  <FriendContainer />,
  document.getElementById('example')
);
