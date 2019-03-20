import {
    DISABLE_BALANCE_ON_ADD,
    DISABLE_BALANCE_ON_EDIT,
    ALLOW_REGISTRATION
} from '../actions/types';

// const initialState = {   // Taking care in localStorage
//     disableBalanceOnAdd: true,
//     disableBalanceOnEdit: false,
//     allowRegistration: false
// }

export default function (state = {}, action) {
    switch (action.type) {
        case DISABLE_BALANCE_ON_ADD:
            return {
                ...state,
                disableBalanceOnAdd: action.payload         // !state.disableBalanceOnAdd
            }
        case DISABLE_BALANCE_ON_EDIT:
            return {
                ...state,
                disableBalanceOnEdit: action.payload        // !state.disableBalanceOnEdit
            }
        case ALLOW_REGISTRATION:
            return {
                ...state,
                allowRegistration: action.payload           // !state.allowRegistration
            }
        default:
            return state;
    }
}