import React from 'react';
import ReactDOM from 'react-dom';

function Avatar(props) {
  return (
    <div>
      <PagePic pagename={props.pagename}/>
      <PageLink pagename={props.pagename}/>
    </div>
  );
}

function PagePic(props) {
  return (
    <img src={'https://avatars.githubusercontent.com/u/18493379?v=3/'}
      style={{ height: 150 }} />
  );
}

function PageLink(props) {
  return (
    <div>
      {props.pagename}
    </div>
  );

}

ReactDOM.render(
  <Avatar pagename="Avatar"/>, document.getElementById('app'));
