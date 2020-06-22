const initialState = {
    name: '',
   // email: '',
    userId: '',
    company: '',
}
const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN':{
            console.log(action.payload,'userReducer')
            return {
                ...state,
                name: action.payload.name,
              //  email: action.payload.email,
                userId: action.payload.userId,
                company: action.payload.company,
            };
        }
        default:{
            return state
        }
    }
}
export default userReducer