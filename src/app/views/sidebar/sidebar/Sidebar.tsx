import { Pivot, PivotItem } from 'office-ui-fabric-react';
import React, { Component } from 'react';

import { Samples } from '../samples/Samples';

import './sidebar.scss';

export class Sidebar extends Component {
  public render() {
    return (
      <div>
        <Pivot className='sidebar-pivot'>
          <PivotItem
            headerText='Samples'
          >
            <Samples/>
          </PivotItem>
          <PivotItem
            headerText='History'
          >
            <p>History</p>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}

export default Sidebar;
