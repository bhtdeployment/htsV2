export default function bdReducer(state = {
  lastRow: {},
  currentRow: {}
}, action) {

  let newState;

  switch (action.type) {

    case "FETCH_LAST_BD_ROW_FULFILLED":

      newState = Object.assign({}, state, {lastRow: action.payload.data});

      return newState;

    case "SAVE_BD_ROW_FULFILLED":

      newState = Object.assign({}, state, {lastRow: action.payload.data});

      return newState;

    case "FETCH_EDIT_ROW_FULFILLED":

      newState = Object.assign({}, state, {
        currentRow: action.payload.data[0],
        lastRow: (action.payload.data[1]
          ? action.payload.data[1]
          : {})
      });

      return newState;

    case "SAVE_EDIT_ROW_FULFILLED":

      newState = Object.assign({}, state, {currentRow: action.payload.data});

      return newState;

    case "SAVE_EDIT_ROW_REJECTED":

      newState = Object.assign({}, state);

      return newState;

    default:

      return state;

  }

}