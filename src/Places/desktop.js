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
	      <div className='aboutMe' style={{boxSizing: 'border-box'}}>
		<header className='aboutMe_header'>
		 <nav className='aboutMe_nav'>
		  <ui className='aboutMe_Hui'>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp1}>about me</button></li>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp2}>skills</button></li>
		   <li className='aboutMe_Hui_li'><button className='aboutMe_buttons' onClick={showApp3}>contact</button></li>
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
        	  <div className='aboutMe_tab2LinkList'><img src={require("./../IMG/clickHere.gif")} alt="404"></img><p>Blogs</p></div>
        	  <div className='aboutMe_tab2LinkList'><img src={require("./../IMG/clickHere.gif")} alt="404"></img><p>github</p></div>
         	  <div className='aboutMe_tab2LinkList'><img src={require("./../IMG/clickHere.gif")} alt="404"></img><p>X</p></div>
        	  <div className='aboutMe_tab2LinkList'><img src={require("./../IMG/clickHere.gif")} alt="404"></img><p>school</p></div>
        	  <div className='aboutMe_tab2LinkList'><img src={require("./../IMG/clickHere.gif")} alt="404"></img><p>Blog#3</p></div>
        	  <div className='aboutMe_tab2LinkList'><img src={require("./../IMG/clickHere.gif")} alt="404"></img><p>Blog#2</p></div>
        	  <div className='aboutMe_tab2LinkList'><img src={require("./../IMG/clickHere.gif")} alt="404"></img><p>Blog#1</p></div>
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
