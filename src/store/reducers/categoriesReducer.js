import {GET_CATEGORIES} from '../types'

const initialState = {
    categories:[],
    loading:true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){

    switch(action.type){

        case GET_CATEGORIES:
            return {
                ...state,
                categories:action.payload,
                loading:false

            }
        default: return state
    }

}
