export const FETCH_USER_LIST_START = 'FETCH_USER_LIST_START';
export const FETCH_USER_LIST_SUCCEEDED = 'FETCH_USER_LIST_SUCCEEDED';
export const FETCH_USER_LIST_FAILED = 'FETCH_USER_LIST_FAILED';
export const FETCH_USER_LIST_CANCELLED = 'FETCH_USER_LIST_CANCELLED';

export const requestFailed = type => (msg, status, xhr) => ({
  type,
  payload: msg,
  status,
  xhr,
});

export const fetchUserListStart = payload => ({
  type: FETCH_USER_LIST_START,
  payload,
});

export const fetchUserListSucceeded = payload => ({
  type: FETCH_USER_LIST_SUCCEEDED,
  payload,
});

export const fetchUserListFailed = requestFailed(FETCH_USER_LIST_FAILED);
