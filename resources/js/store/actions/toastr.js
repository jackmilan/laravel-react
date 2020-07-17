import { CALL_TOASTR } from '../actionTypes';

export function callToastr(payload) {
    return { type: CALL_TOASTR, payload }
};