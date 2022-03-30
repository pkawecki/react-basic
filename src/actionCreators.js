import * as actionTypes from "./actionTypes";
import store from "./store";

export const bugAdded = (description) => {
  store.dispatch({
    type: actionTypes.BUG_ADDED,
    payload: {
      description: "Bug12"
    }
  });
};

export const bugRemoved = (id) => {
  store.dispatch({
    type: actionTypes.BUG_REMOVED,
    payload: {
      id
    }
  });
};

export const removeAll = () => {
  store.dispatch({
    type: actionTypes.REMOVE_ALL
  });
};

export const bugResolved = (id) => {
  store.dispatch({
    type: actionTypes.BUG_RESOLVED,
    payload: {
      id
    }
  });
};
