import randID from "../randID";

export const userReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_USER':
            return [{
                firstName: action.user.firstName, 
                lastName: action.user.lastName, 
                age: action.user.age, 
                occupation:action.user.occupation, 
                description: action.user.description, 
                id: randID()
            }, ...state ]
        case 'DELETE_USER':
            return state.filter(item=>{return (item !== action.user)})
        case 'EDIT_USER':
            return state.map(user =>{
                if(user.id === action.id){
                    Object.assign(user, {[action.name]: action.newValue})
                }
                return user
            })
        default: 
            return state

    }
}