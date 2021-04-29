import { SIGNUP_DATA } from "../types/auth"
 const initial_state = {
     isLoading : false,

 }

export default(
    state = initial_state,
    action :  IReduxAction
    ) : typeof initial_state => {
        switch(action.type){
            case SIGNUP_DATA.SIGNUP_START : {
                return{
                    ...state,
                    isLoading: true,
                }
            }
            case SIGNUP_DATA.SIGNUP_SUCCESS : {
                return{
                    ...state,
                    isLoading: false,
                }
            }
            case SIGNUP_DATA.SIGNUP_STOP : {
                return{
                    ...state,
                    isLoading: false,
                }
            }
            default : {
                return state
            }
        }
    }
    
