import {GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL} from "../actions/userInfo";

const iniState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};
export default function reducer(state = iniState,action){
    switch (action.type){
        case GET_USER_INFO_REQUEST:
            return{
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg:''
            };
        case GET_USER_INFO_SUCCESS:
            return{
                ...state,
                isLoading: false,
                userInfo: action.result.data,
                errorMsg: ''
            };
        case  GET_USER_INFO_FAIL:
            return{
                ...state,
                isLoading: false,
                userInfo: {},
                errorMsg:'請求錯誤'
            };
        default:
            return state;
    }

}