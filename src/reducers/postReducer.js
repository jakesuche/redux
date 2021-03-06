// import { FETCH_POSTS} from '../actions/types'
import { FETCH_POSTS , NEW_POST  } from '../actions/types'


const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            ///
            
            return {
                ...state, items:action.payload
            }
        case NEW_POST:
            return {
                ...state, items:[...state.items, action.payload]
            }
        default:
            return state;

    }
}