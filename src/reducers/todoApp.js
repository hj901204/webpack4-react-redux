

let initState = {
    count:0
}

const todoApp = (state = initState, action) => {
    
    switch (action.type) {
        case 'listClick':
            return {...state,...action};    
        default:    
            return state;
    }
}

export default todoApp;


