import { TODOAPP } from '../consts/ActTypes';
let actions = {
    listClick: (count) => (dispatch, getState) => {
        console.log(getState()[TODOAPP])
        console.log(count);
        //let state = getState()[TODOAPP].count
        //dispatch({ type: 'listClick', state });
        dispatch({ type: 'listClick', count });
    },
}
export default actions