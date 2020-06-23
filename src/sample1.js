import React,{useState} from 'react';

Let sample1=()=>{
	const [count,changeCount]=useState(0);
	Let increment=()=>{
		setCount(count+1)
	}
	return(
       <div style={{border:"1px solid #ddd",padding:"1%",textAlign:"center"}}>
       <h2>{count}</h2>
       <button onClick={increment}>increment</button>
       </div>
   

		)
}

export default sample1;