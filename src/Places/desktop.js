import React, { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';
export function DESKTOP() {
	const [data, setData] = useState([]);
	const [activeApp, setActiveApp] = useState(null);
	const [searchClickState, setSearchClickState] = useState(0);
	const [showApp, setShowApp] = useState(1);
	const [aboutMeAppPage, setAboutMeAppPage] = useState(0);
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
		//setActiveApp(1);
	}
	function searchAction(e){
		var searchApp = document.getElementById('searchApp');
		if(e.key === "Enter"){
			setSearchClickState(0);
		}
	}
	function showApp1(){
		   setAboutMeAppPage(1);
	}
	function showApp2(){
		   setAboutMeAppPage(2);
	}
	function showApp3(){
		   setAboutMeAppPage(3);
	}
return (<div className='pc_div'>
	<main className='above_bar'>
	{ showApp === 1 && 
	 <Rnd
	      default={{
	        x: 100,
	        y: 100,
	        width: 300,
	        height: 200,
	      }}
	      bounds="window"
	      minWidth={200}
	      minHeight={100}
	    >
	      <div style={{
	        background: 'white',
	        border: '1px solid #ccc',
	        width: '100%',
	        height: '100%',
	        boxSizing: 'border-box',
	        padding: '10px'
	      }}>
		<header className='aboutMe_header'>
		 <nav className='aboutMe_nav'>
		  <ui className='aboutMe_Hui'>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp1}>about me</button></li>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp2}>skills</button></li>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp3}>contact</button></li>
		  </ui>
		 </nav>
		</header>
		{ aboutMeAppPage === 1 && <p>Drag me! Resize me!1</p>}
		{ aboutMeAppPage === 2 && <p>Drag me! Resize me!2</p>}
		{ aboutMeAppPage === 3 && <p>Drag me! Resize me!3</p>}
	      </div>
         </Rnd>
	}
	</main>
        <main className='doBar_main'>
	{ activeApp !== 0 && <div className='emptyBar'>
          <div onClick={searchClick} className='emptyBar_search'>
                search
          </div>
         </div>}
	{ activeApp !== null && <div className='emptyBar'>
	  <div onClick={searchClick} className='emptyBar_search'>
		search 
		{ activeApp === 1 && <div>
				<img className='bottom_bar_allIMG' src={require('./../IMG/rmR.png')} alt="rmR"></img>
				<img className='bottom_bar_allIMG' src={require('./../IMG/magnifying_glass.png')} alt="rmR"></img>
				<img className='bottom_bar_allIMG' src={require('./../IMG/brave.png')} alt="rmR"></img>
				<img className='bottom_bar_allIMG' src={require('./../IMG/about_me_app.png')} alt="rmR"></img>
				<img className='bottom_bar_allIMG' src={require('./../IMG/questions_app.png')} alt="rmR"></img>
		</div>} 
	  </div>
	 </div>}
	{ searchClickState === 1 && <div className='searchClick'>
	<input onKeyDown={searchAction} id='searchApp'></input>
	<p className='searchClick_text'> names of apps<br />
		{appNames}</p>
	</div>}
	</main>
</div>)}
export default DESKTOP;
