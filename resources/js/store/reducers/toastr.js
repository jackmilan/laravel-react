import { TOGGLE_TOASTR } from '../actionTypes';

const defaultState = {
  show: false,
  color: 'red',
  status: 'Error',
  text: '',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_TOASTR:
      const { show, color, status, text } = action.payload;

      return {
        ...state,
        show: show || false,
        color: color || 'red',
        status: status || 'Error',
        text: text || '',
      };
    default:
      return state
  }
}