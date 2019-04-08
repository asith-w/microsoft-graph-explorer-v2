import React, { Component } from 'react';

import './app.scss';
import { Authentication } from './authentication';
import { QueryResponse } from './query-response';
import { QueryRunner } from './query-runner';
import { Sidebar } from './sidebar';

class App extends Component {
  public render() {
    return (
      <div className='app container-fluid'>
        <div className='row'>
          <div className='col-md-3 sidebar'>
            <Sidebar/>
          </div>
          <div className='col-sm-12 col-md-9 explorer'>
            <Authentication/>
            <QueryRunner/>
            <QueryResponse/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
