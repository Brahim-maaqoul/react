import {useState} from 'react'

function MyApp() {
	return (
		<div>
			<h1>Counters that update seperately</h1>
			<MyButton/>
			<MyButton/>
		</div>	
	);	
}

function MyButton() {
	const [count, setCount] = useState(0);
	function handleClick() {
		setCount(count + 1);
	}
	return (
		<button onClick={handleClick}>
			Clicked {count} times
		</button>
	);
}
//Do not call the event handler function: you only need to pass it down.
//React will call your event handler when the user clicks the button.
// ReactDOM.render(<MyApp/>, document.querySelector("body"));
