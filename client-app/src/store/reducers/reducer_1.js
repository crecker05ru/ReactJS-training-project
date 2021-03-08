
function reducer(state, action) {
    switch(action.type){
        case ACTION_1 : return { value: action.value_1 };
        case ACTIION_2 : return { value: action.value_2 };
        default : return state;

    }
}