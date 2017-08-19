import './App.css';
import 'rsuite/dist/styles/rsuite-dark.css';
import Menu from './components/Menu';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from './actions/users';

const App = props => {
  const { getUsersRequest, users } = props;

  useEffect(() => {
    getUsersRequest();
  }, [getUsersRequest]);

  return (
    <div className="App">
      <Menu users={users.items}></Menu>
    </div>
  );
};

export default connect(
  ({ users }) => ({ users }),
  {
    getUsersRequest
  }
)(App);
