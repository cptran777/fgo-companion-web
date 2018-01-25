import About from '../components/about/index';
import * as actions from '../actions/index';
import { StoreState } from '../types/index';
import * as alias from '../types/alias';
import { connect, Dispatch } from 'react-redux';

function mapStateToProps({ testState }: StoreState) {
  return { testValue: testState };
}

function mapDispatchToProps(dispatch: Dispatch<actions.TestAction>) {
  return {
    onTest: (item: alias.Value) => dispatch(actions.testAction(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);