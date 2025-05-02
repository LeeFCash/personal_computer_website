import React, { useEffect, useState } from 'react';
import { Rnd } from 'react-rnd';

export function DESKTOP() {
	const [data, setData] = useState([]);
	const [activeApp, setActiveApp] = useState(null);
	const [activeApp1, setActiveApp1] = useState(null);
	const [activeApp2, setActiveApp2] = useState(null);
	const [activeApp3, setActiveApp3] = useState(null);
	const [activeApp4, setActiveApp4] = useState(null);
	const [activeApp5, setActiveApp5] = useState(null);
	const [searchClickState, setSearchClickState] = useState(0);
	const [showApp1, setShowApp1] = useState(null);
	const [showApp2, setShowApp2] = useState(null);
	const [showApp3, setShowApp3] = useState(null);
	const [showApp4, setShowApp4] = useState(null);
	const [showApp5, setShowApp5] = useState(null);
	const [aboutMeAppPage, setAboutMeAppPage] = useState(0);
	const [bSearchURL, setBSearchURL] = useState("");
  	const [currentPath, setCurrentPath] = useState('/home/user');
  	const [terminalState, setTerminalState] = useState('/home/user');
  	//const [current_terminal_location, setCurrent_terminal_location] = useState(null);
	// current_terminal_location
	useEffect(()=> {
		fetch("http://localhost:3308/data")
		.then(res => res.json())
		.then(data => setData(data))
		.catch(err => console.log(err));
            	//setCurrent_terminal_location(dataCopy[0].current_terminal_location);
  		//const [current_terminal_location, setCurrent_terminal_location] = useState(null);
	}, []);
	console.log('Data:', data);
        const dataCopy = JSON.parse(JSON.stringify(data));
	const lsHomeNames = dataCopy.map(item => item.lsHome).join(', ');
	const appNames = data.map(item => item.app).join(', ');
	function searchClick(){
		setSearchClickState(1);
		//setActiveApp(1);
	}
	function searchAction(e){
		//var searchApp = document.getElementById('searchApp');
		if(e.key === "Enter"){
			if(e.target.value === "about app") {
				if(activeApp5 === null) {
					setShowApp5(1);
					setActiveApp5(1);
				}
				if(activeApp5 === 1){
					setShowApp5(null);
					setActiveApp5(null);
				}
			}
			if(e.target.value === "about me app") {
				if(activeApp4 === null) {
					setShowApp4(1);
					setActiveApp4(1);
				}
				if(activeApp4 === 1){
					setShowApp4(null);
					setActiveApp4(null);
				}
			}
			if(e.target.value === "browser"){
				if(activeApp3 === null){
					setShowApp3(1);
					setActiveApp3(1);
				}
				if(activeApp3 === 1){
					setShowApp3(null);
					setActiveApp3(null);
				}
			}
			if(e.target.value === "music app") {
				if(activeApp2 === null) {
					setShowApp2(1);
					setActiveApp2(1);
				}
				if(activeApp2 === 1){
					setShowApp2(null);
					setActiveApp2(null);
				}
			}
			if(e.target.value === "terminal") {
				if(activeApp1 === null) {
					setShowApp1(1);
					setActiveApp1(1);
				}
				if(activeApp1 === 1){
					setShowApp1(null);
					setActiveApp1(null);
				}
			}
			setSearchClickState(0);
		}
	}
	function showApp1f(){
		   setAboutMeAppPage(1);
	}
	function showApp2f(){
		   setAboutMeAppPage(2);
	}
	function showApp3f(){
		   setAboutMeAppPage(3);
	}
	function bSearch(e) {
		if(e.key === 'Enter') {
			//var inputB = e.target.value;
			if(e.target.value) {
				var inputValue = e.target.value;
				let finalURL = inputValue.startsWith('http') ? inputValue : `https://${inputValue}`;
				setBSearchURL(finalURL);
			}
		}
	}
	function app1toggle() {
		if(showApp1 === 1) {
			setShowApp1(0);
		}
		if(showApp1 === 0) {
			setShowApp1(1);
		}
	}
	function app2toggle() {
		if(showApp2 === 1) {
			setShowApp2(0);
		}
		if(showApp2 === 0) {
			setShowApp2(1);
		}
	}
	function app3toggle() {
		if(showApp3 === 1) {
			setShowApp3(0);
		}
		if(showApp3 === 0) {
			setShowApp3(1);
		}
	}
	function app4toggle() {
		if(showApp4 === 1) {
			setShowApp4(0);
		}
		if(showApp4 === 0) {
			setShowApp4(1);
		}
	}
	function app5toggle() {
		if(showApp5 === 1) {
			setShowApp5(0);
		}
		if(showApp5 === 0) {
			setShowApp5(1);
		}
	}
	var terminal_output = document.getElementById('terminal_output');
	function terminalInput(e) {
		if(e.key === 'Enter') {
			if(e.target.value === 'ls') {
				if(dataCopy[0].current_terminal_location === '~'){
					setTerminalState('~ ls');
				}
				if(dataCopy[0].current_terminal_location === '~/Downloads'){
					setTerminalState('~/Downloads ls');
				}
				if(dataCopy[0].current_terminal_location === '~/Videos'){
					setTerminalState('~/Videos ls');
				}
				if(dataCopy[0].current_terminal_location === '~/Pictures'){
					setTerminalState('~/Pictures ls');
				}
			}
			if(e.target.value === 'cd Downloads' && dataCopy[0].current_terminal_location === '~') {dataCopy[0].current_terminal_location = "~/Downloads";}
			if(e.target.value === 'cd Videos' && dataCopy[0].current_terminal_location === '~') {dataCopy[0].current_terminal_location = "~/Videos";}
			if(e.target.value === 'cd Pictures' && dataCopy[0].current_terminal_location === '~') {dataCopy[0].current_terminal_location = "~/Pictures";}
			if(e.target.value === 'cd ~') {dataCopy[0].current_terminal_location = "~";}
		}
	}

return (<div className='pc_div'>
	<main className='above_bar'>
	{ showApp5 === 1 &&
        <Rnd
              default={{
                x: 100,
                y: 100,
                width: 500,
                height: 600,
              }}
              bounds="window"
              minWidth={200}
              minHeight={100}
            >
        <div className='aboutMe' style={{boxSizing: 'border-box'}}>
         <div>
	  <p>What is this website about?</p>
	  <ul>
	   <li>To show what I can do either directly or indirectly.</li>
	   <li>To tell other what I like or have done.</li>
	   <li>To get other that are intrested in the same thing to come together weather by me or others to hangout or learn from each other.</li>
	   <li>To help me get a job when needed.</li>
	  </ul>
	 </div>
         <div>
	  <p>Why did I make this website?</p>
	  <p>in part due to me wanting to make a website like this and in part due to Me wanting a better website for my digital-portfolio than what I had/have(I made the old website myself and this one)</p>
	 </div>
         <div>
	  <p>How to resize and move the apps in this website?</p>
	  <p>To move the app click and hold middle eara and to resize do the same but on the edge.(why not try it on this app)</p>
	 </div>
         <div>
	  <p>How to changed music in music app?</p>
	  <p>Click the 3 lines next to the name of video than pick the song you want.(music I have in my playlist)</p>
	 </div>
         <div>
	  <p>How do I use the terminal?</p>
	  <p>Use the terminal in a similar way that linux terminal works like using the commands ls, cd, cat, etc...(if more)</p>
	 </div>
        </div>
        </Rnd>}
	{ showApp4 === 1 && 
	 <Rnd
	      default={{
	        x: 100,
	        y: 100,
	        width: 500,
	        height: 540,
	      }}
	      bounds="window"
	      minWidth={200}
	      minHeight={100}
	    >
	      <div className='aboutMe' style={{boxSizing: 'border-box'}}>
		<header className='aboutMe_header'>
		 <nav className='aboutMe_nav'>
		  <ui className='aboutMe_Hui'>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp1f}>about me</button></li>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp2f}>skills</button></li>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp3f}>contact</button></li>
		  </ui>
		 </nav>
		</header>
		{ aboutMeAppPage === 1 && <div className='aboutMe_tab1d'>
		  <section>
                   <img src={require("./../IMG/MeIMG.jpg")} alt='404'></img>
                   <div>
                    <div>
		     <p>Name: Lee Cash</p>
		    </div>
                    <div>
		     <p>Age: 19</p>
		    </div>
                    <div>
		     <p>Education: High school Diploma</p>
		    </div>
            	   </div>
        	  </section>
		  <section className='aboutMe_tab1s2'>
                   <div>
                    <img src={require("./../IMG/diploma.jpg")} alt='error 404'></img>
                    <p> I've received this diploma as a result of graduating.</p>
                   </div>
                   <div>
                    <img src={require("./../IMG/awardDC.png")} alt='error 404'></img>
                    <p> The Teachers at Hixson High School anonymously voted 3 people to receive a reward for self discipline.</p>
                   </div>
                   <div>
                    <img src={require("./../IMG/rewardTeaching.jpg")} alt='error 404'></img>
                    <p>I got the Denise Burt-Turner Special Needs P.E award for taking a small group of special needs students to a classroom and teaching them.</p>
                   </div>
                  </section>
		</div>}
		{ aboutMeAppPage === 2 && <div className='aboutMe_tab2d'>
		 <section className='aboutMe_tab2s1'>
        	  <h1>Skill set</h1>
        	  <ul>
          	   <li>JavaScript</li>
          	   <li>HTML</li>
          	   <li>Css</li>
        	  </ul>
        	  <h1>Links</h1>
        	  <ul>
           	   <li><a href="https://docs.google.com/document/d/11U-PeRWKpVxDgFKCo7N4ncxbx-QHA7CDqgkC0bXaRfo/edit?usp=sharing" target="_blank"> Click this to see Resume</a></li>
          	   <li><a href="https://github.com/LeeFCash" target="_blank"> Click this to see my github</a></li>
          	   <li><a href="https://youtube.com/playlist?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7&si=XAfIlmkHPb5N08BR" target="_blank"> Click this to see my updated blog</a></li>
        	  </ul>
      		 </section>
     		 <section className='aboutMe_tab2s2'>
        	  <h1>Main show/tell stuff</h1>
        	  <div className='aboutMe_tab2LinkList'><img onClick={() => {window.open('https://youtube.com/playlist?list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7&si=k_Q--_StUMwJtDwV');}} src={require("./../IMG/clickHere.gif")} alt="404"></img><p>Blogs</p></div>
        	  <div className='aboutMe_tab2LinkList'><img onClick={() => {window.open('https://github.com/LeeFCash');}} src={require("./../IMG/clickHere.gif")} alt="404"></img><p>github</p></div>
         	  <div className='aboutMe_tab2LinkList'><img onClick={() => {window.open('https://x.com/LeeCash93973076');}} src={require("./../IMG/clickHere.gif")} alt="404"></img><p>X</p></div>
        	  <div className='aboutMe_tab2LinkList'><img onClick={() => {window.open('https://youtube.com/playlist?list=PL7vr_kFNXDB5Lk_Ag8mthtbyt5WadyrRD&si=YpkuKHsEZhNl1zV2');}} src={require("./../IMG/clickHere.gif")} alt="404"></img><p>Game Coding Club - video stuff</p></div>
      		 </section>
      		 <section className='aboutMe_tab2s3'>
        	  <h1 className='aboutMe_tab2s3'>Experience gained</h1>
        	  <p className='aboutMe_tab2s3'>So far the only experience I have is teaching at hixson high school shown by the Denise Burt-Turner Special Needs P.E award also some mentoring at chattanooga state community college for TN promise.</p>
        	  <img className='aboutMe_tab2s3' src={require("./../IMG/rewardTeaching.jpg")} alt='error 404'></img>
      		 </section>
		</div>}
		{ aboutMeAppPage === 3 && <div>
		 <section className='aboutMe_tab3s1'>
		  <p className='aboutMe_tab3s1'>If you're interested here's how to contact me and some information.</p>
      		   <div className='aboutMe_tab3s1'>
        	    <p className='aboutMe_tab3s1'>Lee F. Cash</p>
           	    <p className='aboutMe_tab3s1'>leecash133@gmail.com</p>
        	    <p className='aboutMe_tab3s1'>+1 762 222-3156</p>
      		   </div>
      		  <h1 className='aboutMe_tab3s1'>Profile - </h1>
      		  <p className='aboutMe_tab3s1'>Highly motivated and creative college student dedicated to obtaining a degree in Web Design. Proficient in HTML, CSS, and JavaScript, with a commitment to staying abreast of industry trends and emerging technologies. Currently developing skills in Node.js and React JS. Seeking an opportunity to collaborate with cross-functional teams, eager to apply skills and contribute to innovative web design projects. Excited to bring technical skills and design sensibilities to a challenging and rewarding role in web design.</p>
     		 </section>
		</div>}
	      </div>
         </Rnd>
	}
	{ showApp3 === 1 && 
	<Rnd
              default={{
                x: 100,
                y: 100,
                width: 500,
                height: 300,
              }}
              bounds="window"
              minWidth={200}
              minHeight={100}
            >
              <div className='aboutMe' style={{boxSizing: 'border-box'}}>
	 <iframe className='webV' src={bSearchURL} title=" for searching"></iframe>
	 <input onKeyDown={bSearch}></input>
	 <ul>
	  <li>websites that works: </li>
	  <li onClick={() => setBSearchURL('https://www.wikipedia.org/')}>https://www.wikipedia.org/</li>
          <li onClick={() => setBSearchURL('https://www.youtube.com/embed/videoseries?si=21q2IJqXbE8AXbC7&list=PL7vr_kFNXDB7JnTKGR6ZX_kqQGjUqeBQ7')}>My YouTube blog Playlist</li>
	 </ul>
	</div>
	</Rnd>}
	{ showApp2 === 1 &&
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
              <div className='aboutMe' style={{boxSizing: 'border-box'}}>
         <iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?si=8BfF0d38YH6LTKEs&amp;list=PL7vr_kFNXDB5bufsmOkDHEEdwFI75cMs3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	 <p>PlayList of music I like. (Lee Cash)</p>
        </div>
        </Rnd>}
	{ showApp1 === 1 &&
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
              <div className='aboutMe' style={{boxSizing: 'border-box'}}>
		<div>
		{ terminalState === '~ ls' && <div id='terminal_output'><p> . .. Downloads Videos Pictures</p></div>}
		{ terminalState === '~/Downloads ls' && <div id='terminal_output'><p>. .. about_me_app.png brave.png clickHere.gif magnifying_glass.png questions_app.png rmR.png </p></div>}
		{ terminalState === '~/Videos ls' && <div id='terminal_output'><p>. .. blog_playlist.mp4 </p></div>}
		{ terminalState === '~/Pictures ls' && <div id='terminal_output'><p>. .. awardDC.png  diploma.jpg  meG.jpg  MeIMG.jpg  rewardDiscipline.png  rewardTeaching.jpg </p></div>}
		</div>
	 <input onKeyDown={terminalInput}></input>
        </div>
        </Rnd>}
	</main>
        <main className='doBar_main'>
	{ activeApp !== 0 && <div className='emptyBar'>
          <div onClick={searchClick} className='emptyBar_search'>
                search
          </div>
         </div>}
	<div className='emptyBar'>
	  <div className='emptyBar_search'>
		 <p onClick={searchClick}>
		  search
	         </p>
		{ activeApp1 === 1 && <div>
				<img className='bottom_bar_allIMG' onClick={app1toggle} src={require('./../IMG/rmR.png')} alt="rmR"></img>
		</div>}
		{ activeApp2 === 1 && <div>
				<img className='bottom_bar_allIMG' onClick={app2toggle} src={require('./../IMG/magnifying_glass.png')} alt="rmR"></img>
		</div>}
		{ activeApp3 === 1 && <div>
				<img className='bottom_bar_allIMG' onClick={app3toggle} src={require('./../IMG/brave.png')} alt="rmR"></img>
		</div>}
		{ activeApp4 === 1 && <div>
				<img className='bottom_bar_allIMG' onClick={app4toggle} src={require('./../IMG/about_me_app.png')} alt="rmR"></img>
		</div>}
		{ activeApp5 === 1 && <div>
				<img className='bottom_bar_allIMG' onClick={app5toggle} src={require('./../IMG/questions_app.png')} alt="rmR"></img>
		</div>} 
	  </div>
	 </div>
	{ searchClickState === 1 && <div className='searchClick'>
	<input onKeyDown={searchAction}></input>
	<p className='searchClick_text'> names of apps<br />
		{appNames}</p>
	</div>}
	</main>
</div>)}
export default DESKTOP;
