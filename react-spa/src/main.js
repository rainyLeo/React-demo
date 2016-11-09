import React from 'react';
import {render} from 'react-dom';
import {
  Router,
  Route,
  Link,
  hashHistory,
  IndexRoute,
} from 'react-router';
import { Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './main.css';

import myTable from './components/table.js';
import myForm from './components/form.js';
import myChart from './components/chart.js';
import myCalendar from './components/calendar.js';
import myCard from './components/fetch.js';

class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      username: '',
    };
  }

  componentDidMount() {
    this.getUser();
  }
  
  handleClick = (e) => {
    this.setState({current: e.key});
  }

  getUser = () => {
    this.setState({username: 'rainyleo'});
  }

  render() {
    return (
      <div>
        <div id="leftMenu">
          <img src='src/assets/images/logo.png' width="50" id="logo" />
          <Menu theme="dark" onClick={this.handleClick} style={{
            width: 185
          }} defaultOpenKeys={['sub1', 'sub2']} defaultSelectedKeys={[this.state.current]} mode="inline">
            <SubMenu key="sub1" title={< span > <Icon type="mail" /> < span > 导航一 < /span></span >}>
              <Menu.Item key="1">
                <Link to="/myTable">表格</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/myForm">表单</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/myChart">图表</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/myCalendar">日历</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={< span > <Icon type="appstore" /> < span > 导航二 < /span></span >}>
              <Menu.Item key="5">
                <Link to="/myCard">导航</Link>
              </Menu.Item>

            </SubMenu>
          </Menu>
        </div>
        <div id="rightWrap">
          <Menu mode="horizontal">
            <SubMenu title={< span > <Icon type="user" />
              {this.state.username} < /span>}>
              <Menu.Item key="setting:1">退出</Menu.Item>
            </SubMenu>
          </Menu>
          <div className="right-box">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={Sider}>
      <IndexRoute path="myCard" component={myCard} />
      <Route path="myTable" component={myTable} />
      <Route path="myForm" component={myForm} />
      <Route path="myChart" component={myChart} />
      <Route path="myCalendar" component={myCalendar} />
      <Route path="myCard" component={myCard} />
    </Route>
  </Router>
), document.getElementById('app'));
