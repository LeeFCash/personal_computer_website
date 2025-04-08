import react, { useEffect, useState } from 'react';
export function DESKTOP() {
const [data, setData] = useState([]);
useEffect(()=> {
	fetch("http://localhost:3308/data")
	.then(res => res.json())
	.then(data => setData(data))
	.catch(err => console.log(err));
}, []);
console.log(data);
return (<div className='login_div'>
        <main className='login_main'>
	 <div className='login_window'>
	  <img className='login_IMG' src={require('.././IMG/meG.jpg')} alt='404'></img>
	  <p className='login_text'> DESKTOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>
	  <input></input>
	 </div>
	</main>
</div>)}
export default DESKTOP;
