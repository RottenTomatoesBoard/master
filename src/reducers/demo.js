import { EXPRESS_TEST_RESULTS, DB_TEST_RESULTS, EXPRESS_TEST_ERROR, DB_TEST_ERROR, DB_COMMENTS_RESULTS } from '../actions';

const initialState = {
    results: '',
    comments:[]
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case EXPRESS_TEST_RESULTS:
            return { ...state, results: "Test Succeeded!  " + action.data }
        case DB_TEST_RESULTS:
            return { ...state, results: "Test Succeeded!  " + action.data }
        case EXPRESS_TEST_ERROR:
            return { ...state, results: "Test Failed!  " + action.data }
        case DB_TEST_ERROR:
            return { ...state, results: "Test Failed!  " + action.data }
        case DB_COMMENTS_RESULTS:
            return { ...state, comments: action.data }

        default:
            return state
    }
}

export default demo;
