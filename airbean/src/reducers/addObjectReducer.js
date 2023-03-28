import React from 'react'

const userChoiceARRAY = {
    array: [],
}

const addObjectReducer = (state = userChoiceARRAY, action) => {
    switch (action.type) {
        case 'ADD_OBJECT':
            return{
                ...state,
                array: state.array + action.payload
            }
    }
}

export default addObjectReducer;