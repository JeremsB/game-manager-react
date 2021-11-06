import {GET_CONSOLES} from '../types'

const initialState = {
    consoles:[],
    loading:true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){

    switch(action.type){

        case GET_CONSOLES:
            return {
                ...state,
                consoles:action.payload,
                loading:false

            }
        default: return state
    }

}
