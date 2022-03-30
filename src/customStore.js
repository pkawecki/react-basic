import reducer from "./reducer";

function createStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    //Call the reducer
    state = reducer(state, action);
  }

  return {
    getState,
    dispatch
  };
}

export default createStore(reducer);
