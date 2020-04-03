import { createStore } from 'redux';

export default createStore(function(state: any, action: any) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === 'INCREMENT') {
    return { ...state, number: state.number + Number(action.size) };
  }
  return state;
}, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
