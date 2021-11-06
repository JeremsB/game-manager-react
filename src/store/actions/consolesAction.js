import {GET_CONSOLES, CONSOLES_ERROR} from '../types'
import axios from 'axios'

export const getConsoles = () => async dispatch => {

    try{
        const res = await axios.get(`http://localhost:3456/console`)
        dispatch( {
            type: GET_CONSOLES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: CONSOLES_ERROR,
            payload: console.log(e),
        })
    }

}
