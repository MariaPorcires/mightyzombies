const userChoiceARRAY = {
    order: [],
}

const addObjectReducer = (state = userChoiceARRAY, action) => {
    switch (action.type) {
        case 'ADD_OBJECT':
    
            const totalOrder = state.order.concat(action.payload);
            console.log(totalOrder);

            return {
                ...state,
                order: totalOrder
            }
        default:
            return state
    }
}

export default addObjectReducer;
export {userChoiceARRAY}