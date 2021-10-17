import {GET_GAMES} from '../types'

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_GAMES:
            return {
                ...state,
                games:action.payload,
                loading:false

            }
        default: return state
    }

}
