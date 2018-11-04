import { combineEpics } from 'redux-observable';

import userListPageEffects from '../pages/UserListPage.effects';

export default combineEpics(...userListPageEffects);
