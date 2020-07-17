import { TOGGLE_TOASTR } from '../actionTypes';

export function toggleToastr(payload) {
    return { type: TOGGLE_TOASTR, payload }
};