
const estadoInicial = {
    access_token: "",
    expires_in : "",
    refresh_token: "",
    token_type: "",
}

export default function(state = estadoInicial, action: any){
    // console.log(state, ' teste', action )
    switch(action.type){
        case ('ALTERA_TOKEN'):
            return {
                ...state,
                access_token: action.payload.access_token,
                expires_in : action.payload.expires_in,
                refresh_token: action.payload.refresh_token,
                token_type: action.payload.token_type,
            }
        default:
            return {
                ...state,
                access_token: "",
                expires_in : "",
                refresh_token: "",
                token_type: "",
            }

    }

}