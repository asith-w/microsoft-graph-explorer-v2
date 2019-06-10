import { classNamesFunction, FocusTrapZone, ITheme, MessageBar, MessageBarType, styled } from 'office-ui-fabric-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { clearQueryError } from '../services/actions/error-action-creator';
import { appStyles } from './App.styles';
import { Authentication } from './authentication';
import { classNames } from './classnames';
import { QueryResponse } from './query-response';
import { QueryRunner } from './query-runner';
import Sidebar from './sidebar/Sidebar';

interface IAppProps {
  theme?: ITheme;
  styles?: object;
  error: object | null;
}

class App extends Component<IAppProps> {
  public render() {
    const classes = classNames(this.props);
    const { error, actions }: any = this.props;

    return (
      <FocusTrapZone>
        <div className={`container-fluid ${classes.app}`}>
          <div className='row'>
            <div className='col-sm-3 col-md-3'>
              <Sidebar />
            </div>
            <div className='col-sm-8 col-md-8'>
              <Authentication />
              <QueryRunner />
              {error &&
                <MessageBar
                  messageBarType={MessageBarType.error}
                  isMultiline={false}
                  onDismiss={actions.clearQueryError}
                >
                  {`${error.statusText} - ${error.status}`}
                </MessageBar>
              }
              <QueryResponse />
            </div>
          </div>
        </div>
      </FocusTrapZone>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    error: state.queryRunnerError
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ clearQueryError }, dispatch)
  };
};

const StyledApp = styled(App, appStyles);

export default connect(mapStateToProps, mapDispatchToProps)(StyledApp);
