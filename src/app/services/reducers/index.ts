import { combineReducers } from 'redux';

import { samples } from '../../../generate-queries/gen-queries';
import { authResponse } from './auth-reducers';
import { graphResponse } from './query-runner-reducers';

export default combineReducers({
  samples: () => (samples) ,
  graphResponse,
  authResponse,
});
