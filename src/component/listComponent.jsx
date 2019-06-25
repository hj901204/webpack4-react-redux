import React,{Component} from 'react';

export default class listComponent extends Component{

    constructor(props){
        super(props)

    }
    clickBtn = () =>{
        this.props.listClick('12345')
    }
    render(){
        console.log(this.props);
        return (
            <div onClick={this.clickBtn} className="clickNames">请点击我啊{this.props.count}</div>
        )
    }
}   