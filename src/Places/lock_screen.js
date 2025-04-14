import react, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function LOCK_SCREEN() {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	useEffect(()=> {
		fetch("http://localhost:3308/data")
		.then(res => res.json())
		.then(data => setData(data))
		.catch(err => console.log(err));
	}, []);
	//console.log(data);
	//var PCinfo = data;
	//console.log(PCinfo[0].owner_of_pc);
	function login(e){
		var input = document.getElementById('input');
		if (e.key === 'Enter') {
			if( input.value === data[0].login_password ){
				navigate('/desktop');
			}
			if( input.value !== data[0].login_password ){
				alert("wrong password maybe try open");
			}
		}
	}
return (<div className='login_div'>
        <main className='login_main'>
	 <div className='login_window'>
	  <img className='login_IMG' src={require('.././IMG/meG.jpg')} alt='404'></img>
	  <p className='login_text'>type password for user LeeCash</p>
	  <input id='input' onKeyDown={login}></input>
	 </div>
	</main>
</div>)}
export default LOCK_SCREEN;
