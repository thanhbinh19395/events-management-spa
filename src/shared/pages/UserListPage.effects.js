import { Observable } from 'rxjs/Observable';

import {
  FETCH_USER_LIST_START,
  FETCH_USER_LIST_CANCELLED,
  fetchUserListFailed,
  fetchUserListSucceeded,
} from './UserListPage.actions';

const fetchUserListEpic = (action$, store, { axios }) => action$.ofType(FETCH_USER_LIST_START)
  .switchMap(() => Observable.fromPromise(axios.get('/users'))
    .map(response => fetchUserListSucceeded(response.data))
    .catch(error => Observable.of(fetchUserListFailed(error.message, error.status, error.xhr)))
    .takeUntil(action$.ofType(FETCH_USER_LIST_CANCELLED)));

export default [
  fetchUserListEpic,
];
