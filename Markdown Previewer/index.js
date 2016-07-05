
import React from 'react';
import ReactDOM from 'react-dom';

class DisplayText extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Markdown\n=======\n##Header\n>this is a note\n\n```\nlet num = 4;\nconsole.log(num)```'
    };
    this.updateValue = this.updateValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  updateValue(inputValue) {
    this.setState({
      value: inputValue
    });
  }
  handleChange(e) {
    var inputText = e.target.value;
    this.updateValue(inputText);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <textarea rows="18" type="text" className="form-control"
              value={this.state.value} onChange={this.handleChange}
          />
        </div>

        <div className="col-md-6" dangerouslySetInnerHTML={{__html: marked(this.state.value)}} >
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <DisplayText />,
  document.getElementById("container")
);
