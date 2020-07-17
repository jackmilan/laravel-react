import { CALL_TOASTR } from '../actionTypes';

const defaultState = {
  show: false,
  color: 'red',
  status: 'Error',
  text: '',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CALL_TOASTR:
      const { show, color, status, text } = action.payload;

      return {
        ...state,
        show: show || false,
        color: color || '',
        status: status || '',
        text: text || '',
      };
    default:
      return state
  }
}