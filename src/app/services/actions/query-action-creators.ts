import { IQuery } from '../../../types/query-runner';
import { anonymousRequest, authenticatedRequest } from './query-action-creator-util';

export function runQuery(query: IQuery, profileRequest: boolean): Function {
  return (dispatch: Function, getState: Function) => {
    const tokenPresent = getState().authToken;

    if (tokenPresent) {
      return authenticatedRequest(dispatch, query, profileRequest);
    }

    return anonymousRequest(dispatch, query);
  };
}
