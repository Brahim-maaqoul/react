import {useState} from 'react'

function MyApp() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div>
			<h1>Counters that update seperately</h1>
			<MyButton count={count}onClick={handleClick}/>
			<MyButton count={count}onClick={handleClick}/>
		</div>	
	);	
}

function MyButton({count, onClick}) {
	return (
		<button onClick={onClick}>
			Clicked {count} times
		</button>
	);
}
//Do not call the event handler function: you only need to pass it down.
//React will call your event handler when the user clicks the button.
// ReactDOM.render(<MyApp/>, document.querySelector("body"));
