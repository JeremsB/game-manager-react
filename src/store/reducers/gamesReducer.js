import {GET_GAMES} from '../types'

const initialState = {
    games:[],
    loading:true
}

// eslint-disable-next-line import/no-anonymous-default-export
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
