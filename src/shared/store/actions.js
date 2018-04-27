// Add all redux actions here

import 'isomorphic-fetch';

export const dashDataFetchDataSuccess = items => {
    return {
        type: 'DATA_FETCH_DATA_SUCCESS',
        items
    };
  }

export const featuresDataFetch = url => {
    return (dispatch) => {
      fetch(url,{mode:'cors'})
      .then((response) => {
          console.log(response.json());
          if (!response.ok) {
              throw Error(response.statusText);
          }
          return response;
      })
      .then(response => response.json())
      .then(items => {
        return dispatch(dashDataFetchDataSuccess(items))
      })
    //   .catch((err) => {console.log(err);dispatch(dashDataHasErrored(true))});
    };
  }