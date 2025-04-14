import React, { useEffect, useState } from 'react';
export function DESKTOP() {
	const [data, setData] = useState([]);
	const [activeWindows, setActiveWindows] = useState(0);
	const [searchClickState, setSearchClickState] = useState(0);
	useEffect(()=> {
		fetch("http://localhost:3308/data")
		.then(res => res.json())
		.then(data => setData(data))
		.catch(err => console.log(err));
	}, []);
	console.log('Data:', data);
	const appNames = data.map(item => item.app).join(', ');
	function searchClick(){
		setSearchClickState(1);
	}
return (<div className='pc_div'>
	<main className='above_bar'></main>
        <main className='doBar_main'>
	{ activeWindows === 0 && <div className='emptyBar'>
	  <div onClick={searchClick} className='emptyBar_search'>search</div>
	  <img src={require('./../IMG/rmR.png')} alt="rmR"></img>
	 </div>}
	{ searchClickState === 1 && <div className='searchClick'>
	<input></input>
	<p className='searchClick_text'> names of apps {appNames}</p>
	</div>}
	</main>
</div>)}
export default DESKTOP;
