import axios from 'axios';


export const EXPRESS_TEST_START = "EXPRESS_TEST_START";
export const expressTestStart = () => {
    return { type: EXPRESS_TEST_START }
}

export const EXPRESS_TEST_RESULTS = "EXPRESS_TEST_RESULTS";
export const expressTestResults = (data) => {
    return { type: EXPRESS_TEST_RESULTS, data }
}

export const EXPRESS_TEST_ERROR = "EXPRESS_TEST_ERROR";
export const expressTestError = (data) => {
    return { type: EXPRESS_TEST_ERROR, data }
}

export const EXPRESS_TEST = "EXPRESS_TEST";
export const expressTest = () => {
    return dispatch => {
        dispatch(expressTestStart());
        axios.get(`/api/express-test`)
            .then(res => dispatch(expressTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(expressTestError(err)))

    }
}

export const DB_TEST_START = "DB_TEST_START";
export const dbTestStart = () => {
    return { type: DB_TEST_START }
}
export const DB_TEST_RESULTS = "DB_TEST_RESULTS";
export const dbTestResults = (data) => {
    return { type: DB_TEST_RESULTS, data }
}
export const DB_TEST_ERROR = "DB_TEST_ERROR";
export const dbTestError = (data) => {
    return { type: DB_TEST_ERROR, data }
}

export const DB_TEST = "DB_TEST"
export const dbTest = () => {
    return dispatch => {
        dispatch(dbTestStart());
        axios.get(`/api/products`)
            .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
            .catch(err => dispatch(dbTestError(err)))

    }
}

//OMDB namespace and actions go here:
export const DB_COMMENTS_RESULTS = "DB_COMMENTS_RESULTS";
export const dbCommentsResults = (data) => {
    return { type: DB_COMMENTS_RESULTS, comments: data }
}
export const postComment = (name, comment, imdbID,date) => {
    return dispatch => {
        console.log('action creator fired: '+name+ comment +imdbID+ date );
        // axios.get(`/id/:id`)
        // .then(res => dispatch(dbTestResults(JSON.stringify(res.data))))
        // .catch(err => dispatch(dbTestError(err)))

    }
  }

export const fetchComments = (imdbID) => {
  return dispatch => {
    console.log('fetchComments action works', imdbID);
      axios.get(`/api/id/${imdbID}`)
     .then(res => dispatch(dbCommentsResults(res.data)))
     .catch(err => dispatch(dbTestError(err)))
  }
}

//

// dispatch({
//           type: LOAD_SUCCESS,
// 					isLoading: false,
//           movies: responseJson.Search
//         })
