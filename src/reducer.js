import * as actionTypes from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === actionTypes.BUG_ADDED) {
    console.log("state", state, action);

    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
      }
    ];
  } else if (action.type === actionTypes.BUG_REMOVED)
    return state.filter((x) => x.id !== action.payload.id);
  else if (action.type === actionTypes.REMOVE_ALL) return [];
  else if (action.type === actionTypes.BUG_RESOLVED) {
    return state.map((x) => {
      if (x.id === action.payload.id) {
        return { ...x, resolved: true };
      }
      return x;
    });
  }
  return state;
}
