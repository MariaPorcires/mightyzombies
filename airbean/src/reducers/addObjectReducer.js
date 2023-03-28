

const userChoiceARRAY = {
    order: [],
}

const addObjectReducer = (state = userChoiceARRAY, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'ADD_OBJECT':
    
            const totalOrder = state.order.concat([...state.order], action.payload);
            console.log(state);
            console.log(userChoiceARRAY);

            return {
                ...state,
                order: totalOrder
            }
        default:
            return state
    }
}

export default addObjectReducer;