import React,{Component} from 'react';
class Sample extends Component{
   constructor(){
   	super();
   	this.sister={
   		name:"aksha",
   		age:"20",
   		count:0
   	}
   }
   increment=()=>{
   	this.setState({
   		count:this.state.count+1
   	})
   }
   render(){
   	return(
   	<div style={{textAlign:"center"}}>
   {/*JSX-->Javascript extension */}
   <h2>{ this.props.key}</h2>
   <button onClick={this.increment}> increment</button>
   </div>
   )
   }
} 

export default Sample;