import  React , {Component} from  'react';

/**
 * prop 是组件对外定义的接口，state用于记录内部状态
 * prop赋值在组件外，state在组件内
 * 组件不应该改变props的值，state存在的意义就是让组件去改变的
 */
class ClickCounter extends Component{
    constructor(props){
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {
            count:props.initValue || 0
        }
    }
    onClickButton(){
        this.setState({
            count:this.state.count+1
        });
    }
    render(){
        const {initValue} = this.props;
        return (
            <div>
                <button onClick = {this.onClickButton} initValue={initValue}>Click Me</button>
                <p>Click Count:{this.state.count}</p>
            </div>
        )
    }
}

export default ClickCounter;