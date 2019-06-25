import React,{Component} from 'react'
import ListComponent from '../component/listComponent.jsx'
import { connect } from 'react-redux'
import actions from '../actions/ListAct'

import { fromJS,Record } from 'immutable';

class ListCont extends Component{
    constructor(props, context) {
        super(props, context);
        
    }
   
    render(){
        return (
            <div>
              <ListComponent {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        count: state.todoApp.count
    }
};

const mapDispatchToProps = (dispatch) => ({
    listClick: (data) => {dispatch(actions.listClick(data))},
    //listClick: (count) => {dispatch({ type: 'listClick', count })}, // 也行
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCont);