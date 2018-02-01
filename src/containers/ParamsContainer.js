import {postComment, fetchComments} from '../actions'
import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Params from '../components/Params/Params'

function mapStateToProps(state) {
  return {
    results: state.demo.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postComment: (name, comment, imdbID) => {
        console.log('dispatch to props:',name);
        dispatch(postComment(name, comment, imdbID, dispatch));
      },
    fetchComments: (imdbID) => {
      console.log('fetch comments dispach to props work!', imdbID);
      dispatch(fetchComments(imdbID));
    },
    actions : bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Params);
