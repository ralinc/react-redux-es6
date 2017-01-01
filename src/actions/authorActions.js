import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().
      then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).
      catch(error => {
        console.log(error);
      });
  };
}

export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors
  };
}
